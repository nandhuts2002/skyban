import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '10K+', label: 'Homes Protected' },
  { value: '190kph', label: 'Wind Resistance' },
  { value: '100%', label: 'Waterproof Guarantee' },
];

const products = [
  {
    id: 'shake',
    title: 'Shake Collection',
    subtitle: 'TRADITIONAL',
    description: 'The rustic charm of wood-grain shake with deep-ribbed profiles designed to enhance shadow lines and visual contrast.',
    image: `${import.meta.env.BASE_URL}premium_shake_roof.png`,
    colors: ['Ashwood', 'Brown Bark', 'Cedar', 'Charcoal'],
  },
  {
    id: 'classic',
    title: 'Classic Collection',
    subtitle: 'TIMELESS',
    description: 'Make a statement with strong, bold lines. Smooth flowing curves for a timeless appeal that never goes out of style.',
    image: `${import.meta.env.BASE_URL}premium_classic_roof.png`,
    colors: ['Slate Blue', 'Midnight', 'Graphite', 'Walnut'],
  },
  {
    id: 'bond',
    title: 'Bond Collection',
    subtitle: 'MODERN',
    description: 'Low-profile interlocking tile system perfect for contemporary architecture and flat-facade commercial builds.',
    image: `${import.meta.env.BASE_URL}premium_bond_roof.png`,
    colors: ['Pearl White', 'Terracotta', 'Obsidian', 'Sand'],
  },
  {
    id: 'shingle',
    title: 'Shingle Collection',
    subtitle: 'ELEGANT',
    description: 'Replicating the look of dimensional asphalt shingles but constructed from high-tensile stone-coated steel.',
    image: `${import.meta.env.BASE_URL}premium_shingle_roof.png`,
    colors: ['Bark', 'Charcoal', 'Forest', 'Autumn'],
  },
  {
    id: 'roman',
    title: 'Roman Collection',
    subtitle: 'MEDITERRANEAN',
    description: 'The distinctive curve of authentic Mediterranean clay tiles, but much lighter and completely storm-proof.',
    image: `${import.meta.env.BASE_URL}premium_roman_roof.png`,
    colors: ['Terracotta', 'Sand', 'Tuscany', 'Rustic'],
  },
];

const Features = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Stats Bar */}
      <section style={{ background: '#1f314a', padding: '48px 0', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div style={{ fontFamily: 'Playfair Display', fontSize: '42px', fontWeight: 700, color: '#cfa25d', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '8px' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" style={{ background: '#2b4365', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Our Premium Collections</p>
            <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 60px)', color: 'white', marginBottom: '20px' }}>Masterpieces in Steel</h2>
            <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              100% waterproof, earthquake safe, fire resistant, and able to withstand hurricane-force winds.
            </p>
          </motion.div>

          {/* Product Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '32px' }}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/3', cursor: 'pointer' }}
                className="product-card"
                whileHover={{ y: -8 }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.7s ease',
                  }}
                  className="product-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
                  }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '36px', width: '100%' }}>
                  <p style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 600, letterSpacing: '3px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '8px' }}>{product.subtitle}</p>
                  <h3 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '28px', color: 'white', marginBottom: '12px' }}>{product.title}</h3>
                  <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '20px' }}>{product.description}</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        style={{
                          background: 'rgba(255,255,255,0.12)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '9999px',
                          padding: '4px 14px',
                          fontFamily: 'Inter',
                          fontSize: '11px',
                          color: 'rgba(255,255,255,0.8)',
                        }}
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Skyban Section */}
      <section id="about" style={{ background: '#1f314a', padding: '120px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Why Choose Skyban</p>
            <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(30px, 4vw, 50px)', color: 'white', marginBottom: '24px', lineHeight: 1.15 }}>
              Built for the World's Harshest Environments
            </h2>
            <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: '36px' }}>
              Skyban's stone-coated steel roofing systems are ISO 9001 accredited and backed by international test reports confirming 100% waterproof performance, earthquake safety, and fire resistance.
            </p>
            {[
              { icon: '🛡️', text: 'Fire Resistant & Earthquake Safe' },
              { icon: '💧', text: '100% Waterproof Guarantee' },
              { icon: '🌪️', text: 'Withstands 190kph Hurricane Winds' },
              { icon: '⚡', text: 'Energy Efficient & UV Resistant' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}
              >
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <span style={{ fontFamily: 'Inter', fontSize: '15px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{item.text}</span>
              </motion.div>
            ))}
            <button
              style={{
                marginTop: '16px',
                background: 'transparent',
                color: '#cfa25d',
                border: '1.5px solid #cfa25d',
                borderRadius: '9999px',
                padding: '14px 32px',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#cfa25d'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#cfa25d'; }}
            >
              Learn More →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: 'spring' }}
            style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
            whileHover={{ y: -10 }}
          >
            <motion.img 
              src={`${import.meta.env.BASE_URL}roofing_durability.png`}
              alt="Skyban Roofing Quality" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
            />
            {/* Overlay gradient for premium feel */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)' }} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" style={{
        background: 'linear-gradient(135deg, #cfa25d 0%, #b88c4b 100%)',
        padding: '100px 24px',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(32px, 5vw, 56px)', color: 'white', marginBottom: '20px' }}>Ready to Protect Your Home?</h2>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
            Get a free roofing sample from our experts today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: 'white',
                color: '#cfa25d',
                border: 'none',
                borderRadius: '9999px',
                padding: '18px 44px',
                fontFamily: 'Inter',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.25s',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)'; }}
            >
              Request a Sample
            </button>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.7)',
                borderRadius: '9999px',
                padding: '18px 44px',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Features;
