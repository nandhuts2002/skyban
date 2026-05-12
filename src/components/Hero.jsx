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
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0a0a0a' }}>
      
      {/* Background Image with Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img 
          src={`${import.meta.env.BASE_URL}hero_bg_sunset_mansion.png`}
          alt="Luxury Modern Home Roofing" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        {/* Adjusted dark overlay for better text contrast without losing image clarity */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.1) 100%)'
        }} />
      </div>

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', alignItems: 'center', padding: '0 48px' }}>
        <div style={{ maxWidth: '750px', paddingTop: '60px' }}>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '12px', letterSpacing: '3px', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '20px' }}
          >
            Premium Roofing Solutions
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'Italiana, serif', fontWeight: 400, fontSize: 'clamp(56px, 7vw, 90px)', lineHeight: 1, color: 'white', letterSpacing: '1px' }}
          >
            BUILT STRONG.
          </motion.h1>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: 'Italiana, serif', fontWeight: 400, fontSize: 'clamp(56px, 7vw, 90px)', lineHeight: 1.1, color: '#cfa25d', marginBottom: '28px', letterSpacing: '1px' }}
          >
            BUILT TO LAST.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, maxWidth: '580px', marginBottom: '48px', letterSpacing: '0.5px' }}
          >
            Stone Coated Roofing Tiles & uPVC Rain Gutters for Beautiful, Durable & Future-Ready Homes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: 'flex', gap: '20px' }}
          >
            <button
              onClick={() => navigate('/products')}
              style={{
                background: '#cfa25d', color: '#0a0a0a', border: 'none',
                padding: '16px 36px', fontFamily: 'Inter', fontWeight: 700, fontSize: '13px', letterSpacing: '1px',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px',
                transition: 'background 0.3s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#e8c07a'}
              onMouseLeave={e => e.currentTarget.style.background = '#cfa25d'}
            >
              EXPLORE PRODUCTS <span style={{fontSize: '16px'}}>→</span>
            </button>

            <button
              onClick={() => navigate('/contact')}
              style={{
                background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.3)',
                padding: '16px 36px', fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', letterSpacing: '1px',
                cursor: 'pointer', transition: 'all 0.3s'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#cfa25d'; e.currentTarget.style.color = '#cfa25d'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'white'; }}
            >
              GET A QUOTE
            </button>
          </motion.div>
        </div>
      </div>

      {/* Feature Bar Overlapping Bottom */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 48px', marginTop: 'auto', marginBottom: '-55px' }}>
        <div style={{
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          borderLeft: '1px solid rgba(255,255,255,0.03)',
          borderRight: '1px solid rgba(255,255,255,0.03)',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          padding: '36px 24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          {[
            { icon: icons.quality, title: 'PREMIUM QUALITY', sub: 'Best in class materials' },
            { icon: icons.weather, title: 'WEATHER RESISTANT', sub: 'Built for all climates' },
            { icon: icons.time, title: 'LONG LASTING', sub: 'Engineered for durability' },
            { icon: icons.house, title: 'LOW MAINTENANCE', sub: 'Easy to clean & maintain' },
            { icon: icons.support, title: 'EXPERT SUPPORT', sub: 'Dedicated technical support' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', borderRight: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
              <div>{item.icon}</div>
              <div>
                <div style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '12px', color: 'white', marginBottom: '4px', letterSpacing: '0.5px' }}>{item.title}</div>
                <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
