import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 'shake',
    title: 'Shake Collection',
    subtitle: 'TRADITIONAL',
    description: 'The rustic charm of wood-grain shake with deep-ribbed profiles designed to enhance shadow lines and visual contrast.',
    image: `${import.meta.env.BASE_URL}premium_shake_roof.png`,
    bullets: ['Deep-ribbed profiles', 'Visual contrast', 'Weather Resistant', 'Lightweight'],
  },
  {
    id: 'classic',
    title: 'Classic Collection',
    subtitle: 'TIMELESS',
    description: 'Make a statement with strong, bold lines. Smooth flowing curves for a timeless appeal that never goes out of style.',
    image: `${import.meta.env.BASE_URL}premium_classic_roof.png`,
    bullets: ['Smooth flowing curves', 'Bold lines', 'Timeless appeal', 'High Durability'],
  },
  {
    id: 'bond',
    title: 'Bond Collection',
    subtitle: 'MODERN',
    description: 'Low-profile interlocking tile system perfect for contemporary architecture and flat-facade commercial builds.',
    image: `${import.meta.env.BASE_URL}premium_bond_roof.png`,
    bullets: ['Low-profile design', 'Interlocking system', 'Contemporary look', 'Secure fit'],
  },
  {
    id: 'shingle',
    title: 'Shingle Collection',
    subtitle: 'ELEGANT',
    description: 'Replicating the look of dimensional asphalt shingles but constructed from high-tensile stone-coated steel.',
    image: `${import.meta.env.BASE_URL}premium_shingle_roof.png`,
    bullets: ['Asphalt look', 'Stone-coated steel', 'High-tensile strength', 'Elegant finish'],
  },
  {
    id: 'roman',
    title: 'Roman Collection',
    subtitle: 'MEDITERRANEAN',
    description: 'The distinctive curve of authentic Mediterranean clay tiles, but much lighter and completely storm-proof.',
    image: `${import.meta.env.BASE_URL}premium_roman_roof.png`,
    bullets: ['Mediterranean style', 'Distinctive curve', 'Storm-proof', 'Lightweight'],
  },
];

