import React, { useState } from 'react';
import { Disclaimer } from '../Disclaimer';

export function FeedConversion() {
  const [inputs, setInputs] = useState({
    totalFeed: 1500,
    initialWeight: 500,
    finalWeight: 750
  });

  const weightGain = inputs.finalWeight - inputs.initialWeight;
  const fcr = weightGain > 0 ? inputs.totalFeed / weightGain : 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Total Feed Consumed (lbs)</label>
              <input type="number" className="w-full sm:w-1/2 bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.totalFeed} onChange={(e) => setInputs({...inputs, totalFeed: parseFloat(e.target.value) || 0})} />
              <input type="range" min="0" max="10000" step="10" className="w-full sm:w-1/2 mt-3 accent-barn block" value={inputs.totalFeed} onChange={(e) => setInputs({...inputs, totalFeed: parseFloat(e.target.value) || 0})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Initial Weight (lbs)</label>
              <input type="number" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.initialWeight} onChange={(e) => setInputs({...inputs, initialWeight: parseFloat(e.target.value) || 0})} />
               <input type="range" min="0" max="3000" step="10" className="w-full mt-3 accent-barn" value={inputs.initialWeight} onChange={(e) => setInputs({...inputs, initialWeight: parseFloat(e.target.value) || 0})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Final Weight (lbs)</label>
              <input type="number" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.finalWeight} onChange={(e) => setInputs({...inputs, finalWeight: parseFloat(e.target.value) || 0})} />
              <input type="range" min="0" max="3000" step="10" className="w-full mt-3 accent-barn" value={inputs.finalWeight} onChange={(e) => setInputs({...inputs, finalWeight: parseFloat(e.target.value) || 0})} />
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
                <span className="text-ink-soft font-semibold text-xs uppercase tracking-wide block mb-1">Total Weight Gain</span>
                <span className="text-3xl font-extrabold text-ink tracking-tight">{weightGain.toLocaleString()} lbs</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-line shadow-sm">
                <span className="text-ink-soft font-semibold text-xs uppercase tracking-wide block mb-1">Feed Conversion Ratio (FCR)</span>
                <span className="text-4xl font-extrabold text-barn tracking-tight">{fcr.toFixed(2)}</span>
              </div>
              <div className="p-4 bg-barn/5 border border-barn/10 text-barn rounded-xl text-sm leading-relaxed">
                It took <strong className="font-bold text-barn/90">{fcr.toFixed(2)} lbs</strong> of feed to produce 1 lb of body weight gain.
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex h-12 items-center justify-center px-8 border border-transparent text-sm font-bold rounded-xl text-white bg-barn hover:bg-barn-2 transition-all shadow-sm hover:shadow active:scale-[0.98]">
                Download Report
              </button>
            </div>
            <div className="mt-auto pt-6">
              <Disclaimer calculatorName="Feed Conversion Estimator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
