import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;   // start off-screen
    let ringX  = -100, ringY  = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // dot follows instantly
      dot.style.left = `${mouseX}px`;
      dot.style.top  = `${mouseY}px`;
    };

    // ring follows with a smooth lag via rAF
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = `${ringX}px`;
      ring.style.top  = `${ringY}px`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    // hover effect on interactive elements
    const HOVER_SELECTOR = 'a, button, [role="button"], input, label, select, textarea, [tabindex]';

    const onEnter = () => {
      dot.classList.add('hovering');
      ring.classList.add('hovering');
    };
    const onLeave = () => {
      dot.classList.remove('hovering');
      ring.classList.remove('hovering');
    };

    // Use event delegation on document
    const onOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) onEnter();
      else onLeave();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onOver);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="custom-cursor" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