const Features = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ background: '#f5f5f5', color: '#0a0a0a', paddingTop: '120px' }}>
      
      {/* ── Products Section ────────────────────────────────────────── */}
      <section style={{ padding: '80px 48px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '60px' }}>
          
          {/* Left Text Block */}
          <div>
            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '11px', color: '#cfa25d', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>OUR PRODUCTS</p>
            <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '42px', lineHeight: 1.1, color: '#0a0a0a', marginBottom: '24px' }}>
              Roofing & Gutter Solutions Designed for <span style={{ color: '#cfa25d' }}>Excellence</span>
            </h2>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.6, marginBottom: '40px' }}>
              High performance roofing tiles and uPVC rain gutters that combine strength, style and long lasting protection.
            </p>
            <button
              onClick={() => navigate('/products')}
              style={{
                background: '#0a0a0a', color: 'white', border: 'none',
                padding: '16px 32px', fontFamily: 'Inter', fontWeight: 600, fontSize: '12px',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px',
                transition: 'background 0.3s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#222'}
              onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}
            >
              VIEW ALL PRODUCTS <span>→</span>
            </button>
          </div>

          {/* Right Product Cards */}
          <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '24px' }}>
            {products.slice(0, 3).map((product) => (
              <div key={product.id} style={{ background: 'white', minWidth: '320px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '-20px', left: '24px', width: '48px', height: '48px', background: '#cfa25d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', border: '4px solid white' }}>
                    🏠
                  </div>
                </div>
                <div style={{ padding: '40px 24px 32px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '20px', color: '#0a0a0a', marginBottom: '16px', textTransform: 'uppercase' }}>
                    {product.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                    {product.bullets.map((bullet, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontFamily: 'Inter', fontSize: '13px', color: '#555' }}>
                        <span style={{ color: '#cfa25d', fontSize: '14px' }}>✔</span> {bullet}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(`/products#${product.id}`)}
                    style={{ background: 'transparent', border: 'none', color: '#cfa25d', fontFamily: 'Inter', fontWeight: 600, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    EXPLORE MORE <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ───────────────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', color: 'white', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          
          {/* Real Video Player */}
          <div 
            style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', aspectRatio: '16/9', cursor: 'pointer' }}
            onClick={togglePlay}
          >
            <video 
              ref={videoRef}
              src={`${import.meta.env.BASE_URL}skyban-bg-full.mp4`} 
              poster={`${import.meta.env.BASE_URL}premium_shingle_roof.png`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {!isPlaying && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', transition: 'all 0.3s' }}>
                  <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid white', marginLeft: '6px' }} />
                </div>
              </div>
            )}
          </div>

          {/* About Text & Stats */}
          <div>
            <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '11px', color: '#cfa25d', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>ABOUT SKYBAN</p>
            <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '48px', lineHeight: 1.1, color: 'white', marginBottom: '24px' }}>
              Building Roofs.<br/>Building <span style={{ color: '#cfa25d' }}>Trust.</span>
            </h2>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '48px', maxWidth: '500px' }}>
              Skyban Roofing Systems is committed to delivering innovative, long-lasting and aesthetically superior roofing and gutter solutions. With advanced technology and strict quality standards, we ensure every roof we build stands tall for generations.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {[
                { val: '10+', label: 'Years of Excellence', icon: '🏢' },
                { val: '1000+', label: 'Projects Completed', icon: '📋' },
                { val: '500+', label: 'Happy Customers', icon: '🤝' },
                { val: '100%', label: 'Quality Assurance', icon: '⭐' }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ color: '#cfa25d', fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
                  <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '28px', color: '#cfa25d', marginBottom: '4px' }}>{stat.val}</div>
                  <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Why Choose Skyban ───────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '100px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '60px' }}>
            <div>
              <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '11px', color: '#cfa25d', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>WHY CHOOSE SKYBAN</p>
              <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '42px', lineHeight: 1.1, color: '#0a0a0a' }}>
                Engineered for <span style={{ color: '#cfa25d' }}>Strength.</span><br/>Designed for <span style={{ color: '#cfa25d' }}>Beauty.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.6, maxWidth: '500px' }}>
                We combine advanced technology with premium materials to deliver roofing solutions that enhance the beauty and value of your property.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {[
              { icon: '🛡️', title: 'Superior Durability', desc: 'Built to withstand harsh weather and time.' },
              { icon: '⚖️', title: 'Lightweight & Strong', desc: 'Easy to install, strong enough to last.' },
              { icon: '🌡️', title: 'Heat & Sound Insulation', desc: 'Keep your home cooler and quieter.' },
              { icon: '✨', title: 'Low Maintenance', desc: 'Long-lasting performance with minimal care.' },
            ].map((feature, i) => (
              <div key={i}>
                <div style={{ fontSize: '32px', filter: 'sepia(1) saturate(5) hue-rotate(5deg)', marginBottom: '16px' }}>{feature.icon}</div>
                <h4 style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '16px', color: '#0a0a0a', marginBottom: '8px' }}>{feature.title}</h4>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: '#555', lineHeight: 1.5 }}>{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '60px 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '36px', color: 'white', marginBottom: '8px' }}>Ready to elevate your roof?</h2>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}>Get expert advice and the best roofing solution for your home or project.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            style={{
              background: '#cfa25d', color: '#0a0a0a', border: 'none',
              padding: '16px 36px', fontFamily: 'Inter', fontWeight: 700, fontSize: '13px',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px',
              transition: 'background 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e8c07a'}
            onMouseLeave={e => e.currentTarget.style.background = '#cfa25d'}
          >
            GET A FREE QUOTE <span>→</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default Features;
