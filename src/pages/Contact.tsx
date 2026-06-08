import { SEO } from '../components/SEO';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) { newErrors.name = 'Name is required'; isValid = false; }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Valid email is required'; isValid = false; }
    if (!formData.message.trim()) { newErrors.message = 'Message is required'; isValid = false; }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Optional tracking
      if (typeof window !== 'undefined' && 'gtag' in window) {
        // @ts-ignore
        window.gtag('event', 'click', { element: 'contact_submit' });
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
      <SEO 
        title="Contact Us | Feed by Rural Utility Cost" 
        description="Get in touch regarding the Feed app and the wider Rural Utility Cost ecosystem." 
      />
      <h1 className="text-3xl font-bold text-slate-text mb-6 tracking-tight">Contact Us</h1>
      
      <div className="bg-white border border-slate-200 rounded-xl p-8 text-sm leading-relaxed text-slate-sub">
        <p className="mb-8">
          We welcome your feedback and questions regarding the Feed app and the wider Rural Utility Cost ecosystem.
        </p>

        {isSubmitted ? (
           <div className="p-6 bg-green-50 border border-brand-green text-brand-green rounded-lg text-center font-medium" role="alert">
             Thank you for contacting us! We will get back to you shortly.
           </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-[13px] font-bold text-slate-text mb-1">Name</label>
              <input 
                 type="text" 
                 name="name" 
                 id="name" 
                 required
                 aria-required="true"
                 aria-invalid={!!errors.name}
                 aria-describedby={errors.name ? "name-error" : undefined}
                 value={formData.name}
                 onChange={e => setFormData({...formData, name: e.target.value})}
                 className={`w-full bg-white border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-md min-h-[48px] p-2.5 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow text-slate-text`} 
                 placeholder="Jane Doe" 
              />
              {errors.name && <p id="name-error" className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-[13px] font-bold text-slate-text mb-1">Email</label>
              <input 
                 type="email" 
                 name="email" 
                 id="email" 
                 required
                 aria-required="true"
                 aria-invalid={!!errors.email}
                 aria-describedby={errors.email ? "email-error" : undefined}
                 value={formData.email}
                 onChange={e => setFormData({...formData, email: e.target.value})}
                 className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-md min-h-[48px] p-2.5 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow text-slate-text`} 
                 placeholder="you@example.com" 
              />
              {errors.email && <p id="email-error" className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-[13px] font-bold text-slate-text mb-1">Message</label>
              <textarea 
                 id="message" 
                 name="message" 
                 rows={4} 
                 required
                 aria-required="true"
                 aria-invalid={!!errors.message}
                 aria-describedby={errors.message ? "message-error" : undefined}
                 value={formData.message}
                 onChange={e => setFormData({...formData, message: e.target.value})}
                 className={`w-full bg-white border ${errors.message ? 'border-red-500' : 'border-slate-300'} rounded-md p-2.5 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow text-slate-text`} 
                 placeholder="How can we help?"
              ></textarea>
              {errors.message && <p id="message-error" className="text-red-500 text-[12px] mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="inline-flex justify-center min-h-[48px] items-center py-2.5 px-6 border border-transparent rounded-md shadow-sm text-[13px] font-semibold text-white bg-brand-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors mt-2">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
