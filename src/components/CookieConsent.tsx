import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 md:p-6 z-50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
      <div className="text-[13px] md:text-[14px] flex-1 max-w-4xl">
        <h3 className="font-bold text-[15px] mb-1">Our specific use of Tracking & Cookies</h3>
        <p className="text-slate-300">
          We use cookies to improve your experience and deliver personalized analytics and advertisements. 
          By continuing to use this site, you consent to our use of cookies in accordance with our Privacy Policy.
        </p>
      </div>
      <div className="flex shrink-0 gap-3">
        <a href="/legal" className="px-4 py-2 text-[14px] font-semibold text-slate-300 hover:text-white transition-colors min-h-[48px] flex items-center justify-center border border-transparent">
          Learn More
        </a>
        <button 
          onClick={accept}
          className="px-6 py-2 bg-brand-blue hover:bg-blue-600 text-white rounded text-[14px] font-bold transition-colors min-h-[48px] flex items-center justify-center cursor-pointer"
        >
          Accept & Close
        </button>
      </div>
    </div>
  );
}
