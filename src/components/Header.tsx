import { Link, useLocation } from 'react-router-dom';
import { Menu, Droplets } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Feed Hub', path: '/' },
    { label: 'Plan', href: 'https://plan.ruralutilitycost.com/' },
    { label: 'Forecast', href: 'https://forecast.ruralutilitycost.com/' },
    { label: 'What If', href: 'https://whatif.ruralutilitycost.com/' },
    { label: 'Predictor', href: 'https://predictor.ruralutilitycost.com/' },
    { label: 'My Favorites', path: '/favorites' },
  ];

  return (
    <header className="h-[60px] bg-white border-b border-slate-200 flex items-center shrink-0 w-full z-10 sticky top-0 px-4 md:px-6 justify-between">
      <div className="flex items-center gap-3">
        <a href="https://ruralutilitycost.com/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity">
          <span className="font-bold text-[16px] sm:text-[18px] text-brand-blue leading-none tracking-tight truncate">RuralUtilityCost</span>
          <span className="text-slate-300 leading-none">|</span>
          <span className="font-normal text-[16px] sm:text-[18px] text-slate-sub leading-none">Feed</span>
        </a>
      </div>

      <nav className="hidden md:flex gap-5 h-full items-center">
        {navLinks.map((link) => {
          const isActive = link.path ? (location.pathname === link.path || (link.path === '/' && location.pathname === '/')) : false;
          
          if (link.href) {
            return (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium min-h-[48px] flex items-center transition-colors px-2 text-slate-sub hover:text-slate-text border-b-2 border-transparent"
              >
                {link.label}
              </a>
            );
          }
          
          return (
            <Link
              key={link.label}
              to={link.path!}
              className={`text-[13px] font-medium min-h-[48px] flex items-center transition-colors px-2 ${
                isActive 
                  ? 'text-brand-blue border-b-2 border-brand-blue' 
                  : 'text-slate-sub hover:text-slate-text border-b-2 border-transparent'
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:block">
        <div className="text-[12px] font-semibold px-3 py-1.5 bg-slate-100 rounded-full text-slate-text">
          Member ID: 8842
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-sub hover:text-slate-text focus:outline-none focus:ring-2 focus:ring-brand-blue p-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-md"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-4 flex flex-col gap-2 z-20">
          {navLinks.map((link) => {
            if (link.href) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-sub hover:text-slate-text block text-base font-medium min-h-[48px] flex items-center px-4 rounded-md focus:bg-slate-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              );
            }
            
            return (
              <Link
                key={link.label}
                to={link.path!}
                className="text-slate-sub hover:text-slate-text block text-base font-medium min-h-[48px] flex items-center px-4 rounded-md focus:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
