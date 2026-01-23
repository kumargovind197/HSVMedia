import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const StatItem = ({ value, label, prefix = "", suffix = "" }: { value: number, label: string, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = 16; // 60fps
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-extrabold text-brand-600 mb-2">
        {prefix}{Math.floor(count).toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-medium uppercase tracking-wide text-sm">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
          <StatItem value={200} label="Countries Served" suffix="+" />
          <StatItem value={5} label="Daily Impressions" suffix="B+" />
          <StatItem value={35000} label="Active Publishers" suffix="+" />
          <StatItem value={12000} label="Advertisers" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default Stats;