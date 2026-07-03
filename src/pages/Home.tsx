import { useState } from 'react';
import { SEO } from '../components/SEO';
import { TOOLS } from '../data';
import { useFavorites } from '../hooks/useFavorites';
import { ToolCard } from '../components/ToolCard';
import { Link } from 'react-router-dom';

function fmtMoney2(n: number) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function Home() {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [activeCategory, setActiveCategory] = useState<string>('All Tools');
  const [herd, setHerd] = useState(80);
  const [price, setPrice] = useState(280);

  const categories = ['All Tools', ...Array.from(new Set(TOOLS.map(t => t.category)))];
  
  const filteredTools = activeCategory === 'All Tools' 
    ? TOOLS 
    : TOOLS.filter(t => t.category === activeCategory);

  const daily = herd * 25 / 2000 * price;
  const pct = (herd - 10) / (500 - 10);
  const angle = 180 - pct * 180;
  const rad = angle * Math.PI / 180;
  const cx = 130, cy = 65, r = 110;
  const x = cx - r * Math.cos(rad);
  const y = cy - r * Math.sin(rad);
  const largeArc = angle < 0 ? 1 : 0;

  return (
    <div className="flex flex-col flex-1 w-full max-w-full font-sans text-ink">
      <SEO 
        title="Feed Planning & Cost Hub | Free Livestock Feed Calculators" 
        description="Free calculators for feed cost per ton, per head, storage capacity, conversion ratios, and more. Built for ranchers, feedlots, and livestock buyers." 
      />
      
      {/* Hero Section */}
      <section className="bg-barn text-paper pt-12 md:pt-16 overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center pb-10 md:pb-12">
          <div>
            <div className="text-[12px] uppercase tracking-[0.14em] text-wheat-light font-semibold mb-4">Feed planning & cost hub</div>
            <h1 className="font-display text-4xl md:text-[44px] leading-[1.06] mb-5 text-[#F7F2E4] tracking-tight">Know what your feed<br/>costs before the<br/>truck leaves the mill.</h1>
            <p className="text-[17px] text-[#C8CFC5] max-w-[460px] mb-7 leading-relaxed">Eight free calculators built for real ranch numbers — cost per ton, per head, per day. No spreadsheets, no guesswork.</p>
            <div className="flex flex-wrap gap-3.5">
              <a href="#tools" className="inline-flex items-center gap-2 px-[22px] py-3 rounded-md text-[14px] font-semibold bg-wheat text-barn-3 hover:bg-wheat-light transition-colors border border-transparent">
                Browse all tools →
              </a>
              <a href="#guides" className="inline-flex items-center gap-2 px-[22px] py-3 rounded-md text-[14px] font-semibold text-[#F7F2E4] border border-[#F7F2E4]/35 hover:border-[#F7F2E4]/70 transition-colors">
                Read the guides
              </a>
            </div>
          </div>

          <div className="bg-barn-3 border border-wheat/30 rounded-[14px] p-6 md:p-7 pt-7 pb-6">
            <div className="flex justify-between text-[11px] uppercase tracking-[0.1em] text-[#8FA097] mb-3.5">
              <span>Live estimate</span>
              <span>Daily & monthly cost</span>
            </div>
            <div className="text-center mb-2">
              <svg width="100%" height="70" viewBox="0 0 260 70" className="mx-auto max-w-[260px]">
                <path d="M 20 65 A 110 110 0 0 1 240 65" fill="none" stroke="#33473F" strokeWidth="3"/>
                <path d={`M 20 65 A 110 110 0 ${largeArc} 1 ${x.toFixed(1)} ${y.toFixed(1)}`} fill="none" stroke="#C79A2B" strokeWidth="3" strokeLinecap="round" className="transition-all duration-300"/>
                <circle cx={x.toFixed(1)} cy={y.toFixed(1)} r="4" fill="#E7C766" className="transition-all duration-300"/>
              </svg>
            </div>
            <div className="bg-[#0F1E19] border border-wheat/35 rounded-lg px-2.5 pt-4 pb-3 text-center mb-4.5">
              <div className="font-mono text-[40px] font-semibold text-wheat-light tracking-[0.02em] leading-none">{fmtMoney2(daily)}</div>
              <div className="text-[10.5px] text-[#7C8F85] uppercase tracking-[0.12em] mt-1.5">Estimated daily feed cost</div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-[13px] text-[#C8CFC5] mb-2">
                <span>Herd size</span>
                <span className="text-wheat-light font-semibold">{herd} head</span>
              </div>
              <input type="range" min="10" max="500" step="5" value={herd} onChange={(e) => setHerd(parseInt(e.target.value))} className="w-full h-1 bg-[#33473F] appearance-none rounded outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-barn-3 [&::-webkit-slider-thumb]:bg-wheat [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-barn-3 [&::-moz-range-thumb]:bg-wheat cursor-pointer"/>
            </div>
            <div className="mb-1.5">
              <div className="flex justify-between text-[13px] text-[#C8CFC5] mb-2">
                <span>Price per ton</span>
                <span className="text-wheat-light font-semibold">${price}</span>
              </div>
              <input type="range" min="150" max="500" step="5" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} className="w-full h-1 bg-[#33473F] appearance-none rounded outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-barn-3 [&::-webkit-slider-thumb]:bg-wheat [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-barn-3 [&::-moz-range-thumb]:bg-wheat cursor-pointer"/>
            </div>
            <div className="text-[12px] text-[#7C8F85] text-center pt-0.5 mt-2">
              Assumes 25 lb dry matter intake per head/day — adjust in the full tool
            </div>
          </div>
        </div>
      </section>

      {/* Category Chips */}
      <section className="pt-9 pb-2 px-5 md:px-8 max-w-[1180px] mx-auto w-full" id="tools">
        <div className="flex gap-2.5 flex-wrap">
          {categories.map(cat => {
            const count = cat === 'All Tools' ? TOOLS.length : TOOLS.filter(t => t.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-[9px] rounded-full border text-[13.5px] font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  isActive 
                    ? 'bg-barn border-barn text-[#F7F2E4]' 
                    : 'bg-card border-line text-ink-soft hover:bg-paper-2'
                }`}
              >
                {cat} <span className="opacity-60 ml-1">{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pt-7 pb-20 px-5 md:px-8 max-w-[1180px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTools.map((tool) => (
            <ToolCard 
              key={tool.id}
              tool={tool} 
              isFavorite={isFavorite(tool.id)} 
              onToggleFavorite={toggleFavorite} 
            />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-paper-2 py-16 px-5 md:px-8 border-t border-line" id="guides">
        <div className="max-w-[1180px] mx-auto">
          <h2 className="font-display text-[26px] mb-9">How the feed tools work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div>
              <div className="font-mono text-[13px] text-wheat font-semibold mb-2.5">01</div>
              <h4 className="text-[16px] mb-2 font-semibold">Pick your tool</h4>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Filter by category or search by what you're trying to solve — cost, conversion, storage, or waste.</p>
            </div>
            <div>
              <div className="font-mono text-[13px] text-wheat font-semibold mb-2.5">02</div>
              <h4 className="text-[16px] mb-2 font-semibold">Drag your numbers in</h4>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Herd size, current bag price, bin dimensions — every calculator updates live as you adjust.</p>
            </div>
            <div>
              <div className="font-mono text-[13px] text-wheat font-semibold mb-2.5">03</div>
              <h4 className="text-[16px] mb-2 font-semibold">Act on the readout</h4>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Save it to your favorites, export it, or jump straight to the next tool it points you toward.</p>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
}
