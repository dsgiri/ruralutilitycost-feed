import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';
import { Heart } from 'lucide-react';

interface ToolCardProps { key?: React.Key;
  tool: Tool;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function ToolCard({ tool, isFavorite, onToggleFavorite }: ToolCardProps) {
  // Initialize state with default values from tool.sliders
  const initialState = tool.sliders?.reduce((acc, slider) => {
    acc[slider.id] = slider.val;
    return acc;
  }, {} as Record<string, number>) || {};

  const [values, setValues] = useState<Record<string, number>>(initialState);

  const handleSliderChange = (id: string, val: number) => {
    setValues(prev => ({ ...prev, [id]: val }));
  };

  const calcResult = tool.calc && tool.sliders ? tool.calc(values) : '—';

  return (
    <div className="bg-card border border-line rounded-xl p-5 md:p-[22px] flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <span className="text-[10.5px] uppercase tracking-[0.09em] text-barn bg-barn/10 px-[9px] py-[5px] rounded font-semibold">
          {tool.category}
        </span>
        <button
          onClick={() => onToggleFavorite(tool.id)}
          className={`cursor-pointer hover:text-rust focus:outline-none transition-colors p-1 ${
            isFavorite ? 'text-rust' : 'text-ink-soft'
          }`}
          aria-label={isFavorite ? `Remove ${tool.title} from favorites` : `Add ${tool.title} to favorites`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-rust' : ''}`} aria-hidden="true" />
        </button>
      </div>

      <h3 className="font-display text-[19px] mb-1.5 text-ink tracking-tight">{tool.title}</h3>
      <p className="text-[13.5px] text-ink-soft mb-4 line-clamp-2" title={tool.description}>
        {tool.description}
      </p>

      {tool.sliders && tool.sliders.length > 0 && (
        <div className="bg-paper-2 border border-line rounded-lg p-3.5 mb-3.5">
          {tool.sliders.map(slider => (
            <div key={slider.id} className="mb-2.5 last:mb-0">
              <div className="flex justify-between text-xs text-ink-soft mb-1.5">
                <span>{slider.label}</span>
                <b className="text-ink font-semibold">{slider.fmt(values[slider.id] || slider.val)}</b>
              </div>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                step={slider.step}
                value={values[slider.id] || slider.val}
                onChange={(e) => handleSliderChange(slider.id, parseFloat(e.target.value))}
                className="w-full h-[3px] bg-[#D3C9AC] appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[13px] [&::-webkit-slider-thumb]:h-[13px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-paper-2 [&::-webkit-slider-thumb]:bg-barn [&::-moz-range-thumb]:w-[13px] [&::-moz-range-thumb]:h-[13px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-paper-2 [&::-moz-range-thumb]:bg-barn cursor-pointer"
              />
            </div>
          ))}
          
          <div className="bg-barn-3 rounded-md px-3 py-2 mt-2.5 flex justify-between items-baseline">
            <span className="text-[10px] text-[#7C8F85] uppercase tracking-[0.08em]">{tool.outCap}</span>
            <span className="font-mono text-[18px] font-semibold text-wheat-light">{calcResult}</span>
          </div>
        </div>
      )}

      <div className="mt-auto flex justify-between items-center pt-0.5">
        <Link 
          to={`/tool/${tool.id}`}
          className="text-[13.5px] font-semibold text-barn hover:text-rust transition-colors flex items-center gap-1.5 focus:outline-none"
        >
          Open full tool <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
