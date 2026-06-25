import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CookieConsent } from './CookieConsent';

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Notify GA of page view
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'page_view', { page_path: location.pathname });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      const scrollPercent = Math.round((window.scrollY / (docHeight - window.innerHeight)) * 100);
      
      if (scrollPercent === 50) {
        // @ts-ignore
        if (typeof window !== 'undefined' && 'gtag' in window) window.gtag('event', 'scroll', { percent: 50 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-earth-100 text-slate-text">
      <Header />
      
      <main id="main-content" className="flex-1 flex flex-col h-full w-full outline-none" tabIndex={-1}>
        <Outlet />
      </main>
      
      <Footer />
      
      <CookieConsent />
    </div>
  );
}
