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
    <div className="bg-[#f5f5f5] text-[#0a0a0a] pt-12 md:pt-24">
      
      {/* ── Products Section ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-16 md:py-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Text Block */}
          <div className="lg:w-1/3">
            <p className="font-inter font-semibold text-[11px] text-[#cfa25d] tracking-[2px] uppercase mb-4">OUR PRODUCTS</p>
            <h2 className="font-[Playfair_Display] font-bold text-4xl md:text-5xl leading-tight text-[#0a0a0a] mb-6">
              Roofing & Gutter Solutions Designed for <span className="text-[#cfa25d]">Excellence</span>
            </h2>
            <p className="font-inter font-normal text-[15px] text-[#555] leading-relaxed mb-10">
              High performance roofing tiles and uPVC rain gutters that combine strength, style and long lasting protection.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="bg-[#0a0a0a] text-white border-none py-4 px-8 font-inter font-semibold text-[12px] cursor-pointer flex items-center justify-center gap-3 transition-colors hover:bg-[#222]"
            >
              VIEW ALL PRODUCTS <span>→</span>
            </button>
          </div>

          {/* Right Product Cards */}
          <div className="lg:w-2/3 flex gap-6 overflow-x-auto pb-6 snap-x">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white min-w-[300px] md:min-w-[340px] rounded-sm overflow-hidden shadow-xl shadow-black/5 snap-center shrink-0">
                <div className="h-[200px] overflow-hidden relative">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#cfa25d] rounded-full flex items-center justify-center text-white border-4 border-white">
                    🏠
                  </div>
                </div>
                <div className="p-8 pt-10">
                  <h3 className="font-[Playfair_Display] font-bold text-xl text-[#0a0a0a] mb-4 uppercase">
                    {product.title}
                  </h3>
                  <ul className="list-none p-0 m-0 mb-6">
                    {product.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 mb-2 font-inter text-[13px] text-[#555]">
                        <span className="text-[#cfa25d] text-[14px]">✔</span> {bullet}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(`/products#${product.id}`)}
                    className="bg-transparent border-none text-[#cfa25d] font-inter font-semibold text-[12px] cursor-pointer flex items-center gap-2"
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
      <section className="bg-[#0a0a0a] text-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Real Video Player */}
          <div 
            className="relative rounded-sm overflow-hidden aspect-video cursor-pointer"
            onClick={togglePlay}
          >
            <video 
              ref={videoRef}
              src={`${import.meta.env.BASE_URL}skyban-bg-full.mp4`} 
              poster={`${import.meta.env.BASE_URL}premium_shingle_roof.png`}
              className="w-full h-full object-cover"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1 md:border-t-[12px] md:border-b-[12px] md:border-l-[20px] md:ml-2" />
                </div>
              </div>
            )}
          </div>

          {/* About Text & Stats */}
          <div>
            <p className="font-inter font-semibold text-[11px] text-[#cfa25d] tracking-[2px] uppercase mb-4">ABOUT SKYBAN</p>
            <h2 className="font-[Playfair_Display] font-bold text-4xl md:text-5xl leading-tight text-white mb-6">
              Building Roofs.<br/>Building <span className="text-[#cfa25d]">Trust.</span>
            </h2>
            <p className="font-inter font-normal text-[15px] text-white/70 leading-relaxed mb-10 max-w-[500px]">
              Skyban Roofing Systems is committed to delivering innovative, long-lasting and aesthetically superior roofing and gutter solutions. With advanced technology and strict quality standards, we ensure every roof we build stands tall for generations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {[
                { val: '10+', label: 'Years of Excellence', icon: '🏢' },
                { val: '1000+', label: 'Projects Completed', icon: '📋' },
                { val: '500+', label: 'Happy Customers', icon: '🤝' },
                { val: '100%', label: 'Quality Assurance', icon: '⭐' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-[#cfa25d] text-2xl mb-2">{stat.icon}</div>
                  <div className="font-[Playfair_Display] font-bold text-3xl text-[#cfa25d] mb-1">{stat.val}</div>
                  <div className="font-inter font-normal text-[11px] text-white/50 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Why Choose Skyban ───────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-16">
            <div>
              <p className="font-inter font-semibold text-[11px] text-[#cfa25d] tracking-[2px] uppercase mb-4">WHY CHOOSE SKYBAN</p>
              <h2 className="font-[Playfair_Display] font-bold text-4xl md:text-5xl leading-tight text-[#0a0a0a]">
                Engineered for <span className="text-[#cfa25d]">Strength.</span><br/>Designed for <span className="text-[#cfa25d]">Beauty.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="font-inter font-normal text-[15px] text-[#555] leading-relaxed max-w-[500px]">
                We combine advanced technology with premium materials to deliver roofing solutions that enhance the beauty and value of your property.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { icon: '🛡️', title: 'Superior Durability', desc: 'Built to withstand harsh weather and time.' },
              { icon: '⚖️', title: 'Lightweight & Strong', desc: 'Easy to install, strong enough to last.' },
              { icon: '🌡️', title: 'Heat & Sound Insulation', desc: 'Keep your home cooler and quieter.' },
              { icon: '✨', title: 'Low Maintenance', desc: 'Long-lasting performance with minimal care.' },
            ].map((feature, i) => (
              <div key={i}>
                <div className="text-3xl mb-4" style={{filter: 'sepia(1) saturate(5) hue-rotate(5deg)'}}>{feature.icon}</div>
                <h4 className="font-inter font-bold text-[16px] text-[#0a0a0a] mb-2">{feature.title}</h4>
                <p className="font-inter font-normal text-[13px] text-[#555] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-t border-white/10 px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="font-[Playfair_Display] font-bold text-3xl md:text-4xl text-white mb-2">Ready to elevate your roof?</h2>
            <p className="font-inter font-normal text-[15px] text-white/60">Get expert advice and the best roofing solution for your home or project.</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#cfa25d] text-[#0a0a0a] border-none py-4 px-8 font-inter font-bold text-[13px] cursor-pointer flex items-center gap-3 transition-colors hover:bg-[#e8c07a] shrink-0"
          >
            GET A FREE QUOTE <span>→</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default Features;
