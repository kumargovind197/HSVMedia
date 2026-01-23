import React, { useState } from 'react';
import { MapPin, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    surname: '',
    email: '',
    object: '',
    service: 'Select the service',
    message: '',
    agree: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // HTML5 validation handles the 'required' check on inputs
    
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
        setStatus('success');
        setFormData({ surname: '', email: '', object: '', service: 'Select the service', message: '', agree: false });
        setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
   <section id="contact" className="py-24 bg-white">
  <div className="max-w-[1140px] mx-auto px-4">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-[42px] font-normal text-[#337ab7] mb-4">Contact</h2>
      <p className="text-[#666] text-lg font-light">
        Our experience interests you and you want to know more? HSV Media team is at your disposal.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* Left Column: Info */}
      <div className="text-[#666] space-y-6">
        <h3 className="text-3xl font-normal text-[#337ab7]">Contact us</h3>
        <p className="text-lg font-light leading-relaxed">
          In the heart of UK, HSV Media is ready to assist you.
        </p>
        <p className="text-lg font-light leading-relaxed">
          You can send us an email or use the form below. We reply within 24 working hours.
        </p>

        <div className="flex items-start gap-4">
          <MapPin size={36} className="text-[#2fa4e7] mt-1" strokeWidth={1.5} />
          <div>
            <h4 className="font-semibold text-slate-800 text-lg">HSV Media</h4>
            <p className="font-light text-lg">8 boulevard Dubreuil</p>
            <p className="font-light text-lg">91400 Orsay</p>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Surname"
            className="w-full px-4 py-3 border border-slate-300 rounded focus:border-[#2fa4e7] outline-none text-slate-700 font-light"
            value={formData.surname}
            onChange={(e) => setFormData({...formData, surname: e.target.value})}
            required
          />
          <input 
            type="email" 
            placeholder="Email"
            className="w-full px-4 py-3 border border-slate-300 rounded focus:border-[#2fa4e7] outline-none text-slate-700 font-light"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input 
            type="text" 
            placeholder="Subject"
            className="w-full px-4 py-3 border border-slate-300 rounded focus:border-[#2fa4e7] outline-none text-slate-700 font-light"
            value={formData.object}
            onChange={(e) => setFormData({...formData, object: e.target.value})}
            required
          />
          <select
            className="w-full px-4 py-3 border border-slate-300 rounded focus:border-[#2fa4e7] outline-none text-slate-700 font-light bg-white"
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
          >
            <option>Select the service</option>
            <option>Advertiser Support</option>
            <option>Publisher Support</option>
            <option>General Inquiry</option>
          </select>
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full px-4 py-3 border border-slate-300 rounded focus:border-[#2fa4e7] outline-none text-slate-700 font-light resize-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />

          <div className="text-right">
            <button 
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`bg-[#2fa4e7] text-white font-semibold py-3 px-8 rounded hover:bg-[#258bd3] transition-colors shadow-sm min-w-[140px] ${
                status === 'success' ? 'bg-green-500 hover:bg-green-600' : ''
              }`}
            >
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send'}
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>

  );
};

export default ContactForm;