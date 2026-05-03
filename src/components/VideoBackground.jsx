import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * VideoBackground
 * Renders the roofing MP4 as a fixed, full-screen background video
 * that parallax-scrolls with the page.  Three overlay layers sit on
 * top to ensure all text/UI above it stays fully legible.
 */
const VideoBackground = () => {
  const { scrollY } = useScroll();

  // Subtle parallax — the video drifts slightly slower than the page
  const videoY = useTransform(scrollY, [0, 1200], [0, 180]);

  return (
    <>
      {/* ── Fixed video wrapper ─────────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-10%',        // oversized so parallax crop never shows gaps
          left: 0,
          width: '100%',
          height: '120%',
          zIndex: 0,
          pointerEvents: 'none',
          y: videoY,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        >
          <source src={`${import.meta.env.BASE_URL}roofing-bg.mp4`} type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Overlay stack (fixed, same z-index tier) ────────────── */}

      {/* 1. Primary dark veil — makes everything readable */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(170deg, rgba(8,16,30,0.70) 0%, rgba(8,16,30,0.45) 50%, rgba(8,16,30,0.78) 100%)',
        }}
      />

      {/* 2. Gold radial accent — brand warmth at top-right */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 75% 20%, rgba(207,162,93,0.10) 0%, transparent 70%)',
        }}
      />

      {/* 3. Bottom vignette — grounds the page into the footer */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(8,14,26,0.90) 0%, transparent 40%)',
        }}
      />
    </>
  );
};

export default VideoBackground;
