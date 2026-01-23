import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'none';
  delay?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = "", 
  direction = 'up',
  delay = 0 
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const getTransform = () => {
    switch(direction) {
      case 'up': return 'translate-y-12';
      case 'left': return '-translate-x-12';
      case 'right': return 'translate-x-12';
      default: return '';
    }
  };

  const baseClasses = "transition-all duration-1000 ease-out transform";
  const visibleClasses = isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getTransform()}`;

  return (
    <div ref={ref} className={`${baseClasses} ${visibleClasses} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};
