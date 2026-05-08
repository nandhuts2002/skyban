import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const links = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Main Navbar bar ─────────────────────────────────────── */}
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
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            style={{ display: 'flex', alignItems: 'center', gap: '9px', cursor: 'pointer', flexShrink: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              animate={{ filter: ['drop-shadow(0 0 3px rgba(207,162,93,0))', 'drop-shadow(0 0 7px rgba(207,162,93,0.8))', 'drop-shadow(0 0 3px rgba(207,162,93,0))'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="30" height="22" viewBox="0 0 100 60" fill="none">
                <path d="M50 5 L95 45 L82 45 L50 18 L18 45 L5 45 Z" fill="#cfa25d" />
                <path d="M50 20 L72 40 L60 40 L50 30 L40 40 L28 40 Z" fill="#cfa25d" opacity="0.6" />
              </svg>
            </motion.div>
            <div>
              <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '14px', letterSpacing: '3px', lineHeight: 1, background: 'linear-gradient(90deg,#cfa25d,#e8c07a,#cfa25d)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 3s linear infinite' }}>SKYBAN</div>
              <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '7.5px', letterSpacing: '2.5px', color: 'rgba(207,162,93,0.8)', textTransform: 'uppercase', marginTop: '2px' }}>Roofing Systems</div>
            </div>
          </motion.div>
        </Link>

        {/* ── Desktop Links (hidden on mobile) ── */}
        <div className="nav-desktop-links" style={{ display: 'flex', gap: '0px', alignItems: 'center', flexShrink: 1 }}>
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link key={link.to} to={link.to} style={{ textDecoration: 'none' }}
                onMouseEnter={() => setHovered(link.to)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.span style={{
                  color: isActive || hovered === link.to ? '#cfa25d' : 'rgba(255,255,255,0.82)',
                  fontFamily: 'Inter', fontWeight: 500, fontSize: '12px',
                  padding: '7px 10px', borderRadius: '9999px',
                  position: 'relative', whiteSpace: 'nowrap',
                  transition: 'color 0.25s', display: 'block',
                }}>
                  {link.label}
                  <AnimatePresence>
                    {(hovered === link.to || isActive) && (
                      <motion.div layoutId="nav-hover-pill"
                        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.18 }}
                        style={{ position: 'absolute', inset: 0, background: isActive ? 'rgba(207,162,93,0.18)' : 'rgba(207,162,93,0.1)', borderRadius: '9999px', zIndex: -1 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.span>
              </Link>
            );
          })}
        </div>

        {/* ── Right side: CTA + Hamburger ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>

          {/* Hamburger button — visible only on mobile */}
          <motion.button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            style={{ display: 'none', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', width: '38px', height: '38px', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '4px', padding: 0 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span key={i}
                animate={menuOpen
                  ? i === 0 ? { rotate: 45, y: 8, width: '18px' }
                    : i === 1 ? { opacity: 0, scaleX: 0 }
                      : { rotate: -45, y: -8, width: '18px' }
                  : { rotate: 0, y: 0, opacity: 1, scaleX: 1, width: '18px' }
                }
                transition={{ duration: 0.25 }}
                style={{ display: 'block', height: '2px', width: '18px', background: '#cfa25d', borderRadius: '2px', transformOrigin: 'center' }}
              />
            ))}
          </motion.button>
        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Menu ──────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed', inset: 0, zIndex: 8999,
              background: 'rgba(8,14,26,0.96)',
              backdropFilter: 'blur(24px)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center',
              gap: '8px', padding: '100px 24px 48px',
            }}
          >
            {links.map((link, i) => (
              <motion.div key={link.to}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                style={{ width: '100%', maxWidth: '320px' }}
              >
                <Link to={link.to} style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      padding: '18px 24px',
                      borderRadius: '14px',
                      border: location.pathname === link.to
                        ? '1px solid rgba(207,162,93,0.4)'
                        : '1px solid rgba(255,255,255,0.07)',
                      background: location.pathname === link.to
                        ? 'rgba(207,162,93,0.1)' : 'rgba(255,255,255,0.03)',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}
                  >
                    <span style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '22px', color: location.pathname === link.to ? '#cfa25d' : 'white' }}>
                      {link.label}
                    </span>
                    <span style={{ color: '#cfa25d', fontSize: '18px' }}>→</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
