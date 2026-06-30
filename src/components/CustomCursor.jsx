import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for smooth lagging follower effect
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHover = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .cursor-pointer');
      
      const onMouseEnter = () => setIsHovered(true);
      const onMouseLeave = () => setIsHovered(false);

      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });

      return () => {
        hoverables.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseEnter);
          el.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial check and set up observer for dynamic elements
    const cleanupHover = checkHover();
    const observer = new MutationObserver(checkHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cleanupHover();
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '-25%',
          translateY: '-25%',
        }}
        animate={{
          scale: isHovered ? 1.8 : isClicking ? 0.8 : 1,
          backgroundColor: isHovered ? "rgba(197, 168, 128, 0.2)" : "rgba(197, 168, 128, 0)",
          borderColor: isHovered ? "#C5A880" : "#C5A880",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '30%',
          translateY: '30%',
        }}
        animate={{
          scale: isHovered ? 0.5 : isClicking ? 1.5 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
