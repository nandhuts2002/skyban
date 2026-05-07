import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const collections = [
  {
    id: 'shingle', title: 'Shingle Collection', subtitle: 'PREMIUM', image: 'shake.png',
    tagline: 'Classic Elegance. Superior Protection.',
    desc: 'Inspired by traditional shingle roofing, this collection delivers the timeless look of slate with the unmatched durability of stone-coated steel and superior weather resistance.',
    colors: ['Charcoal Grey', 'Colonial Red', 'Antique Brown', 'Slate Black'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.0 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'shake', title: 'Shake Collection', subtitle: 'TRADITIONAL', image: 'shake.png',
    tagline: 'Rustic Charm. Modern Strength.',
    desc: 'Deep-ribbed profiles inspired by wood-grain shake with proprietary mineral stone-coat finish for lasting colour and weather resistance.',
    colors: ['Ashwood', 'Brown Bark', 'Cedar', 'Charcoal'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.5 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'classic', title: 'Classic Collection', subtitle: 'TIMELESS', image: 'classic.png',
    tagline: 'Bold Lines. Timeless Appeal.',
    desc: 'Strong, clean lines and smooth curves for a polished contemporary look with the full durability of stone-coated steel.',
    colors: ['Slate Blue', 'Midnight', 'Graphite', 'Walnut'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.2 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'bond', title: 'Bond Collection', subtitle: 'MODERN', image: 'shake.png',
    tagline: 'Minimal Profile. Maximum Strength.',
    desc: 'Low-profile interlocking tile system perfect for contemporary architecture and flat-facade commercial builds.',
    colors: ['Pearl White', 'Terracotta', 'Obsidian', 'Sand'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '200 kph' }, { label: 'Weight', value: '6.8 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
  {
    id: 'roman', title: 'Roman Collection', subtitle: 'ARCHITECTURAL', image: 'classic.png',
    tagline: 'Grand Curves. Enduring Legacy.',
    desc: 'Inspired by Roman clay tile, this collection features elegant barrel-shaped profiles that bring a Mediterranean grandeur to any home or commercial structure.',
    colors: ['Terracotta', 'Sand Beige', 'Rustic Brown', 'Ivory'],
    specs: [{ label: 'Material', value: 'Galvalume Steel' }, { label: 'Wind Rating', value: '190 kph' }, { label: 'Weight', value: '7.3 kg/m²' }, { label: 'Warranty', value: '50 Years' }],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export default function ProductsPage() {
  const [selected, setSelected] = useState(collections[0]);
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section style={{ padding: '80px 24px 60px', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Our Collections</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px,6vw,72px)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>Masterpieces<br />in Steel</h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>100% waterproof, earthquake safe, fire resistant, engineered to outlast the elements.</p>
        </motion.div>
      </section>

      <section style={{ padding: '0 24px 100px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
          {collections.map((col) => (
            <motion.button key={col.id} onClick={() => setSelected(col)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{ padding: '10px 28px', borderRadius: '9999px', fontFamily: 'Inter', fontWeight: 600, fontSize: '13px', cursor: 'pointer', border: selected.id === col.id ? '1.5px solid #cfa25d' : '1.5px solid rgba(255,255,255,0.15)', background: selected.id === col.id ? 'rgba(207,162,93,0.18)' : 'rgba(255,255,255,0.05)', color: selected.id === col.id ? '#cfa25d' : 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', transition: 'all 0.2s' }}>
              {col.title}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={selected.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.4 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: '48px', alignItems: 'center' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
              <img src={selected.image} alt={selected.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '11px', letterSpacing: '3px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '10px' }}>{selected.subtitle}</p>
              <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', color: 'white', marginBottom: '8px' }}>{selected.title}</h2>
              <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#cfa25d', marginBottom: '16px', fontStyle: 'italic' }}>{selected.tagline}</p>
              <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '24px' }}>{selected.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {selected.colors.map((c) => (
                  <span key={c} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '9999px', padding: '5px 16px', fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>{c}</span>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
                {selected.specs.map((s) => (
                  <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px 16px' }}>
                    <p style={{ fontFamily: 'Inter', fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '4px' }}>{s.label}</p>
                    <p style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 600, color: 'white' }}>{s.value}</p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
