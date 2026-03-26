import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;
    let raf;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animateCursor = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${curX - 20}px, ${curY - 20}px)`;
      }
      raf = requestAnimationFrame(animateCursor);
    };

    const addHover = (e) => {
      const target = e.target;
      if (
        target.matches('a, button, [role="button"], input, textarea, select, label, [tabindex]')
      ) {
        setIsHovering(true);
      }
    };

    const removeHover = (e) => {
      const target = e.target;
      if (
        target.matches('a, button, [role="button"], input, textarea, select, label, [tabindex]')
      ) {
        setIsHovering(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', addHover);
    window.addEventListener('mouseout', removeHover);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    raf = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', addHover);
      window.removeEventListener('mouseout', removeHover);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Large trailing ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: `2px solid ${isHovering ? 'var(--theme-pink)' : 'var(--theme-orange)'}`,
            background: isHovering
              ? 'rgba(250,203,230,0.12)'
              : 'rgba(252,220,164,0.08)',
            transform: isClicking ? 'scale(0.75)' : isHovering ? 'scale(1.4)' : 'scale(1)',
            transition: 'transform 0.2s ease, border-color 0.3s ease, background 0.3s ease',
            boxShadow: isHovering
              ? '0 0 16px 4px rgba(250,203,230,0.35)'
              : '0 0 10px 2px rgba(252,220,164,0.2)',
          }}
        />
      </div>

      {/* Small instant dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: isHovering ? 'var(--theme-pink)' : 'var(--theme-orange)',
            transform: isClicking ? 'scale(0.5)' : 'scale(1)',
            transition: 'background 0.3s ease, transform 0.15s ease',
            boxShadow: isHovering
              ? '0 0 8px 2px rgba(250,203,230,0.7)'
              : '0 0 6px 2px rgba(252,220,164,0.5)',
          }}
        />
      </div>
    </>
  );
}
