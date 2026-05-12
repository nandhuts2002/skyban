import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const links = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT US', to: '/about' },
  { label: 'PRODUCTS', to: '/products' },
  { label: 'SOLUTIONS', to: '/services' },
  { label: 'CONTACT US', to: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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


      {/* ── Main Navbar ───────────────────────────────────────────── */}
      <motion.nav
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.6)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          padding: '16px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
            whileHover={{ scale: 1.02 }}
          >
            <svg width="40" height="28" viewBox="0 0 100 60" fill="none">
              <path d="M50 5 L95 45 L82 45 L50 18 L18 45 L5 45 Z" fill="#cfa25d" />
              <path d="M50 20 L72 40 L60 40 L50 30 L40 40 L28 40 Z" fill="#cfa25d" opacity="0.6" />
            </svg>
            <div style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '20px', letterSpacing: '4px', lineHeight: 1.2, color: 'white' }}>SKYBAN</div>
            <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '8px', letterSpacing: '3px', color: '#cfa25d', textTransform: 'uppercase' }}>Roofing Systems</div>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link key={link.to} to={link.to} style={{ textDecoration: 'none' }}>
                <span style={{
                  color: isActive ? '#cfa25d' : 'rgba(255,255,255,0.85)',
                  fontFamily: 'Inter', fontWeight: 600, fontSize: '11px',
                  letterSpacing: '1px',
                  position: 'relative', whiteSpace: 'nowrap',
                  transition: 'color 0.25s',
                  display: 'flex', alignItems: 'center', gap: '4px'
                }}>
                  {link.label}
                  {isActive && (
                    <motion.div layoutId="nav-underline"
                      style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: '#cfa25d' }}
                    />
                  )}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate('/contact')}
            style={{
              background: 'transparent',
              color: 'white',
              border: '1px solid rgba(207,162,93,0.5)',
              padding: '10px 24px',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '11px',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(207,162,93,0.1)'; e.currentTarget.style.borderColor = '#cfa25d'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(207,162,93,0.5)'; }}
          >
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden flex flex-col gap-1 items-center justify-center w-10 h-10 border border-white/20 rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'transparent', cursor: 'pointer', padding: 0 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span key={i}
              animate={menuOpen
                ? i === 0 ? { rotate: 45, y: 6, width: '16px' }
                  : i === 1 ? { opacity: 0, scaleX: 0 }
                    : { rotate: -45, y: -6, width: '16px' }
                : { rotate: 0, y: 0, opacity: 1, scaleX: 1, width: '16px' }
              }
              transition={{ duration: 0.25 }}
              style={{ display: 'block', height: '2px', width: '16px', background: '#cfa25d', transformOrigin: 'center' }}
            />
          ))}
        </motion.button>
      </motion.nav>

      {/* ── Mobile Menu ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 8999,
              background: 'rgba(10,10,10,0.98)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', gap: '24px'
            }}
          >
            {links.map((link, i) => (
              <motion.div key={link.to} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link to={link.to} style={{ textDecoration: 'none', color: 'white', fontFamily: 'Inter', fontSize: '24px', fontWeight: 600 }}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              onClick={() => { setMenuOpen(false); navigate('/contact'); }}
              style={{ mt: 4, background: '#cfa25d', color: 'white', border: 'none', padding: '14px 32px', fontSize: '16px', fontWeight: 600, fontFamily: 'Inter' }}
            >
              GET A QUOTE
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
