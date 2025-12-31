'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import './cursor.css';
export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorText = document.querySelector('.custom-cursor-text');

    if (!cursor || !cursorText) return;

    // MOVE CURSOR
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // IMAGE HOVER EFFECT
    document.querySelectorAll('.cursor-image').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorText.textContent = 'Explore';
        gsap.to(cursor, { scale: 5, duration: 0.2 });
        gsap.to(cursorText, { opacity: 1, scale: 1 });
      });

      el.addEventListener('mouseleave', () => {
        cursorText.textContent = '';
        gsap.to(cursor, { scale: 5, duration: 0.2 });
        gsap.to(cursorText, { opacity: 0 });
      });
    });

    // VIDEO HOVER EFFECT
    document.querySelectorAll('.cursor-video').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorText.textContent = '▶';
        gsap.to(cursor, { scale: 5, duration: 0.2 });
        gsap.to(cursorText, { opacity: 1 });
      });

      el.addEventListener('mouseleave', () => {
        cursorText.textContent = '';
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(cursorText, { opacity: 0 });
      });
    });

    // new code for cursor behavior

    document.querySelectorAll('.new-cursor').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorText.textContent = 'Explore';
        gsap.to(cursor, { scale: 5, duration: 0.2 });
        gsap.to(cursorText, { opacity: 1 });
      });
      let name = 'nexuess';

      el.addEventListener('mouseleave', () => {
        cursorText.textContent = '';
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(cursorText, { opacity: 0 });
      });
    });

    // new code behaviour

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className='custom-cursor'>
      <span className='custom-cursor-text'></span>
    </div>
  );
}
