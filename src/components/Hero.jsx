import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const icons = {
    quality: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    weather: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/><circle cx="12" cy="12" r="4"/></svg>,
    time: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    house: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    support: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cfa25d" strokeWidth="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#0a0a0a]">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}hero_bg_sunset_mansion.png`}
          alt="Luxury Modern Home Roofing" 
          className="w-full h-full object-cover"
        />
        {/* Adjusted dark overlay for better text contrast */}
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.1) 100%)' }} 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 py-24 md:py-0">
        <div className="max-w-[750px] pt-12 md:pt-20">
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-inter font-semibold text-[11px] md:text-[12px] tracking-[3px] text-white/70 uppercase mb-4 md:mb-5"
          >
            Premium Roofing Solutions
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[Italiana] font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-none text-white tracking-[1px] mb-2"
          >
            BUILT STRONG.
          </motion.h1>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="font-[Italiana] font-normal text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-tight text-[#cfa25d] mb-6 tracking-[1px]"
          >
            BUILT TO LAST.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="font-inter font-light text-[16px] md:text-[18px] text-white/90 leading-relaxed max-w-[580px] mb-10 tracking-[0.5px]"
          >
            Stone Coated Roofing Tiles & uPVC Rain Gutters for Beautiful, Durable & Future-Ready Homes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5"
          >
            <button
              onClick={() => navigate('/products')}
              className="bg-[#cfa25d] text-[#0a0a0a] border-none py-4 px-8 font-inter font-bold text-[13px] tracking-[1px] cursor-pointer flex items-center justify-center gap-3 transition-colors duration-300 hover:bg-[#e8c07a]"
            >
              EXPLORE PRODUCTS <span className="text-[16px]">→</span>
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent text-white border border-white/30 py-4 px-8 font-inter font-semibold text-[13px] tracking-[1px] cursor-pointer transition-colors duration-300 hover:border-[#cfa25d] hover:text-[#cfa25d]"
            >
              GET A QUOTE
            </button>
          </motion.div>
        </div>
      </div>

      {/* Feature Bar Overlapping Bottom */}
      <div className="relative z-20 px-4 md:px-12 mt-12 md:mt-auto md:mb-[-55px]">
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-0 p-6 md:p-9 shadow-2xl"
          style={{
            background: 'rgba(10,10,10,0.92)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            borderLeft: '1px solid rgba(255,255,255,0.03)',
            borderRight: '1px solid rgba(255,255,255,0.03)',
          }}
        >
          {[
            { icon: icons.quality, title: 'PREMIUM QUALITY', sub: 'Best in class materials' },
            { icon: icons.weather, title: 'WEATHER RESISTANT', sub: 'Built for all climates' },
            { icon: icons.time, title: 'LONG LASTING', sub: 'Engineered for durability' },
            { icon: icons.house, title: 'LOW MAINTENANCE', sub: 'Easy to clean & maintain' },
            { icon: icons.support, title: 'EXPERT SUPPORT', sub: 'Dedicated technical support' },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`flex items-center justify-start md:justify-center gap-4 ${i < 4 ? 'lg:border-r lg:border-white/5' : ''}`}
            >
              <div>{item.icon}</div>
              <div>
                <div className="font-inter font-semibold text-[12px] text-white mb-1 tracking-[0.5px]">{item.title}</div>
                <div className="font-inter font-normal text-[11px] text-white/50">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
