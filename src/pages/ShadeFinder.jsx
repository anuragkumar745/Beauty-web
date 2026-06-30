import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCamera, FiAlertCircle, FiRefreshCw, FiSliders, FiHelpCircle } from 'react-icons/fi';
import Button from '../components/Button';
import SEO from '../seo';

const lipstickColors = [
  { name: 'Matte Royal Red', hex: '#C41E3A', opacity: 0.35, blendMode: 'color-burn', desc: 'Bold, velvety classic red with cool undertones.' },
  { name: 'Sleek Rose Gold', hex: '#B76E79', opacity: 0.4, blendMode: 'multiply', desc: 'Romantic, shimmery dust pink with gold flecks.' },
  { name: 'Nude Satin Pink', hex: '#D291BC', opacity: 0.45, blendMode: 'color-burn', desc: 'Delicate, everyday mauve pink in soft satin.' },
  { name: 'Plum Romance', hex: '#662244', opacity: 0.4, blendMode: 'multiply', desc: 'Mysterious, deep berry plum with high coverage.' }
];

const hairColors = [
  { name: 'Golden Balayage', hex: '#D4AF37', opacity: 0.35, blendMode: 'color', desc: 'Sun-kissed warm blonde accents with dimensional tones.' },
  { name: 'Mahogany Cherry', hex: '#722F37', opacity: 0.4, blendMode: 'color', desc: 'Rich, luxurious dark red with copper highlights.' },
  { name: 'Caramel Highlights', hex: '#C58B3F', opacity: 0.35, blendMode: 'color', desc: 'Soft brown base infused with gold caramel glaze.' },
  { name: 'Midnight Violet', hex: '#4B0082', opacity: 0.3, blendMode: 'color', desc: 'Deep black base with shimmery indigo purple reflections.' }
];

const modelImages = {
  lips: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
  hair: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800'
};

