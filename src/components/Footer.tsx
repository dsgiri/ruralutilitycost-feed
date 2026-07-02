import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white border-t border-line/50 py-8 px-4 flex flex-col items-center justify-center text-[13px] text-ink-soft shrink-0 mt-auto">
      <div className="mb-4 text-center">
        <span>&copy; {currentYear} Rural Utility Cost. Results are estimates.</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-5 md:gap-8 mb-4">
        <a href="https://plan.ruralutilitycost.com/" className="hover:text-ink transition-colors font-medium">Plan</a>
        <a href="https://forecast.ruralutilitycost.com/" className="hover:text-ink transition-colors font-medium">Forecast</a>
        <a href="https://whatif.ruralutilitycost.com/" className="hover:text-ink transition-colors font-medium">What If</a>
        <a href="https://predictor.ruralutilitycost.com/" className="hover:text-ink transition-colors font-medium">Predictor</a>
      </div>
      
      <div className="flex flex-wrap justify-center gap-5 md:gap-8">
        <a href="https://ruralutilitycost.com/" className="hover:text-ink transition-colors">Parent site</a>
        <a href="https://www.ruralutilitycost.com/contact" className="hover:text-ink transition-colors">Contact</a>
        <a href="https://www.ruralutilitycost.com/terms-of-use" className="hover:text-ink transition-colors">Terms of use</a>
        <a href="https://www.ruralutilitycost.com/privacy-policy" className="hover:text-ink transition-colors">Privacy policy</a>
        <a href="https://www.ruralutilitycost.com/disclaimer" className="hover:text-ink transition-colors">Disclaimer</a>
      </div>
    </footer>
  );
}
