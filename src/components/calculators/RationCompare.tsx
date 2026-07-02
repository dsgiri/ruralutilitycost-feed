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

  const costPerLbA = inputs.rationACost / 2000;
  const costPerLbB = inputs.rationBCost / 2000;
  
  const dailyA = costPerLbA * inputs.intake;
  const dailyB = costPerLbB * inputs.intake;
  
  const proteinCostA = inputs.rationAProtein > 0 ? costPerLbA / (inputs.rationAProtein / 100) : 0;
  const proteinCostB = inputs.rationBProtein > 0 ? costPerLbB / (inputs.rationBProtein / 100) : 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-paper-2 p-5 rounded-xl border border-line/60">
              <h3 className="font-semibold text-ink text-sm uppercase tracking-wider mb-4 border-b border-line/60 pb-2">Ration A</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Cost per Ton ($)</label>
                  <input type="number" step="0.01" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.rationACost} onChange={(e) => setInputs({...inputs, rationACost: parseFloat(e.target.value) || 0})} />
                  <input 
                    type="range" 
                    min="0" max="1000" step="5"
                    className="w-full mt-3 accent-barn" 
                    value={inputs.rationACost} 
                    onChange={(e) => setInputs({...inputs, rationACost: parseFloat(e.target.value) || 0})} 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Protein Content (%)</label>
                  <input type="number" step="0.1" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.rationAProtein} onChange={(e) => setInputs({...inputs, rationAProtein: parseFloat(e.target.value) || 0})} />
                  <input 
                    type="range" 
                    min="0" max="100" step="0.1"
                    className="w-full mt-3 accent-barn" 
                    value={inputs.rationAProtein} 
                    onChange={(e) => setInputs({...inputs, rationAProtein: parseFloat(e.target.value) || 0})} 
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-paper-2 p-5 rounded-xl border border-line/60">
              <h3 className="font-semibold text-ink text-sm uppercase tracking-wider mb-4 border-b border-line/60 pb-2">Ration B</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Cost per Ton ($)</label>
                  <input type="number" step="0.01" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.rationBCost} onChange={(e) => setInputs({...inputs, rationBCost: parseFloat(e.target.value) || 0})} />
                  <input 
                    type="range" 
                    min="0" max="1000" step="5"
                    className="w-full mt-3 accent-barn" 
                    value={inputs.rationBCost} 
                    onChange={(e) => setInputs({...inputs, rationBCost: parseFloat(e.target.value) || 0})} 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Protein Content (%)</label>
                  <input type="number" step="0.1" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.rationBProtein} onChange={(e) => setInputs({...inputs, rationBProtein: parseFloat(e.target.value) || 0})} />
                  <input 
                    type="range" 
                    min="0" max="100" step="0.1"
                    className="w-full mt-3 accent-barn" 
                    value={inputs.rationBProtein} 
                    onChange={(e) => setInputs({...inputs, rationBProtein: parseFloat(e.target.value) || 0})} 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-line">
            <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Target Daily Feed Intake (lbs/head)</label>
            <input type="number" step="0.1" className="w-full sm:w-48 bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.intake} onChange={(e) => setInputs({...inputs, intake: parseFloat(e.target.value) || 0})} />
            <input 
              type="range" 
              min="0" max="100" step="1"
              className="w-full sm:w-48 mt-3 accent-barn block" 
              value={inputs.intake} 
              onChange={(e) => setInputs({...inputs, intake: parseFloat(e.target.value) || 0})} 
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[380px] shrink-0">
        <div className="bg-paper-2/80 p-6 md:p-8 rounded-2xl border border-line/80 h-full flex flex-col relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-barn/5 rounded-bl-full pointer-events-none -mr-4 -mt-4" />
          
          <h3 className="text-ink-soft text-xs uppercase font-extrabold tracking-wider mb-6 relative z-10">Estimated Outcome</h3>
          <div className="flex-1 flex flex-col relative z-10">
            <div className="space-y-6 mb-6">
              <div className="bg-white p-5 rounded-xl border border-line shadow-sm">
                <h4 className="font-bold text-sm text-ink mb-3 uppercase tracking-wide">Ration A</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-ink-soft text-xs font-medium uppercase tracking-wide">Daily Cost</span>
                    <span className="font-bold text-barn">${dailyA.toFixed(2)} / head</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-ink-soft text-xs font-medium uppercase tracking-wide">Cost / lb Protein</span>
                    <span className="font-bold text-ink">${proteinCostA.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl border border-line shadow-sm">
                <h4 className="font-bold text-sm text-ink mb-3 uppercase tracking-wide">Ration B</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-ink-soft text-xs font-medium uppercase tracking-wide">Daily Cost</span>
                    <span className="font-bold text-barn">${dailyB.toFixed(2)} / head</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-ink-soft text-xs font-medium uppercase tracking-wide">Cost / lb Protein</span>
                    <span className="font-bold text-ink">${proteinCostB.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-barn/5 border border-barn/10 text-barn rounded-xl text-sm leading-relaxed">
                <strong className="block mb-1.5 font-bold uppercase text-xs tracking-wide text-barn/80">Analysis</strong>
                Ration {proteinCostA < proteinCostB ? 'A' : 'B'} provides protein at a more cost-effective rate (${Math.min(proteinCostA, proteinCostB).toFixed(2)} vs ${Math.max(proteinCostA, proteinCostB).toFixed(2)} per lb of protein).
                However, Ration {dailyA < dailyB ? 'A' : 'B'} has a lower daily out-of-pocket cost per head.
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex h-12 items-center justify-center px-8 border border-transparent text-sm font-bold rounded-xl text-white bg-barn hover:bg-barn-2 transition-all shadow-sm hover:shadow active:scale-[0.98]">
                Download Report
              </button>
            </div>
            <div className="mt-auto pt-6">
              <Disclaimer calculatorName="Ration Comparison Tool" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