const ShadeFinder = () => {
  const [mode, setMode] = useState('lips'); // 'lips' or 'hair'
  const [selectedColor, setSelectedColor] = useState(lipstickColors[0]);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [loadingCamera, setLoadingCamera] = useState(false);

  // Calibration Overlay Sliders
  const [overlayWidth, setOverlayWidth] = useState(40); // % width
  const [overlayHeight, setOverlayHeight] = useState(20); // % height
  const [overlayX, setOverlayX] = useState(50); // % X position
  const [overlayY, setOverlayY] = useState(60); // % Y position
  const [showCalibrator, setShowCalibrator] = useState(true);

  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Handle color category change
  const handleModeChange = (newMode) => {
    setMode(newMode);
    if (newMode === 'lips') {
      setSelectedColor(lipstickColors[0]);
      setOverlayWidth(40);
      setOverlayHeight(18);
      setOverlayY(60);
    } else {
      setSelectedColor(hairColors[0]);
      setOverlayWidth(80);
      setOverlayHeight(60);
      setOverlayY(35);
    }
  };

  // Start Camera Stream
  const startCamera = async () => {
    setLoadingCamera(true);
    setCameraError(null);
    try {
      if (streamRef.current) {
        stopCamera();
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraActive(true);
    } catch (err) {
      console.error('Camera Access Error:', err);
      setCameraError('Unable to access camera. Please verify camera permissions in your browser or continue using our model try-on mode.');
      setIsCameraActive(false);
    } finally {
      setLoadingCamera(false);
    }
  };

  // Stop Camera Stream
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  useEffect(() => {
    return () => stopCamera();
  }, []);

  const shadeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Virtual Shade Finder - Barça 10 Salon",
    "description": "Try on premium lipsticks and hair colors virtually using our interactive camera overlay Shade Finder.",
    "url": "https://barca10salon.com/shade-finder"
  };

  return (
    <div className="pt-28 pb-20 bg-champagne dark:bg-luxury-black transition-colors duration-300 min-h-screen text-luxury-black dark:text-white">
      <SEO title="Virtual Try-On Shade Finder" description="Try lipstick and hair color swatches virtually on our camera overlay." schema={shadeSchema} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Try-On Mirror Display */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-primary/20 bg-black flex items-center justify-center group">
            
            {/* Live Camera Stream */}
            {isCameraActive ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="absolute inset-0 w-full h-full object-cover transform -scale-x-100"
              />
            ) : (
              /* Fallback Model Image */
              <img
                src={mode === 'lips' ? modelImages.lips : modelImages.hair}
                alt="Model representation for Virtual shade selection"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
            )}

            {/* Virtual Shade Blending Overlay */}
            <div 
              className="absolute pointer-events-none rounded-[50%/50%]"
              style={{
                width: `${overlayWidth}%`,
                height: `${overlayHeight}%`,
                left: `${overlayX}%`,
                top: `${overlayY}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: selectedColor.hex,
                mixBlendMode: selectedColor.blendMode,
                opacity: selectedColor.opacity,
                filter: 'blur(8px)',
                boxShadow: `0 0 16px 8px ${selectedColor.hex}`
              }}
            />

            {/* Interactive Calibrator Outline (Only when active and calibrating) */}
            {showCalibrator && (
              <div 
                className="absolute border border-dashed border-primary rounded-[50%/50%] pointer-events-none flex items-center justify-center"
                style={{
                  width: `${overlayWidth}%`,
                  height: `${overlayHeight}%`,
                  left: `${overlayX}%`,
                  top: `${overlayY}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span className="bg-luxury-black/70 backdrop-blur-sm text-[8px] text-primary border border-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {mode === 'lips' ? 'Lips Frame' : 'Hair Frame'}
                </span>
              </div>
            )}

            {/* Mirror Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
              <button
                onClick={isCameraActive ? stopCamera : startCamera}
                className="glassmorphism dark:glassmorphism-dark text-luxury-black dark:text-white border border-primary/30 hover:border-primary px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs font-semibold uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <FiCamera className="text-primary text-sm" />
                {loadingCamera ? 'Loading...' : isCameraActive ? 'Use Model Photo' : 'Use Live Camera'}
              </button>

              <button
                onClick={() => setShowCalibrator(!showCalibrator)}
                className="glassmorphism dark:glassmorphism-dark text-luxury-black dark:text-white border border-primary/30 hover:border-primary p-2.5 rounded-2xl flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                title="Toggle Alignment Frame"
              >
                <FiSliders className="text-primary text-sm" />
              </button>
            </div>

            {/* Camera Loading Overlay */}
            {loadingCamera && (
              <div className="absolute inset-0 bg-luxury-black/80 flex flex-col items-center justify-center gap-4 text-white z-20">
                <FiRefreshCw className="text-primary text-4xl animate-spin" />
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">Configuring Camera...</span>
              </div>
            )}
          </div>

          {/* Camera Permission Alert Message */}
          {cameraError && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 text-red-700 dark:text-red-400 text-xs p-4 rounded-2xl flex gap-3 items-start"
            >
              <FiAlertCircle className="text-base shrink-0 mt-0.5" />
              <p className="font-light leading-relaxed">{cameraError}</p>
            </motion.div>
          )}

          {/* Calibrator Controller Sliders (Rendered when toggled) */}
          {showCalibrator && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-white dark:bg-luxury-dark border border-primary/10 dark:border-primary/20 rounded-3xl p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-1">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-primary">Frame Calibration Tool</h4>
                <FiHelpCircle className="text-luxury-light-gray text-xs" title="Adjust sliders to align the color tint box over your lips or hair." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] uppercase font-semibold">
                {/* Horizontal Alignment */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span>Horizontal Shift (X)</span>
                    <span className="text-primary">{overlayX}%</span>
                  </div>
                  <input 
                    type="range" min="10" max="90" value={overlayX} 
                    onChange={(e) => setOverlayX(Number(e.target.value))} 
                    className="w-full h-1 bg-champagne dark:bg-luxury-black rounded-lg appearance-none cursor-pointer accent-primary" 
                  />
                </div>

                {/* Vertical Alignment */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span>Vertical Shift (Y)</span>
                    <span className="text-primary">{overlayY}%</span>
                  </div>
                  <input 
                    type="range" min="10" max="90" value={overlayY} 
                    onChange={(e) => setOverlayY(Number(e.target.value))} 
                    className="w-full h-1 bg-champagne dark:bg-luxury-black rounded-lg appearance-none cursor-pointer accent-primary" 
                  />
                </div>

                {/* Width Calibration */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span>Frame Width</span>
                    <span className="text-primary">{overlayWidth}%</span>
                  </div>
                  <input 
                    type="range" min="5" max="95" value={overlayWidth} 
                    onChange={(e) => setOverlayWidth(Number(e.target.value))} 
                    className="w-full h-1 bg-champagne dark:bg-luxury-black rounded-lg appearance-none cursor-pointer accent-primary" 
                  />
                </div>

                {/* Height Calibration */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <span>Frame Height</span>
                    <span className="text-primary">{overlayHeight}%</span>
                  </div>
                  <input 
                    type="range" min="5" max="95" value={overlayHeight} 
                    onChange={(e) => setOverlayHeight(Number(e.target.value))} 
                    className="w-full h-1 bg-champagne dark:bg-luxury-black rounded-lg appearance-none cursor-pointer accent-primary" 
                  />
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* Right Side: Shade Customizer Controls */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Headline */}
          <div>
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Virtual Try-On</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mt-2">Shade Finder</h1>
            <p className="text-luxury-light-gray dark:text-white/60 text-xs md:text-sm font-light mt-4 leading-relaxed">
              Find your signature tone in seconds. Toggle between lipstick and hair coloring swatches, enable your camera mirror, and calibrate the overlay to inspect the finish under soft studio lights.
            </p>
          </div>

          {/* Mode Selector Tabs */}
          <div className="bg-white dark:bg-luxury-dark rounded-full p-1.5 border border-primary/10 dark:border-primary/20 flex gap-2 w-full">
            <button
              onClick={() => handleModeChange('lips')}
              className={`flex-1 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                mode === 'lips'
                  ? 'gold-gradient text-luxury-black shadow-md'
                  : 'text-luxury-light-gray dark:text-white/60 hover:text-primary'
              }`}
            >
              Lipstick Colors
            </button>
            <button
              onClick={() => handleModeChange('hair')}
              className={`flex-1 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-semibold cursor-pointer ${
                mode === 'hair'
                  ? 'gold-gradient text-luxury-black shadow-md'
                  : 'text-luxury-light-gray dark:text-white/60 hover:text-primary'
              }`}
            >
              Hair Colors
            </button>
          </div>

          {/* Color Swatches Grid */}
          <div className="flex flex-col gap-4 bg-white dark:bg-luxury-dark border border-primary/10 dark:border-primary/20 rounded-3xl p-6 md:p-8">
            <h3 className="font-serif font-bold text-base uppercase tracking-wider text-primary">Select Swatch</h3>
            
            <div className="flex flex-wrap gap-4 mt-2">
              {(mode === 'lips' ? lipstickColors : hairColors).map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 transition-transform duration-300 hover:scale-110 cursor-pointer ${
                    selectedColor.name === color.name ? 'border-primary' : 'border-transparent shadow-sm'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>

            {/* Selected Shade Details Card */}
            <motion.div 
              key={selectedColor.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mt-6 pt-6 border-t border-primary/10 dark:border-primary/20 flex flex-col gap-2"
            >
              <h4 className="font-serif font-bold text-sm md:text-base text-luxury-black dark:text-white">{selectedColor.name}</h4>
              <p className="text-luxury-light-gray dark:text-white/60 text-xs font-light leading-relaxed">{selectedColor.desc}</p>
              
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[10px] uppercase font-bold text-primary">Blending Filter:</span>
                <span className="text-[10px] text-luxury-black dark:text-white font-medium bg-champagne dark:bg-luxury-black border border-primary/20 px-2 py-0.5 rounded-md uppercase tracking-wider">{selectedColor.blendMode}</span>
              </div>
            </motion.div>
          </div>

          {/* Booking / CTA Integration */}
          <div className="flex flex-col gap-4">
            <Link to={`/booking?service=${encodeURIComponent(mode === 'lips' ? 'Bridal Makeup & Styling' : 'Balayage & Hair Coloring')}`} className="w-full">
              <Button variant="primary" className="w-full">
                Book This Look Now
              </Button>
            </Link>
            
            <div className="text-center">
              <span className="text-[10px] text-luxury-light-gray dark:text-white/40 font-light uppercase tracking-widest">
                Share this shade results with your bridal trial artist.
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ShadeFinder;
