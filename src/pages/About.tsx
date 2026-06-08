import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
      <SEO 
        title="About Feed Hub | Rural Utility Cost" 
        description="Learn about the Rural Utility Cost Feed App, our specialized tools for ration planning, feed storage, and waste reduction." 
      />
      <h1 className="text-3xl font-bold text-slate-text mb-6 tracking-tight">About</h1>
      
      <div className="bg-white border border-slate-200 rounded-xl p-8 text-sm leading-relaxed text-slate-sub space-y-6">
        <p>
          The Feed app is a specialized toolset within the broader <strong className="text-slate-text">Rural Utility Cost</strong> ecosystem.
        </p>
        <p>
          Our goal is to help users make feed decisions with clear, simple, and trustworthy tools. 
          We focus on providing rural and agricultural users—including cattle, poultry, and swine producers, ranchers, feed buyers, and livestock managers—with the necessary calculators to run their operations efficiently.
        </p>
        
        <h2 className="text-xl font-bold text-slate-text mt-8 mb-3">What We Cover</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-slate-text">Feed Cost:</strong> Breaking down bulk buys to per-head, per-day expenses to understand cash flow.</li>
          <li><strong className="text-slate-text">Ration Planning:</strong> Optimizing nutritional needs and comparing value across different feeds.</li>
          <li><strong className="text-slate-text">Feed Storage:</strong> Estimating capacity for bins, bunkers, and silos to plan purchases.</li>
          <li><strong className="text-slate-text">Waste Reduction:</strong> Identifying areas of shrink or spoilage, and quantifying lost value.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-text mt-8 mb-3">Our Ecosystem</h2>
        <p>
          As part of the master site, <em className="text-slate-text">Rural Utility Cost</em>, we share a unified commitment to practicality, privacy, and clarity. The tools provided here complement our energy, water, and land management calculators available across the network.
        </p>
      </div>
    </div>
  );
}
