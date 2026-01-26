import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    surname: '',
    email: '',
    object: '',
    service: 'Select the service',
    message: '',
    agree: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    emailjs
      .send(
        'service_oquikwb', 
        'template_4r3x3kd', 
        {
          surname: formData.surname,
          email: formData.email,
          object: formData.object,
          message: formData.message,
        },
        'YLAe7yU-qvpCmsQoF' // ✅ Public Key
      )
      .then(() => {
        setStatus('success');

        setFormData({
          surname: '',
          email: '',
          object: '',
          service: 'Select the service',
          message: '',
          agree: false,
        });

        setTimeout(() => setStatus('idle'), 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send email');
        setStatus('idle');
      });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1140px] mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[42px] font-normal text-[#337ab7] mb-4">
            Contact Us
          </h2>
          <p className="text-[#666] text-lg font-light">
           If you want to know more, Team HSV Media is at your disposal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left */}
          <div className="text-[#666] space-y-6">
            <h3 className="text-3xl font-normal text-[#337ab7]">Contact us</h3>
            <p className="text-lg font-light">
              Team HSV Media is ready to assist you
            </p>

            <div className="flex items-start gap-4">
              <MapPin size={36} className="text-[#2fa4e7]" />
              <div>
                <h4 className="font-semibold text-slate-800 text-lg">
                  Team HSV Media
                </h4>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border rounded"
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border rounded"
                value={formData.object}
                onChange={(e) => setFormData({ ...formData, object: e.target.value })}
                required
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-3 border rounded resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />

              <div className="text-right">
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`px-8 py-3 text-white rounded transition ${
                    status === 'success'
                      ? 'bg-green-500'
                      : 'bg-[#2fa4e7] hover:bg-[#258bd3]'
                  }`}
                >
                  {status === 'submitting'
                    ? 'Sending...'
                    : status === 'success'
                    ? 'Sent!'
                    : 'Send'}
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
