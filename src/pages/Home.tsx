import { useState, Fragment } from 'react';
import { SEO } from '../components/SEO';
import { AdSense } from '../components/AdSense';
import { TOOLS } from '../data';
import { useFavorites } from '../hooks/useFavorites';
import { ToolCard } from '../components/ToolCard';
import { Wheat, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [activeCategory, setActiveCategory] = useState<string>('All Tools');

  const categories = ['All Tools', ...Array.from(new Set(TOOLS.map(t => t.category)))];
  
  const filteredTools = activeCategory === 'All Tools' 
    ? TOOLS 
    : TOOLS.filter(t => t.category === activeCategory);

  return (
    <div className="flex flex-col flex-1 w-full max-w-full">
      <SEO 
        title="Feed Planning & Cost Hub | Rural Utility Cost" 
        description="Compare feed options, estimate costs, plan rations, and manage feed waste with our suite of agricultural feed tools." 
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1e293b] to-[#334155] text-white px-6 md:px-10 py-6 h-auto md:h-[100px] flex flex-col justify-center shrink-0">
        <h1 className="text-2xl font-bold mb-1">Feed Planning & Cost Hub</h1>
        <p className="text-slate-300 text-sm max-w-2xl">
          Optimizing livestock nutrition through data-driven cost and waste management.
        </p>
      </section>

      {/* Main View */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-[260px_1fr] md:auto-rows-min gap-6">
        
        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.05em] text-slate-sub font-bold mb-3">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map(cat => {
                const count = cat === 'All Tools' ? TOOLS.length : TOOLS.filter(t => t.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] border cursor-pointer transition-colors text-left font-medium ${
                      isActive 
                        ? 'border-brand-blue bg-[#eff6ff] text-brand-blue' 
                        : 'bg-white border-slate-200 text-slate-text hover:border-slate-300'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-[12px] opacity-50">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.05em] text-slate-sub font-bold mb-3">My Favorites</h3>
            <div className="bg-white rounded-lg p-3 border border-dashed border-slate-300 text-[12px] text-slate-400 text-center leading-relaxed">
              Star a tool to pin it here for quick access across the ecosystem.
            </div>
            <Link to="/favorites" aria-label="View your favorite tools" className="mt-3 block text-center min-h-[48px] leading-[48px] text-[13px] font-semibold text-brand-blue hover:underline">
              View stored favorites →
            </Link>
          </div>
          
          <div className="hidden md:block">
             <AdSense slot="sidebar_ad_slot" className="w-[300px] h-[250px]" />
          </div>
        </aside>

        {/* Tools Content */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool, index) => (
              <Fragment key={tool.id}>
                <ToolCard 
                  tool={tool} 
                  isFavorite={isFavorite(tool.id)} 
                  onToggleFavorite={toggleFavorite} 
                />
                {/* In-content responsive AdSense after first 3 cards */}
                {index === 2 && (
                  <div key="inline-ad" className="col-span-1 sm:col-span-2 lg:col-span-3">
                    <AdSense slot="in_content_ad_slot" className="w-full" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* How it Works Section */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 mt-4 mb-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-text tracking-tight">How feed tools work</h2>
              <p className="mt-2 text-slate-sub text-sm">
                Simple, accessible planning for livestock managers, buyers, and producers to make informed decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-left">
                <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center mb-3">
                  <Wheat className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-text mb-1">1. Choose your focus</h3>
                <p className="text-slate-500 text-[13px]">
                  Pick a tool based on your current need—whether that's estimating conversion ratios, storage capacity, or building a yearly budget.
                </p>
              </div>
              <div className="text-left">
                <div className="w-10 h-10 bg-green-50 text-brand-green rounded-lg flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-bold text-slate-text mb-1">2. Enter your numbers</h3>
                <p className="text-slate-500 text-[13px]">
                  Input your unique herd size, current commodity prices, or facility dimensions. The tools calculate immediately.
                </p>
              </div>
              <div className="text-left">
                <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="text-[15px] font-bold text-slate-text mb-1">3. Optimize costs</h3>
                <p className="text-slate-500 text-[13px]">
                  Use the visual breakdowns and per-head cost estimations to identify waste and confidently plan your next feed purchase.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
