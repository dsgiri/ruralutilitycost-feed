import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { TOOLS } from '../data';
import { ArrowLeft, Calculator } from 'lucide-react';
import { NotFound } from './NotFound';
import { ToolContent } from '../components/ToolContent';

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

    const getRelatedTools = (id: string) => {
    const relatedMap: Record<string, string[]> = {
      'feed-cost-calc': ['ration-compare', 'feed-waste'],
      'ration-compare': ['feed-cost-calc', 'dry-matter-intake', 'feed-budget'],
      'feed-conversion': ['ration-compare', 'cost-per-head'],
      'feed-storage': ['feed-budget', 'feed-cost-calc'],
      'feed-waste': ['feed-cost-calc', 'feed-budget', 'cost-per-head'],
      'cost-per-head': ['feed-budget', 'feed-waste', 'feed-conversion'],
      'feed-budget': ['feed-storage', 'feed-cost-calc'],
      'dry-matter-intake': ['feed-cost-calc', 'feed-storage', 'feed-budget']
    };
    const relatedIds = relatedMap[id] || [];
    return TOOLS.filter(t => relatedIds.includes(t.id));
  };

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

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": tool.title,
      "url": `https://feed.ruralutilitycost.com/tool/${tool.id}`,
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any (Web-based)",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": tool.description
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to use ${tool.title}`,
      "step": [
        { "@type": "HowToStep", "name": "Step 1", "text": "Adjust the primary inputs to match your operation." },
        { "@type": "HowToStep", "name": "Step 2", "text": "Review the calculated estimate in the results box." },
        { "@type": "HowToStep", "name": "Step 3", "text": "Read the guide below for context on interpreting the outcome." }
      ]
    }
  ];

  // Try to load FAQs
  let faqs = [];
  try {
    const faqsData = require('../data/faqs.json');
    if (faqsData[tool.id]) {
      faqs = faqsData[tool.id];
    }
  } catch(e) {}

  if (faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
  }

  return (
    <div className="flex flex-col flex-1 w-full bg-paper min-h-[calc(100vh-64px)] font-sans">
      <SEO 
        title={`${tool.title} | Feed Planning & Cost Hub`} 
        description={`${tool.description} Free, instant results — no signup required.`}
        url={`https://feed.ruralutilitycost.com/tool/${tool.id}`}
        schemas={schemas}
      />
      
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8 lg:p-10 pb-16">
        <div className="mb-8 md:mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-ink-soft hover:text-ink font-medium text-sm mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
            Back to Calculators
          </Link>
          
          <div className="flex items-start md:items-center gap-4">
            <div className="bg-white p-3.5 rounded-2xl shadow-sm border border-line hidden md:block">
              <Calculator className="w-7 h-7 text-barn" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-display font-bold text-ink tracking-tight mb-2">
                {tool.title}
              </h1>
              <p className="text-ink-soft text-sm md:text-base max-w-2xl leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl shadow-sm md:shadow-md overflow-hidden">
          <div className="p-5 md:p-8 lg:p-10">
            {renderCalculator()}
          </div>
        </div>

        <ToolContent toolId={tool.id} />
        
        {/* Related Tools */}
        <div className="mt-12 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-line">
          <h2 className="font-display text-2xl font-bold text-ink mb-6">Related Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getRelatedTools(tool.id).map(t => (
              <Link 
                key={t.id} 
                to={`/tool/${t.id}`}
                className="group block p-5 rounded-xl border border-line hover:border-barn hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-bold text-ink mb-1 group-hover:text-barn transition-colors">{t.title}</h3>
                <p className="text-sm text-ink-soft line-clamp-2">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
