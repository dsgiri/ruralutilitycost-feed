import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Wheat } from 'lucide-react';

export function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center justify-center text-center flex-1 w-full">
      <SEO 
        title="404: Page Not Found | Rural Utility Cost" 
        description="The requested page could not be found." 
      />
      <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mb-6">
        <Wheat className="w-8 h-8 opacity-50" />
      </div>
      <h1 className="text-4xl font-bold text-slate-text mb-4 tracking-tight">System Error: 404</h1>
      <p className="text-slate-500 text-lg mb-8 max-w-lg">
        The tool, calculator, or resource you are looking for has been moved or does not exist.
      </p>
      <Link 
        to="/" 
        className="inline-flex min-h-[48px] items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-barn hover:bg-barn-2 transition"
      >
        Return to Feed Hub
      </Link>
    </div>
  );
}
