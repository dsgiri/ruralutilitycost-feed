import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { TOOLS } from '../data';
import { ArrowLeft, Calculator } from 'lucide-react';
import { NotFound } from './NotFound';

import {
  FeedCostCalc,
  RationCompare,
  FeedConversion,
  FeedStorage,
  FeedWaste,
  CostPerHead,
  FeedBudget,
  DryMatterIntake
} from '../components/calculators';

export function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const tool = TOOLS.find(t => t.id === id);
  
  if (!tool) {
    return <NotFound />;
  }

  const renderCalculator = () => {
    switch (tool.id) {
      case 'feed-cost-calc': return <FeedCostCalc />;
      case 'ration-compare': return <RationCompare />;
      case 'feed-conversion': return <FeedConversion />;
      case 'feed-storage': return <FeedStorage />;
      case 'feed-waste': return <FeedWaste />;
      case 'cost-per-head': return <CostPerHead />;
      case 'feed-budget': return <FeedBudget />;
      case 'dry-matter-intake': return <DryMatterIntake />;
      default: return <p>Calculator not found.</p>;
    }
  };

  return (
    <div className="flex flex-col flex-1 w-full bg-slate-50/50 min-h-[calc(100vh-64px)]">
      <SEO 
        title={`${tool.title} | Feed Hub`} 
        description={tool.description} 
      />
      
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 lg:p-10 pb-16">
        <div className="mb-8 md:mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-500 hover:text-brand-blue font-medium text-sm mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
            Back to Calculators
          </Link>
          
          <div className="flex items-start md:items-center gap-4">
            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200/60 hidden md:block">
              <Calculator className="w-7 h-7 text-brand-blue" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                {tool.title}
              </h1>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm md:shadow-md overflow-hidden">
          <div className="p-5 md:p-8 lg:p-10">
            {renderCalculator()}
          </div>
        </div>
      </main>
    </div>
  );
}
