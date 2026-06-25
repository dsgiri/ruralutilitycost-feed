import React, { useState } from 'react';
import { Disclaimer } from '../Disclaimer';

export function FeedWaste() {
  const [inputs, setInputs] = useState({
    totalFeed: 500,
    wastePercentage: 15,
    costPerTon: 250
  });

  const [result, setResult] = useState<{ tonsWasted: number; financialLoss: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const tonsWasted = inputs.totalFeed * (inputs.wastePercentage / 100);
    const financialLoss = tonsWasted * inputs.costPerTon;
    
    setResult({ tonsWasted, financialLoss });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
          Calculator Parameters
        </h2>
        <form onSubmit={handleCalculate} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Total Feed Purchased (tons)</label>
              <input type="number" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.totalFeed} onChange={(e) => setInputs({...inputs, totalFeed: parseFloat(e.target.value) || 0})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Cost of Feed ($/ton)</label>
              <input type="number" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.costPerTon} onChange={(e) => setInputs({...inputs, costPerTon: parseFloat(e.target.value) || 0})} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Estimated Waste (%)</label>
              <input type="number" step="0.1" className="w-full sm:w-1/2 bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.wastePercentage} onChange={(e) => setInputs({...inputs, wastePercentage: parseFloat(e.target.value) || 0})} />
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-100">
            <button type="submit" className="w-full sm:w-auto inline-flex h-12 items-center justify-center px-8 border border-transparent text-sm font-bold rounded-xl text-white bg-brand-blue hover:bg-blue-700 transition-all shadow-sm hover:shadow active:scale-[0.98]">
              Calculate Waste Impact
            </button>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-[380px] shrink-0">
        <div className="bg-slate-50/80 p-6 md:p-8 rounded-2xl border border-slate-200/80 h-full flex flex-col relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full pointer-events-none -mr-4 -mt-4" />
          
          <h3 className="text-slate-500 text-xs uppercase font-extrabold tracking-wider mb-6 relative z-10">Estimated Outcome</h3>
          {result !== null ? (
            <div className="flex-1 flex flex-col relative z-10">
              <div className="space-y-6 mb-6">
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <span className="text-slate-500 font-semibold text-xs uppercase tracking-wide block mb-1">Tons Wasted</span>
                  <span className="text-3xl font-extrabold text-slate-800 tracking-tight">{result.tonsWasted.toLocaleString(undefined, { maximumFractionDigits: 1 })} <span className="text-xl text-slate-500 font-medium">tons</span></span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm border-l-4 border-l-red-500">
                  <span className="text-slate-500 font-semibold text-xs uppercase tracking-wide block mb-1">Financial Loss</span>
                  <span className="text-4xl font-extrabold text-red-500 tracking-tight">-${result.financialLoss.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <Disclaimer calculatorName="Feed Waste Reduction Planner" />
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center relative z-10 min-h-[200px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-200/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-400 font-mono text-2xl">?</span>
                </div>
                <p className="text-slate-500 text-sm font-medium">
                  Enter parameters and calculate<br/>to see results.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
