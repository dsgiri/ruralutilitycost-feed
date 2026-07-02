import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Feed Hub', path: '/' },
    { label: 'My Favorites', path: '/favorites' },
  ];

  return (
    <header className="border-b border-line bg-paper sticky top-0 z-20">
      <div className="flex items-center justify-between px-5 md:px-8 py-4 max-w-[1180px] mx-auto">
        <Link to="/" className="flex items-baseline gap-2 text-base hover:opacity-90 transition-opacity">
          <span className="font-semibold text-barn tracking-tight">RuralUtilityCost</span>
          <span className="text-line">|</span>
          <span className="font-medium text-ink-soft">Feed</span>
        </Link>

        <nav className="hidden md:flex gap-7 text-sm text-ink-soft">
          {navLinks.map((link) => {
            const isActive = link.path ? (location.pathname === link.path || (link.path === '/' && location.pathname === '/')) : false;
            
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`transition-colors hover:text-barn ${
                  isActive ? 'text-barn font-medium' : ''
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-[13px] font-semibold text-barn-3 bg-wheat hover:bg-wheat-light transition-colors border border-transparent cursor-pointer">
            Sign in
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-ink-soft hover:text-ink focus:outline-none focus:ring-2 focus:ring-barn p-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-md"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-[69px] left-0 right-0 bg-paper border-b border-line shadow-lg p-4 flex flex-col gap-2 z-20">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.label}
                to={link.path}
                className="text-ink-soft hover:text-ink block text-base font-medium min-h-[48px] flex items-center px-4 rounded-md focus:bg-paper-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="px-4 pt-2">
            <button className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-md text-[13px] font-semibold text-barn-3 bg-wheat hover:bg-wheat-light transition-colors border border-transparent cursor-pointer">
              Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
