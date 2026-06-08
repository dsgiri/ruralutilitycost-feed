import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="h-auto md:h-[60px] bg-white border-t border-slate-200 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-[12px] text-slate-sub shrink-0 py-4 md:py-0 w-full mt-auto">
      <div className="mb-4 md:mb-0 text-center md:text-left flex-1">
        <span className="block md:inline">&copy; {currentYear} Rural Utility Cost.</span>
        <span className="hidden md:inline mx-2 text-slate-300">|</span>
        <span className="block md:inline mt-1 md:mt-0">Results are estimates. <Link to="/legal" className="text-brand-blue hover:text-blue-700 hover:underline">View full disclaimer.</Link></span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/about" className="hover:text-slate-text transition-colors">About</Link>
        <Link to="/portfolio" className="hover:text-slate-text transition-colors">Portfolio</Link>
        <Link to="/contact" className="hover:text-slate-text transition-colors">Contact</Link>
        <Link to="/legal" className="hover:text-slate-text transition-colors">Legal</Link>
        <Link to="/legal" className="hover:text-slate-text transition-colors">Privacy</Link>
        <Link to="/license" className="hover:text-slate-text transition-colors">License</Link>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-text transition-colors">GitHub</a>
      </div>
    </footer>
  );
}
