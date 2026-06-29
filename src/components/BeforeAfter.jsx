import React, { useState } from 'react';

const BeforeAfter = ({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-2xl aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-primary/20 select-none group mx-auto">
      {/* After Image (Full Background) */}
      <img 
        src={afterImage} 
        alt="After transformation" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />
      <div className="absolute right-4 bottom-4 bg-luxury-black/80 px-3 py-1.5 rounded-lg text-primary text-xs uppercase tracking-widest font-semibold border border-primary/20 backdrop-blur-sm z-10">
        {afterLabel}
      </div>

      {/* Before Image (Clipped Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before transformation" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />
        <div className="absolute left-4 bottom-4 bg-white/90 px-3 py-1.5 rounded-lg text-luxury-black text-xs uppercase tracking-widest font-semibold backdrop-blur-sm z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Input overlay */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={handleSliderChange} 
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 pointer-events-auto"
        aria-label="Before and after transformation slider"
      />

      {/* Drag Bar & Handle visual */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-primary pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full gold-gradient shadow-xl border-2 border-white flex items-center justify-center pointer-events-none transition-transform duration-200 group-hover:scale-110">
          <div className="flex gap-1 items-center justify-center text-luxury-black text-xs font-bold font-mono">
            <span>&#9664;</span>
            <span>&#9654;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
