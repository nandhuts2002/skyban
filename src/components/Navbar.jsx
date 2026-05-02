import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Services', 'Products', 'Reviews', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="glass-nav"
      style={{
        position: 'fixed',
        top: scrolled ? '10px' : '18px',
        left: '20px',
        right: '20px',
        zIndex: 9000,
        borderRadius: '9999px',
        padding: '9px 12px 9px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: scrolled
          ? '0 8px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(207,162,93,0.15)'
          : '0 8px 32px rgba(0,0,0,0.3)',
        maxWidth: '1060px',
        margin: '0 auto',
      }}
    >
      {/* ── Logo ── */}
      <motion.div
        style={{ display: 'flex', alignItems: 'center', gap: '9px', cursor: 'pointer', flexShrink: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <motion.div
          animate={{
            filter: [
              'drop-shadow(0 0 3px rgba(207,162,93,0))',
              'drop-shadow(0 0 7px rgba(207,162,93,0.8))',
              'drop-shadow(0 0 3px rgba(207,162,93,0))',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="30" height="22" viewBox="0 0 100 60" fill="none">
            <path d="M50 5 L95 45 L82 45 L50 18 L18 45 L5 45 Z" fill="#cfa25d" />
            <path d="M50 20 L72 40 L60 40 L50 30 L40 40 L28 40 Z" fill="#cfa25d" opacity="0.6" />
          </svg>
        </motion.div>

        <div>
          <div style={{
            fontFamily: 'Inter',
            fontWeight: 800,
            fontSize: '14px',
            letterSpacing: '3px',
            lineHeight: 1,
            background: 'linear-gradient(90deg, #cfa25d, #e8c07a, #cfa25d)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 3s linear infinite',
          }}>
            SKYBAN
          </div>
          <div style={{
            fontFamily: 'Inter', fontWeight: 400, fontSize: '7.5px',
            letterSpacing: '2.5px', color: 'rgba(207,162,93,0.8)',
            textTransform: 'uppercase', marginTop: '2px',
          }}>
            Roofing Systems
          </div>
        </div>
      </motion.div>

      {/* ── Desktop Links ── */}
      <div style={{ display: 'flex', gap: '0px', alignItems: 'center', flexShrink: 1 }}>
        {links.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: activeLink === link ? '#cfa25d' : 'rgba(255,255,255,0.82)',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              letterSpacing: '0.2px',
              textDecoration: 'none',
              padding: '7px 10px',
              borderRadius: '9999px',
              position: 'relative',
              whiteSpace: 'nowrap',
              transition: 'color 0.25s',
              display: 'block',
            }}
            onMouseEnter={() => setActiveLink(link)}
            onMouseLeave={() => setActiveLink(null)}
          >
            {link}
            <AnimatePresence>
              {activeLink === link && (
                <motion.div
                  layoutId="nav-hover-pill"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(207,162,93,0.13)',
                    borderRadius: '9999px',
                    zIndex: -1,
                  }}
                />
              )}
            </AnimatePresence>
          </motion.a>
        ))}
      </div>

      {/* ── CTA Button ── */}
      <motion.button
        className="btn-ripple"
        whileHover={{ scale: 1.06, boxShadow: '0 0 28px rgba(207,162,93,0.55)' }}
        whileTap={{ scale: 0.96 }}
        style={{
          flexShrink: 0,
          background: 'linear-gradient(135deg, #cfa25d 0%, #e8c07a 50%, #b88c4b 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '9999px',
          padding: '9px 18px',
          fontFamily: 'Inter',
          fontWeight: 700,
          fontSize: '12px',
          letterSpacing: '0.3px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 18px rgba(207,162,93,0.35)',
        }}
      >
        Get a Quote
        <motion.span
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: '14px', lineHeight: 1 }}
        >
          →
        </motion.span>
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
