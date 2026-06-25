import { SEO } from '../components/SEO';
import { ArrowLeft, Globe, Map, LineChart, Sprout, Tractor, Home, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const PORTFOLIO_CATEGORIES = [
  {
    title: "Core platform and planning",
    icon: Globe,
    links: [
      { name: "Rural Utility Cost Platform", url: "https://ruralutilitycost.com", desc: "The master hub for all agricultural and rural decision support tools." },
      { name: "Habitat Hub", url: "https://habitat.ruralutilitycost.com", desc: "Evaluate rural living costs and infrastructure requirements." },
      { name: "Plan App", url: "https://plan.ruralutilitycost.com", desc: "Strategic planning calculators for farm and rural land investments." },
      { name: "Solve App", url: "https://solve.ruralutilitycost.com", desc: "General troubleshooting and operational problem-solving tools." }
    ]
  },
  {
    title: "Forecasting and scenario tools",
    icon: LineChart,
    links: [
      { name: "Forecast Predictor", url: "https://forecast.ruralutilitycost.com", desc: "Long-term trend analysis for rural utility and commodity costs." },
      { name: "WhatIf Scenarios", url: "https://whatif.ruralutilitycost.com", desc: "Run comparative scenarios to balance financial risk in agriculture." },
      { name: "Operations Predictor", url: "https://predictor.ruralutilitycost.com", desc: "Predictive models for maintenance, yield, and daily resource usage." }
    ]
  },
  {
    title: "Agriculture and agronomy",
    icon: Sprout,
    links: [
      { name: "Soil Utilities", url: "https://soil.ruralutilitycost.com", desc: "Soil health economics, amendment calculators, and terrain costs." },
      { name: "Pest Management", url: "https://pest.ruralutilitycost.com", desc: "Evaluate the cost-effectiveness of pest mitigation strategies." },
      { name: "Land Assessment", url: "https://land.ruralutilitycost.com", desc: "Land clearing, grading, and property development cost estimators." },
      { name: "Greenhouse Systems", url: "https://greenhouse.ruralutilitycost.com", desc: "Climate control, lighting, and enclosed growing operational costs." },
      { name: "Hydroponic Tools", url: "https://hydroponic.ruralutilitycost.com", desc: "Water nutrient and system cost projections for soilless agriculture." }
    ]
  },
  {
    title: "Livestock and animal systems",
    icon: Tractor,
    links: [
      { name: "Livestock Planner", url: "https://livestock.ruralutilitycost.com", desc: "Aggregate calculators for multi-species animal husbandry and scaling." },
      { name: "Dairy Operations", url: "https://dairy.ruralutilitycost.com", desc: "Milk production efficiency, cooling costs, and herd management." },
      { name: "Beef Cattle Tools", url: "https://beef.ruralutilitycost.com", desc: "Pasture utilization and finishing cost calculators for beef producers." },
      { name: "Aquaculture Hub", url: "https://aqua.ruralutilitycost.com", desc: "Water aeration, filtration, and aquatic stock cost estimators." },
      { name: "Feed Planning (Current)", url: "https://feed.ruralutilitycost.com", desc: "Track feed conversion, manage rations, and calculate daily feed costs." }
    ]
  },
  {
    title: "Infrastructure, logistics, and operations",
    icon: Home,
    links: [
      { name: "Grid & Power", url: "https://grid.ruralutilitycost.com", desc: "Analyze electrical usage, off-grid systems, and generator efficiencies." },
      { name: "Storage Solutions", url: "https://storage.ruralutilitycost.com", desc: "Silo capacity, cold storage running costs, and warehousing estimators." },
      { name: "Transport & Fuel", url: "https://transport.ruralutilitycost.com", desc: "Logistics fuel calculators and fleet maintenance tracking tools." },
      { name: "Quality Control", url: "https://quality.ruralutilitycost.com", desc: "Metrics tracking for product loss mitigation and quality assurance." }
    ]
  },
  {
    title: "Specialty and utility hubs",
    icon: Package,
    links: [
      { name: "USDA Resource Tracker", url: "https://usda.ruralutilitycost.com", desc: "Calculators aligned with USDA grants, insurance, and program requirements." },
      { name: "Carbon Management", url: "https://carbon.ruralutilitycost.com", desc: "Carbon credit calculators and emission footprint estimators." },
      { name: "Weather Impacts", url: "https://weather.ruralutilitycost.com", desc: "Assess utility cost variations driven by seasonal weather changes." },
      { name: "Price Monitor", url: "https://price.ruralutilitycost.com", desc: "Compare historical local variations in bulk rural supplies." },
      { name: "BreakTime Hub", url: "https://breaktime.ruralutilitycost.com", desc: "Labor tracking, rest period compliance, and crew management tools." }
    ]
  }
];

export function Portfolio() {
  return (
    <div className="flex flex-col flex-1 w-full max-w-full">
      <SEO 
        title="Ecosystem Portfolio | Rural Utility Cost" 
        description="Discover the complete directory of agricultural hubs, specialized calculators, and rural planning tools across the Rural Utility Cost network." 
      />
      
      <section className="bg-gradient-to-r from-[#1e293b] to-[#334155] text-white px-6 md:px-10 py-8 shrink-0">
        <div className="max-w-[1440px] mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-slate-300 font-medium pb-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center">
                  Feed Hub
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-white relative top-px" aria-current="page">Portfolio</span>
              </li>
            </ol>
          </nav>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-3">Rural Utility Cost Ecosystem</h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl">
            A comprehensive directory of specialized decision-support tools for agricultural producers, rural land owners, and livestock managers.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-12">
            
            {PORTFOLIO_CATEGORIES.map((category, idx) => {
              const Icon = category.icon;
              return (
                <section key={idx} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                    <div className="bg-slate-50 p-2 rounded-lg text-brand-blue border border-slate-200">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h2 className="text-[18px] font-bold text-slate-text">{category.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.links.map((link, linkIdx) => {
                      const isCurrent = link.name.includes("(Current)");
                      return (
                        <div key={linkIdx} className={`border rounded-lg p-4 transition-colors ${isCurrent ? 'border-brand-blue bg-blue-50/50' : 'border-slate-100 hover:border-brand-blue hover:shadow-sm bg-white'}`}>
                          <a 
                            href={link.url} 
                            className="font-bold text-[14px] text-brand-blue hover:text-blue-800 hover:underline inline-block mb-1 tracking-tight"
                            aria-current={isCurrent ? "page" : undefined}
                          >
                            Explore {link.name}
                          </a>
                          <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                            {link.desc}
                          </p>
                          <div className="mt-3 text-[11px] text-slate-400 font-mono">
                            {link.url.replace('https://', '')}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
