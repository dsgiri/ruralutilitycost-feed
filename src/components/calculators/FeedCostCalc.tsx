import React, { useState } from 'react';
import { Disclaimer } from '../Disclaimer';

interface Ingredient {
  id: string;
  name: string;
  costPerUnit: number;
  quantity: number;
}

export function FeedCostCalc() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: '1', name: 'Corn', costPerUnit: 0.15, quantity: 1000 },
    { id: '2', name: 'Soybean Meal', costPerUnit: 0.25, quantity: 500 }
  ]);
  const [batchSize, setBatchSize] = useState<number>(1500);

  const addIngredient = () => {
    setIngredients([...ingredients, { id: Math.random().toString(), name: '', costPerUnit: 0, quantity: 0 }]);
  };

  const updateIngredient = (id: string, field: keyof Ingredient, value: string | number) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, [field]: value } : ing
    ));
  };

  const removeIngredient = (id: string) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const totalCost = ingredients.reduce((sum, ing) => sum + (ing.costPerUnit * ing.quantity), 0);
  const costPerTon = batchSize > 0 ? totalCost / (batchSize / 2000) : 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-ink text-sm uppercase tracking-wider">Ingredients</h3>
            <div className="space-y-3">
              {ingredients.map((ing, index) => (
                <div key={ing.id} className="group relative flex flex-col sm:flex-row gap-4 items-start sm:items-end bg-paper-2 p-4 rounded-xl border border-line/60 transition-colors hover:border-barn/30">
                  <div className="w-full sm:flex-1">
                    <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Ingredient Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm"
                      value={ing.name}
                      onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)}
                      placeholder="e.g. Corn"
                    />
                  </div>
                  <div className="w-full sm:w-28 shrink-0">
                    <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Cost/Unit ($)</label>
                    <input 
                      type="number" 
                      step="0.001"
                      className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm"
                      value={ing.costPerUnit}
                      onChange={(e) => updateIngredient(ing.id, 'costPerUnit', parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  <div className="w-full sm:w-28 shrink-0">
                    <label className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Quantity (lbs)</label>
                    <input 
                      type="number" 
                      className="w-full bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm"
                      value={ing.quantity}
                      onChange={(e) => updateIngredient(ing.id, 'quantity', parseFloat(e.target.value) || 0)}
                    />
                  </div>
                  {ingredients.length > 1 && (
                    <button type="button" onClick={() => removeIngredient(ing.id)} className="sm:mb-2 h-9 px-3 text-red-500 hover:text-red-700 hover:bg-red-50 font-medium text-sm rounded-md transition-colors">
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button type="button" onClick={addIngredient} className="inline-flex items-center text-barn text-sm font-semibold hover:text-blue-700 transition-colors mt-2">
              <span className="text-lg mr-1 leading-none">+</span> Add Another Ingredient
            </button>
          </div>

          <div className="pt-6 border-t border-line">
            <label htmlFor="batchSize" className="block text-xs font-bold text-ink-soft mb-1.5 uppercase tracking-wide">Total Batch Size (lbs)</label>
            <input 
              type="number" 
              id="batchSize" 
              className="w-full sm:w-48 bg-white border border-line rounded-lg h-11 px-3 text-sm focus:border-barn focus:ring-1 focus:ring-barn outline-none transition-shadow shadow-sm" 
              value={batchSize}
              onChange={(e) => setBatchSize(parseFloat(e.target.value) || 0)}
            />
             <input 
                type="range" 
                min="0" max="10000" step="10"
                className="w-full sm:w-48 mt-3 accent-barn block" 
                value={batchSize} 
                onChange={(e) => setBatchSize(parseFloat(e.target.value) || 0)} 
              />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[380px] shrink-0">
        <div className="bg-paper-2/80 p-6 md:p-8 rounded-2xl border border-line/80 h-full flex flex-col relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-barn/5 rounded-bl-full pointer-events-none -mr-4 -mt-4" />
          
          <h3 className="text-ink-soft text-xs uppercase font-extrabold tracking-wider mb-6 relative z-10">Estimated Outcome</h3>
          <div className="flex-1 flex flex-col relative z-10">
            <div className="mb-6 space-y-6">
              <div className="bg-white p-5 rounded-xl border border-line shadow-sm">
                <span className="text-ink-soft font-semibold text-xs uppercase tracking-wide block mb-1">Total Batch Cost</span>
                <span className="text-4xl font-extrabold text-barn tracking-tight">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              <div className="bg-white p-5 rounded-xl border border-line shadow-sm">
                <span className="text-ink-soft font-semibold text-xs uppercase tracking-wide block mb-1">Cost per Ton</span>
                <span className="text-3xl font-extrabold text-ink tracking-tight">${costPerTon.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full inline-flex h-12 items-center justify-center px-8 border border-transparent text-sm font-bold rounded-xl text-white bg-barn hover:bg-barn-2 transition-all shadow-sm hover:shadow active:scale-[0.98]">
                Download Report
              </button>
            </div>
            <div className="mt-auto pt-6">
              <Disclaimer calculatorName="Feed Cost Calculator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
