import React, { useState } from 'react';
import { Disclaimer } from '../Disclaimer';

export function FeedStorage() {
  const [shape, setShape] = useState<'cylinder' | 'bunker'>('cylinder');
  const [inputs, setInputs] = useState({
    radius: 10,
    height: 30,
    length: 50,
    width: 20,
    density: 45 // lbs/cu ft (e.g. Shelled Corn)
  });

  const [result, setResult] = useState<{ volume: number; capacity: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    let volume = 0;
    if (shape === 'cylinder') {
      volume = Math.PI * Math.pow(inputs.radius, 2) * inputs.height;
    } else {
      volume = inputs.length * inputs.width * inputs.height;
    }
    const capacityLbs = volume * inputs.density;
    const capacityTons = capacityLbs / 2000;
    
    setResult({ volume, capacity: capacityTons });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <form onSubmit={handleCalculate} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 p-4 bg-slate-50 border border-slate-200/60 rounded-xl">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="radio" name="shape" checked={shape === 'cylinder'} onChange={() => setShape('cylinder')} className="w-4 h-4 text-brand-blue border-slate-300 focus:ring-brand-blue" />
              <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-blue transition-colors">Silo / Bin (Cylinder)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="radio" name="shape" checked={shape === 'bunker'} onChange={() => setShape('bunker')} className="w-4 h-4 text-brand-blue border-slate-300 focus:ring-brand-blue" />
              <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-blue transition-colors">Bunker (Rectangular)</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {shape === 'cylinder' ? (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Radius (ft)</label>
                  <input type="number" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.radius} onChange={(e) => setInputs({...inputs, radius: parseFloat(e.target.value) || 0})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Height (ft)</label>
                  <input type="number" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.height} onChange={(e) => setInputs({...inputs, height: parseFloat(e.target.value) || 0})} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Length (ft)</label>
                  <input type="number" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.length} onChange={(e) => setInputs({...inputs, length: parseFloat(e.target.value) || 0})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Width (ft)</label>
                  <input type="number" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.width} onChange={(e) => setInputs({...inputs, width: parseFloat(e.target.value) || 0})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Height (ft)</label>
                  <input type="number" className="w-full bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.height} onChange={(e) => setInputs({...inputs, height: parseFloat(e.target.value) || 0})} />
                </div>
              </>
            )}
            
            <div className={shape === 'cylinder' ? 'sm:col-span-2' : ''}>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Feed Density (lbs/cu ft)</label>
              <input type="number" className="w-full sm:w-1/2 bg-white border border-slate-300 rounded-lg h-11 px-3 text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-shadow shadow-sm" value={inputs.density} onChange={(e) => setInputs({...inputs, density: parseFloat(e.target.value) || 0})} />
            </div>
          </div>
          
          <div className="pt-6 border-t border-slate-100">
            <button type="submit" className="w-full sm:w-auto inline-flex h-12 items-center justify-center px-8 border border-transparent text-sm font-bold rounded-xl text-white bg-brand-blue hover:bg-blue-700 transition-all shadow-sm hover:shadow active:scale-[0.98]">
              Calculate Capacity
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
                  <span className="text-slate-500 font-semibold text-xs uppercase tracking-wide block mb-1">Total Storage Volume</span>
                  <span className="text-3xl font-extrabold text-slate-800 tracking-tight">{result.volume.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-xl text-slate-500 font-medium">cu ft</span></span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <span className="text-slate-500 font-semibold text-xs uppercase tracking-wide block mb-1">Total Feed Capacity</span>
                  <span className="text-4xl font-extrabold text-brand-green tracking-tight">{result.capacity.toLocaleString(undefined, { maximumFractionDigits: 1 })} <span className="text-2xl text-brand-green/70 font-medium">tons</span></span>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <Disclaimer calculatorName="Feed Storage Capacity Calculator" />
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
