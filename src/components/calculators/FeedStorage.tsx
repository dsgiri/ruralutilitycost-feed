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

  let volume = 0;
  if (shape === 'cylinder') {
    volume = Math.PI * Math.pow(inputs.radius, 2) * inputs.height;
  } else {
    volume = inputs.length * inputs.width * inputs.height;
  }
  const capacityLbs = volume * inputs.density;
  const capacityTons = capacityLbs / 2000;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 p-4 bg-paper-2 border border-line/60 rounded-xl">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="radio" name="shape" checked={shape === 'cylinder'} onChange={() => setShape('cylinder')} className="w-4 h-4 text-barn border-line focus:ring-barn" />
              <span className="text-sm font-semibold text-ink group-hover:text-barn transition-colors">Silo / Bin (Cylinder)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="radio" name="shape" checked={shape === 'bunker'} onChange={() => setShape('bunker')} className="w-4 h-4 text-barn border-line focus:ring-barn" />
              <span className="text-sm font-semibold text-ink group-hover:text-barn transition-colors">Bunker (Rectangular)</span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {shape === 'cylinder' ? (
              <>
                <div>
                  <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Radius (ft)</label>
                  <input type="number" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.radius} onChange={(e) => setInputs({...inputs, radius: parseFloat(e.target.value) || 0})} />
                  <input type="range" min="0" max="100" step="1" className="w-full mt-3 accent-barn" value={inputs.radius} onChange={(e) => setInputs({...inputs, radius: parseFloat(e.target.value) || 0})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Height (ft)</label>
                  <input type="number" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.height} onChange={(e) => setInputs({...inputs, height: parseFloat(e.target.value) || 0})} />
                  <input type="range" min="0" max="200" step="1" className="w-full mt-3 accent-barn" value={inputs.height} onChange={(e) => setInputs({...inputs, height: parseFloat(e.target.value) || 0})} />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Length (ft)</label>
                  <input type="number" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.length} onChange={(e) => setInputs({...inputs, length: parseFloat(e.target.value) || 0})} />
                  <input type="range" min="0" max="300" step="5" className="w-full mt-3 accent-barn" value={inputs.length} onChange={(e) => setInputs({...inputs, length: parseFloat(e.target.value) || 0})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Width (ft)</label>
                  <input type="number" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.width} onChange={(e) => setInputs({...inputs, width: parseFloat(e.target.value) || 0})} />
                  <input type="range" min="0" max="200" step="1" className="w-full mt-3 accent-barn" value={inputs.width} onChange={(e) => setInputs({...inputs, width: parseFloat(e.target.value) || 0})} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Height (ft)</label>
                  <input type="number" className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.height} onChange={(e) => setInputs({...inputs, height: parseFloat(e.target.value) || 0})} />
                  <input type="range" min="0" max="100" step="1" className="w-full mt-3 accent-barn" value={inputs.height} onChange={(e) => setInputs({...inputs, height: parseFloat(e.target.value) || 0})} />
                </div>
              </>
            )}
            
            <div className={shape === 'cylinder' ? 'sm:col-span-2' : ''}>
              <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Feed Density (lbs/cu ft)</label>
              <input type="number" className="w-full sm:w-1/2 bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" value={inputs.density} onChange={(e) => setInputs({...inputs, density: parseFloat(e.target.value) || 0})} />
              <input type="range" min="10" max="100" step="1" className="w-full sm:w-1/2 mt-3 accent-barn block" value={inputs.density} onChange={(e) => setInputs({...inputs, density: parseFloat(e.target.value) || 0})} />
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
                <span className="text-ink-soft font-semibold text-xs uppercase tracking-wide block mb-1">Total Storage Volume</span>
                <span className="text-3xl font-extrabold text-ink tracking-tight">{volume.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-xl text-ink-soft font-medium">cu ft</span></span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-line shadow-sm">
                <span className="text-ink-soft font-semibold text-xs uppercase tracking-wide block mb-1">Total Feed Capacity</span>
                <span className="text-4xl font-extrabold text-barn tracking-tight">{capacityTons.toLocaleString(undefined, { maximumFractionDigits: 1 })} <span className="text-2xl text-barn/70 font-medium">tons</span></span>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex h-12 items-center justify-center px-8 border border-transparent text-sm font-bold rounded-xl text-white bg-barn hover:bg-barn-2 transition-all shadow-sm hover:shadow active:scale-[0.98]">
                Download Report
              </button>
            </div>
            <div className="mt-auto pt-6">
              <Disclaimer calculatorName="Feed Storage Capacity Calculator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
