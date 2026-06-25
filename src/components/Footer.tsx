import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="h-auto md:h-[60px] bg-white border-t border-slate-200 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-[12px] text-slate-sub shrink-0 py-4 md:py-0 w-full mt-auto">
      <div className="mb-4 md:mb-0 text-center md:text-left flex-1">
        <span className="block md:inline">&copy; {currentYear} Rural Utility Cost.</span>
        <span className="hidden md:inline mx-2 text-slate-300">|</span>
        <span className="block md:inline mt-1 md:mt-0">Results are estimates. <a href="https://www.ruralutilitycost.com/disclaimer" className="text-brand-blue hover:text-blue-700 hover:underline">View full disclaimer.</a></span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="https://ruralutilitycost.com/" className="hover:text-slate-text transition-colors">Parent Site</a>
        <a href="https://www.ruralutilitycost.com/contact" className="hover:text-slate-text transition-colors">Contact</a>
        <a href="https://www.ruralutilitycost.com/terms-of-use" className="hover:text-slate-text transition-colors">Terms of Use</a>
        <a href="https://www.ruralutilitycost.com/privacy-policy" className="hover:text-slate-text transition-colors">Privacy Policy</a>
        <a href="https://www.ruralutilitycost.com/disclaimer" className="hover:text-slate-text transition-colors">Disclaimer</a>
      </div>
    </footer>
  );
}
