import React, { useState } from 'react';
import { Disclaimer } from '../Disclaimer';

export function FeedWaste() {
  const [inputs, setInputs] = useState({
    totalFeed: 500,
    wastePercentage: 15,
    costPerTon: 250
  });

  const tonsWasted = inputs.totalFeed * (inputs.wastePercentage / 100);
  const financialLoss = tonsWasted * inputs.costPerTon;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Total Feed Purchased (tons)</label>
              <input type="number" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.totalFeed} onChange={(e) => setInputs({...inputs, totalFeed: parseFloat(e.target.value) || 0})} />
              <input type="range" min="0" max="5000" step="10" className="w-full mt-3 accent-barn block" value={inputs.totalFeed} onChange={(e) => setInputs({...inputs, totalFeed: parseFloat(e.target.value) || 0})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Cost of Feed ($/ton)</label>
              <input type="number" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.costPerTon} onChange={(e) => setInputs({...inputs, costPerTon: parseFloat(e.target.value) || 0})} />
              <input type="range" min="0" max="2000" step="10" className="w-full mt-3 accent-barn block" value={inputs.costPerTon} onChange={(e) => setInputs({...inputs, costPerTon: parseFloat(e.target.value) || 0})} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Estimated Waste (%)</label>
              <input type="number" step="0.1" className="w-full sm:w-1/2 bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.wastePercentage} onChange={(e) => setInputs({...inputs, wastePercentage: parseFloat(e.target.value) || 0})} />
              <input type="range" min="0" max="100" step="1" className="w-full sm:w-1/2 mt-3 accent-barn block" value={inputs.wastePercentage} onChange={(e) => setInputs({...inputs, wastePercentage: parseFloat(e.target.value) || 0})} />
            </div>
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
                <span className="text-ink-soft font-semibold text-xs uppercase tracking-wide block mb-1">Tons Wasted</span>
                <span className="text-3xl font-extrabold text-ink tracking-tight">{tonsWasted.toLocaleString(undefined, { maximumFractionDigits: 1 })} <span className="text-xl text-ink-soft font-medium">tons</span></span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-line shadow-sm border-l-4 border-l-red-500">
                <span className="text-ink-soft font-semibold text-xs uppercase tracking-wide block mb-1">Financial Loss</span>
                <span className="text-4xl font-extrabold text-red-500 tracking-tight">-${financialLoss.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex h-12 items-center justify-center px-8 border border-transparent text-sm font-bold rounded-xl text-white bg-barn hover:bg-barn-2 transition-all shadow-sm hover:shadow active:scale-[0.98]">
                Download Report
              </button>
            </div>
            <div className="mt-auto pt-6">
              <Disclaimer calculatorName="Feed Waste Reduction Planner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
