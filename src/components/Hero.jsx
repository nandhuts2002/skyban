import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


// ── Floating orbs (decorative ambiance) ──────────────────────────────
const Orbs = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
    {[
      { size: 480, x: '75%', y: '10%', delay: 0,  color: 'rgba(207,162,93,0.06)' },
      { size: 320, x: '10%', y: '60%', delay: 2,  color: 'rgba(43,67,101,0.4)'   },
      { size: 200, x: '50%', y: '80%', delay: 4,  color: 'rgba(207,162,93,0.04)' },
      { size: 140, x: '88%', y: '55%', delay: 1,  color: 'rgba(255,255,255,0.03)'},
    ].map((orb, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: orb.size,
          height: orb.size,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          left: orb.x,
          top: orb.y,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
        animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
      />
    ))}

    {/* Floating particles */}
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={`p-${i}`}
        style={{
          position: 'absolute',
          width: i % 3 === 0 ? 3 : 2,
          height: i % 3 === 0 ? 3 : 2,
          borderRadius: '50%',
          background: i % 4 === 0 ? '#cfa25d' : 'rgba(255,255,255,0.4)',
          left: `${(i * 5.2) % 100}%`,
          bottom: 0,
        }}
        animate={{
          y: [0, -(600 + (i * 37) % 400)],
          x: [0, ((i * 17) % 80) - 40],
          opacity: [0, 0.8, 0.8, 0],
          scale: [0, 1, 1, 0],
        }}
        transition={{
          duration: 8 + (i * 1.3) % 8,
          repeat: Infinity,
          delay: (i * 0.7) % 10,
          ease: 'linear',
        }}
      />
    ))}
  </div>
);

// ── Geometric accent lines ────────────────────────────────────────────
const GeometricAccent = () => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ delay: 1.5, duration: 1.5, ease: 'easeOut' }}
      style={{
        position: 'absolute', top: 80, right: 60,
        width: 200, height: 200,
        border: '1px solid rgba(207,162,93,0.2)',
        borderRadius: '50%',
      }}
    />
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.25, scale: 1 }}
      transition={{ delay: 1.8, duration: 1.5, ease: 'easeOut' }}
      style={{
        position: 'absolute', top: 110, right: 90,
        width: 140, height: 140,
        border: '1px dashed rgba(207,162,93,0.15)',
        borderRadius: '50%',
      }}
    />
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 2 + i * 0.2, duration: 1, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: 100 + i * 18,
          left: 0,
          width: 60 + i * 30,
          height: 1,
          background: `rgba(207,162,93,${0.4 - i * 0.1})`,
          transformOrigin: 'left',
        }}
      />
    ))}
  </div>
);

// ── Hero ──────────────────────────────────────────────────────────────
const Hero = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const textY  = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', background: 'transparent' }}
    >
      {/* Extra hero-specific dark gradient so text pops over the video */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(160deg, rgba(6,12,24,0.55) 0%, rgba(6,12,24,0.18) 50%, rgba(6,12,24,0.72) 100%)',
        }}
      />

      {/* Orbs & geometric accents */}
      <Orbs />
      <GeometricAccent />

      {/* ── Main centred content ─────────────────────────────────── */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 24px',
          paddingTop: '80px',
          y: textY,
          opacity,
        }}
      >
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(207,162,93,0.14)',
            border: '1px solid rgba(207,162,93,0.35)',
            borderRadius: '9999px',
            padding: '8px 20px',
            marginBottom: '28px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 8, height: 8, borderRadius: '50%', background: '#cfa25d' }}
          />
          <span style={{
            fontFamily: 'Inter', fontWeight: 500, fontSize: '12px',
            letterSpacing: '3px', color: '#cfa25d', textTransform: 'uppercase',
          }}>
            Est. Since 2006
          </span>
        </motion.div>

        {/* Headline */}
        <div style={{ maxWidth: '980px', overflow: 'visible' }}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.5 }}
            style={{
              fontFamily: 'Italiana, serif', fontWeight: 400,
              fontSize: 'clamp(80px, 16vw, 200px)',
              color: 'white',
              letterSpacing: '2px', lineHeight: 0.88,
              marginBottom: '32px',
              position: 'relative',
              textShadow: '0 4px 40px rgba(0,0,0,0.6)',
            }}
          >
            {'Skyban'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Roofing System subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            style={{
              fontFamily: 'Inter', fontWeight: 600,
              fontSize: 'clamp(13px, 1.6vw, 18px)',
              color: '#cfa25d',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              marginBottom: '18px',
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}
          >
            Skyban stone coated roofing tiles and Upvc Raingutters
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.1, ease: 'easeOut' }}
            style={{
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #cfa25d, rgba(232,192,122,0.8), #cfa25d, transparent)',
              maxWidth: '400px', margin: '0 auto 28px', transformOrigin: 'center',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              color: 'rgba(255,255,255,0.88)',
              fontFamily: 'Inter', fontWeight: 300,
              fontSize: 'clamp(16px, 2vw, 22px)',
              maxWidth: '560px', margin: '0 auto 52px',
              lineHeight: 1.7, letterSpacing: '0.3px',
              textShadow: '0 2px 16px rgba(0,0,0,0.5)',
            }}
          >
            Experience the excellence in roofing
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.button
              className="btn-ripple"
              onClick={() => navigate('/products')}
              whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(207,162,93,0.6), 0 12px 40px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg, #cfa25d 0%, #e8c07a 50%, #b88c4b 100%)',
                backgroundSize: '200% 200%',
                color: 'white', border: 'none', borderRadius: '9999px',
                padding: '18px 40px', fontFamily: 'Inter', fontWeight: 700,
                fontSize: '15px', cursor: 'pointer', letterSpacing: '0.5px',
                boxShadow: '0 8px 32px rgba(207,162,93,0.4)',
                animation: 'gradient-shift 4s ease infinite',
              }}
            >
              Explore Collections
            </motion.button>

            <motion.button
              className="btn-ripple"
              onClick={() => navigate('/services')}
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.18)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '9999px', padding: '18px 40px',
                fontFamily: 'Inter', fontWeight: 500, fontSize: '15px',
                cursor: 'pointer', backdropFilter: 'blur(16px)',
                letterSpacing: '0.5px',
              }}
            >
              Our Process →
            </motion.button>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'absolute', bottom: '100px',
            display: 'flex', gap: '40px', alignItems: 'center',
          }}
        >
          {['Since 2006', '20+ Years', '10K+ Homes', '100% Warranty'].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + i * 0.1, duration: 0.6 }}
              style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '4px',
              }}
            >
              <span style={{
                fontFamily: 'Playfair Display', fontWeight: 700,
                fontSize: '18px', color: '#cfa25d',
                textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              }}>
                {badge.split(' ')[0]}
              </span>
              <span style={{
                fontFamily: 'Inter', fontSize: '10px',
                color: 'rgba(255,255,255,0.65)',
                letterSpacing: '1.5px', textTransform: 'uppercase',
              }}>
                {badge.split(' ').slice(1).join(' ')}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>


    </div>
  );
};

export default Hero;
