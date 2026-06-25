import React, { useState } from 'react';
import { Disclaimer } from '../Disclaimer';

export function RationCompare() {
  const [inputs, setInputs] = useState({
    rationACost: 250,
    rationBCost: 280,
    rationAProtein: 12,
    rationBProtein: 14,
    intake: 25
  });

  const [result, setResult] = useState<{
    rationADaily: number;
    rationBDaily: number;
    rationAProteinCost: number;
    rationBProteinCost: number;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const costPerLbA = inputs.rationACost / 2000;
    const costPerLbB = inputs.rationBCost / 2000;
    
    const dailyA = costPerLbA * inputs.intake;
    const dailyB = costPerLbB * inputs.intake;
    
    const proteinCostA = costPerLbA / (inputs.rationAProtein / 100);
    const proteinCostB = costPerLbB / (inputs.rationBProtein / 100);

    setResult({
      rationADaily: dailyA,
      rationBDaily: dailyB,
      rationAProteinCost: proteinCostA,
      rationBProteinCost: proteinCostB
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <form onSubmit={handleCalculate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60">
              <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-wider mb-4 border-b border-slate-200/60 pb-2">Ration A</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Cost per Ton ($)</label>
                  <input type="number" step="0.01" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.rationACost} onChange={(e) => setInputs({...inputs, rationACost: parseFloat(e.target.value) || 0})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Protein Content (%)</label>
                  <input type="number" step="0.1" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.rationAProtein} onChange={(e) => setInputs({...inputs, rationAProtein: parseFloat(e.target.value) || 0})} />
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/60">
              <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-wider mb-4 border-b border-slate-200/60 pb-2">Ration B</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Cost per Ton ($)</label>
                  <input type="number" step="0.01" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.rationBCost} onChange={(e) => setInputs({...inputs, rationBCost: parseFloat(e.target.value) || 0})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Protein Content (%)</label>
                  <input type="number" step="0.1" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.rationBProtein} onChange={(e) => setInputs({...inputs, rationBProtein: parseFloat(e.target.value) || 0})} />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Target Daily Feed Intake (lbs/head)</label>
            <input type="number" step="0.1" className="w-full sm:w-48 bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.intake} onChange={(e) => setInputs({...inputs, intake: parseFloat(e.target.value) || 0})} />
          </div>
          
          <div className="pt-6">
            <button type="submit" className="w-full sm:w-auto inline-flex h-12 items-center justify-center px-8 border border-transparent text-sm font-bold rounded-xl text-white bg-brand-blue hover:bg-blue-700 transition-all shadow-sm hover:shadow active:scale-[0.98]">
              Compare Rations
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
                  <h4 className="font-bold text-sm text-slate-800 mb-3 uppercase tracking-wide">Ration A</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">Daily Cost</span>
                      <span className="font-bold text-brand-green">${result.rationADaily.toFixed(2)} / head</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">Cost / lb Protein</span>
                      <span className="font-bold text-slate-800">${result.rationAProteinCost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-sm text-slate-800 mb-3 uppercase tracking-wide">Ration B</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">Daily Cost</span>
                      <span className="font-bold text-brand-green">${result.rationBDaily.toFixed(2)} / head</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">Cost / lb Protein</span>
                      <span className="font-bold text-slate-800">${result.rationBProteinCost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-brand-blue/5 border border-brand-blue/10 text-brand-blue rounded-xl text-sm leading-relaxed">
                  <strong className="block mb-1.5 font-bold uppercase text-xs tracking-wide text-brand-blue/80">Analysis</strong>
                  Ration {result.rationAProteinCost < result.rationBProteinCost ? 'A' : 'B'} provides protein at a more cost-effective rate (${Math.min(result.rationAProteinCost, result.rationBProteinCost).toFixed(2)} vs ${Math.max(result.rationAProteinCost, result.rationBProteinCost).toFixed(2)} per lb of protein).
                  However, Ration {result.rationADaily < result.rationBDaily ? 'A' : 'B'} has a lower daily out-of-pocket cost per head.
                </div>
              </div>
              <div className="mt-auto pt-6">
                <Disclaimer calculatorName="Ration Comparison Tool" />
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
