import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../components/SEO';
import { AdSense } from '../components/AdSense';
import { Disclaimer } from '../components/Disclaimer';
import { TOOLS } from '../data';
import { ArrowLeft, Calculator } from 'lucide-react';
import { NotFound } from './NotFound';

export function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const tool = TOOLS.find(t => t.id === id);
  
  const [inputs, setInputs] = useState({
    herdSize: 50,
    costPerTon: 280,
    tonsNeeded: 10
  });
  
  const [result, setResult] = useState<number | null>(null);

  if (!tool) {
    return <NotFound />;
  }

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy calculation based on sample generic inputs
    const totalCost = inputs.costPerTon * inputs.tonsNeeded;
    setResult(totalCost);

    // Track analytics event
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', 'calculate', { element: `calculate_${tool.id}` });
    }
  };

  return (
    <div className="flex flex-col flex-1 w-full max-w-full">
      <SEO 
        title={`${tool.title} | Feed Hub`} 
        description={tool.description} 
      />
      
      <section className="bg-gradient-to-r from-[#1e293b] to-[#334155] text-white px-6 md:px-10 py-8 shrink-0">
        <div className="max-w-[1440px] mx-auto">
          <Link to="/" className="inline-flex items-center text-slate-300 hover:text-white transition-colors text-sm font-medium mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Feed Hub
          </Link>
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <Calculator className="w-6 h-6 text-brand-green" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">{tool.title}</h1>
          </div>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mt-4">
            {tool.description}
          </p>
        </div>
      </section>

      <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 pb-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-[18px] font-bold text-slate-text mb-6">Calculator Parameters</h2>
            
            <form onSubmit={handleCalculate} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="herdSize" className="block text-[13px] font-bold text-slate-text mb-1">Herd/Flock Size (Head)</label>
                  <input 
                    type="number" 
                    id="herdSize" 
                    className="w-full bg-white border border-slate-300 rounded-md min-h-[48px] p-2.5 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow text-slate-text" 
                    value={inputs.herdSize}
                    onChange={(e) => setInputs({...inputs, herdSize: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div>
                  <label htmlFor="costPerTon" className="block text-[13px] font-bold text-slate-text mb-1">Cost Per Ton ($)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                    <input 
                      type="number" 
                      id="costPerTon" 
                      className="w-full bg-white border border-slate-300 rounded-md min-h-[48px] p-2.5 pl-7 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow text-slate-text" 
                      value={inputs.costPerTon}
                      onChange={(e) => setInputs({...inputs, costPerTon: parseFloat(e.target.value) || 0})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="tonsNeeded" className="block text-[13px] font-bold text-slate-text mb-1">Total Tons Needed</label>
                  <input 
                    type="number" 
                    id="tonsNeeded" 
                    className="w-full bg-white border border-slate-300 rounded-md min-h-[48px] p-2.5 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow text-slate-text" 
                    value={inputs.tonsNeeded}
                    onChange={(e) => setInputs({...inputs, tonsNeeded: parseFloat(e.target.value) || 0})}
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="inline-flex min-h-[48px] items-center justify-center px-8 py-3 border border-transparent text-sm font-bold rounded-md text-white bg-brand-blue hover:bg-blue-700 transition">
                  Run Estimate
                </button>
              </div>
            </form>

            {result !== null && (
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="text-slate-text text-[13px] uppercase font-bold tracking-wide">Estimated Outcome</h3>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl font-bold text-brand-green">${result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  <span className="text-slate-500 font-medium text-sm">Total Cost</span>
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  That evaluates to <strong className="text-slate-text">${((result / inputs.herdSize) || 0).toFixed(2)}</strong> per head/animal.
                </div>
                
                {/* Reusable Disclaimer prominently placed right under the result */}
                <Disclaimer calculatorName={tool.title} />
              </div>
            )}
          </div>
          
          <div className="mt-8">
            <AdSense slot="in_content_ad_slot" className="w-full h-auto min-h-[90px]" />
          </div>
        </div>

        <aside className="hidden lg:block">
           <AdSense slot="sidebar_ad_slot" className="w-[300px] h-[600px] sticky top-[80px]" />
        </aside>
      </main>
    </div>
  );
}
