import { TOOLS } from '../data';
import { useFavorites } from '../hooks/useFavorites';
import { SEO } from '../components/SEO';
import { ToolCard } from '../components/ToolCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Favorites() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const favoriteTools = TOOLS.filter(tool => favorites.includes(tool.id));

  return (
    <div className="flex flex-col flex-1 w-full max-w-full">
      <SEO 
        title="My Favorite Feed Tools | Rural Utility Cost" 
        description="Access your saved favorite feed calculators, conversion estimators, and ration planning tools quickly." 
      />
      <section className="bg-gradient-to-r from-[#1e293b] to-[#334155] text-white px-6 md:px-10 py-6 h-auto md:h-[100px] flex flex-col justify-center shrink-0">
        <div className="flex items-center gap-3">
          <Heart className="w-6 h-6 text-red-500 fill-red-500" />
          <h1 className="text-2xl font-bold mb-1">My Favorites</h1>
        </div>
        <p className="text-slate-300 text-sm max-w-2xl mt-1">
          Your saved feed calculators and planning tools.
        </p>
      </section>

      <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 pb-12">
        {favoriteTools.length === 0 ? (
          <div className="bg-white border border-slate-200 border-dashed rounded-xl p-12 text-center max-w-lg mx-auto mt-10">
            <Heart className="w-10 h-10 text-slate-300 mx-auto mb-4" />
            <h2 className="text-[16px] font-bold text-slate-text mb-2">No favorites yet</h2>
            <p className="text-[13px] text-slate-500 mb-6 font-medium">
              Click the heart icon on any tool card across the application to save it here for quick access.
            </p>
            <Link to="/" className="inline-flex min-h-[48px] items-center justify-center bg-brand-blue text-white px-6 py-2.5 rounded-md text-[13px] font-semibold hover:bg-blue-700 transition">
              Browse Tools
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {favoriteTools.map(tool => (
              <ToolCard 
                key={tool.id} 
                tool={tool} 
                isFavorite={isFavorite(tool.id)} 
                onToggleFavorite={toggleFavorite} 
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
