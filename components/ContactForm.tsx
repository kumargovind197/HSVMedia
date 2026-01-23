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
        <div className="text-center mb-20">
             <h2 className="text-[40px] font-normal text-[#337ab7] mb-6">Contact</h2>
             <p className="text-[#666] text-lg font-light">
                 Our experience interests you and you want to know more?
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Info */}
          <div className="text-[#666]">
             <h3 className="text-3xl font-normal text-[#337ab7] mb-8">Contact us</h3>
             <p className="text-lg font-light leading-relaxed mb-8">
                 In the heart of UK, HSV the team is at your disposal.
             </p>
             <p className="text-lg font-light leading-relaxed mb-12">
                 You can send us an email or use the form to request directly, we will reply within 24 hours worked.
             </p>

             <div className="flex items-start gap-6">
                <div className="text-[#337ab7] mt-1">
                    <MapPin size={40} strokeWidth={1.5} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">HSVmedia</h4>
                    <p className="font-light text-lg">8 boulevard Dubreuil</p>
                    <p className="font-light text-lg">91400 Orsay</p>
                </div>
             </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <input 
                        type="text" 
                        placeholder="Surname" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:border-[#2fa4e7] focus:ring-0 outline-none text-slate-600 font-light text-lg transition-colors"
                        value={formData.surname}
                        onChange={(e) => setFormData({...formData, surname: e.target.value})}
                        required
                    />
                </div>
                 <div>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:border-[#2fa4e7] focus:ring-0 outline-none text-slate-600 font-light text-lg transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>
                 <div>
                    <input 
                        type="text" 
                        placeholder="Object" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:border-[#2fa4e7] focus:ring-0 outline-none text-slate-600 font-light text-lg transition-colors"
                        value={formData.object}
                        onChange={(e) => setFormData({...formData, object: e.target.value})}
                        required
                    />
                </div>
                 <div>
                    <select
                        className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:border-[#2fa4e7] focus:ring-0 outline-none text-slate-600 font-light text-lg bg-white transition-colors"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                        <option>Select the service</option>
                        <option>Advertiser Support</option>
                        <option>Publisher Support</option>
                        <option>General Inquiry</option>
                    </select>
                </div>
                <div>
                    <textarea 
                        rows={6}
                        placeholder="Message"
                         className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:border-[#2fa4e7] focus:ring-0 outline-none text-slate-600 font-light text-lg resize-none transition-colors"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                    ></textarea>
                </div>
                
                <div className="flex items-start gap-3">
                     <input 
                        type="checkbox" 
                        id="agree"
                        className="mt-1.5 accent-[#2fa4e7] w-4 h-4"
                        checked={formData.agree}
                        onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                        required
                     />
                     <label htmlFor="agree" className="text-sm font-light text-slate-500 cursor-pointer select-none">
                         By submitting this form, I agree that the information entered will be used in the context of the commercial relationship that may arise from my request.
                     </label>
                </div>

                {/* Fake Captcha for Visual */}
                <div className="border border-slate-200 bg-slate-50 p-2 w-48 rounded flex items-center gap-3 select-none">
                    <div className="w-6 h-6 border-2 border-slate-300 rounded-sm"></div>
                    <span className="text-sm text-slate-600">I'm not a robot</span>
                    <div className="ml-auto">
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-8 h-8 opacity-50" alt="captcha"/>
                    </div>
                </div>

                <div className="text-right">
                    <button 
                        type="submit" 
                        disabled={status === 'submitting' || status === 'success'}
                        className={`bg-[#2fa4e7] text-white font-bold py-3 px-12 rounded-sm uppercase hover:bg-[#258bd3] transition-all flex items-center justify-center gap-2 ml-auto min-w-[160px] shadow-sm ${status === 'success' ? '!bg-green-500 hover:!bg-green-600' : ''}`}
                    >
                        {status === 'submitting' ? 'Sending...' : status === 'success' ? <><Check size={20}/> Sent!</> : 'Send'}
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