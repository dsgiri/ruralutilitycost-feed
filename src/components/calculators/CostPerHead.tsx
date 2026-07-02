import React, { useState } from 'react';
import { Disclaimer } from '../Disclaimer';

export function CostPerHead() {
  const [inputs, setInputs] = useState({
    totalCost: 15000,
    headCount: 100,
    days: 90
  });

  const totalAnimalDays = inputs.headCount * inputs.days;
  const costPerHeadPerDay = totalAnimalDays > 0 ? inputs.totalCost / totalAnimalDays : 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Total Feed Cost ($)</label>
              <input 
                type="number" 
                className="w-full sm:w-1/2 bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" 
                value={inputs.totalCost} 
                onChange={(e) => setInputs({...inputs, totalCost: parseFloat(e.target.value) || 0})} 
              />
              <input 
                type="range" 
                min="0" max="100000" step="1000"
                className="w-full sm:w-1/2 mt-3 accent-barn" 
                value={inputs.totalCost} 
                onChange={(e) => setInputs({...inputs, totalCost: parseFloat(e.target.value) || 0})} 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Number of Head</label>
              <input 
                type="number" 
                className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" 
                value={inputs.headCount} 
                onChange={(e) => setInputs({...inputs, headCount: parseInt(e.target.value) || 0})} 
              />
              <input 
                type="range" 
                min="1" max="10000" step="1"
                className="w-full mt-3 accent-barn" 
                value={inputs.headCount} 
                onChange={(e) => setInputs({...inputs, headCount: parseInt(e.target.value) || 0})} 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Number of Days</label>
              <input 
                type="number" 
                className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" 
                value={inputs.days} 
                onChange={(e) => setInputs({...inputs, days: parseInt(e.target.value) || 0})} 
              />
               <input 
                type="range" 
                min="1" max="365" step="1"
                className="w-full mt-3 accent-barn" 
                value={inputs.days} 
                onChange={(e) => setInputs({...inputs, days: parseInt(e.target.value) || 0})} 
              />
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
                <span className="text-ink-soft font-semibold text-xs uppercase tracking-wide block mb-1">Cost per Head per Day</span>
                <span className="text-4xl font-extrabold text-barn tracking-tight">${costPerHeadPerDay.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex h-12 items-center justify-center px-8 border border-transparent text-sm font-bold rounded-xl text-white bg-barn hover:bg-barn-2 transition-all shadow-sm hover:shadow active:scale-[0.98]">
                Download Report
              </button>
            </div>
            <div className="mt-auto pt-6">
              <Disclaimer calculatorName="Cost per Head / per Day Calculator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
