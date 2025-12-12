'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Return only children wrapper — NO <html> or <body> tags
  return <>{children}</>;
}
