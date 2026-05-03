import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Michael T.', location: 'Sydney, Australia', rating: 5, text: 'Skyban transformed our home. The Shake Collection looks absolutely stunning and the installation crew was incredibly professional. 10/10 would recommend to anyone.' },
  { name: 'Anita R.', location: 'Kuala Lumpur, Malaysia', rating: 5, text: 'After two typhoon seasons, not a single leak. The warranty and the quality are unmatched. Our neighbours have already started asking for the contact number!' },
  { name: 'Carlos M.', location: 'Manila, Philippines', rating: 5, text: 'We chose the Classic Collection in Graphite and it elevated our entire property. The Skyban team handled everything from design to clean-up. Very impressed.' },
  { name: 'Fatima A.', location: 'Dubai, UAE', rating: 5, text: 'The UV and heat resistance is phenomenal — essential in our climate. Skyban delivered exactly what they promised, on time and within budget.' },
  { name: 'James W.', location: 'Auckland, New Zealand', rating: 5, text: 'The Bond Collection gives our modern home a sleek, minimalist look. The team walked us through every option and never pressured us. Exceptional service.' },
  { name: 'Siti N.', location: 'Jakarta, Indonesia', rating: 5, text: 'After the floods in 2023, we decided to upgrade. Best decision we ever made. The roof handled this year\'s rainy season like a dream.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export default function ReviewsPage() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section style={{ padding: '80px 24px 60px', textAlign: 'center' }}>
        <motion.div {...fadeUp()}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '4px', color: '#cfa25d', textTransform: 'uppercase', marginBottom: '16px' }}>Customer Stories</p>
          <h1 style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: 'clamp(36px,6vw,72px)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
            Trusted by<br />Homeowners Worldwide
          </h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '18px', color: 'rgba(255,255,255,0.75)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            Over 10,000 families trust Skyban to protect their most valuable asset.
          </p>
        </motion.div>

        {/* Summary stats */}
        <motion.div {...fadeUp(0.2)} style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '48px' }}>
          {[{ val: '4.9/5', label: 'Average Rating' }, { val: '10K+', label: 'Happy Customers' }, { val: '12', label: 'Countries' }].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display', fontWeight: 700, fontSize: '36px', color: '#cfa25d' }}>{s.val}</div>
              <div style={{ fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(207,162,93,0.4),transparent)', maxWidth: '800px', margin: '0 auto' }} />

      <section style={{ padding: '60px 24px 100px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px' }}>
          {reviews.map((r, i) => (
            <motion.div key={i} {...fadeUp(i * 0.07)}
              style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', border: '1px solid rgba(207,162,93,0.12)', borderRadius: '16px', padding: '32px 28px' }}
              whileHover={{ y: -4, borderColor: 'rgba(207,162,93,0.3)' }}
              transition={{ duration: 0.2 }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {Array.from({ length: r.rating }).map((_, si) => (
                  <span key={si} style={{ color: '#cfa25d', fontSize: '14px' }}>★</span>
                ))}
              </div>
              <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: '24px', fontStyle: 'italic' }}>"{r.text}"</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <p style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '14px', color: 'white' }}>{r.name}</p>
                <p style={{ fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '3px' }}>{r.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
