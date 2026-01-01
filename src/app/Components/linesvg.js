'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedSVG() {
  const stringRef = useRef(null);

  useEffect(() => {
    const string = stringRef.current;
    if (!string) return; // ye ensure karega ki element exist kare

    const finalpath = 'M 10 100 Q 500 100 990 100';

    const mouseMoveHandler = (dets) => {
      const path = `M 10 100 Q 500 ${dets.offsetY} 990 100`;
      gsap.to('svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const mouseLeaveHandler = () => {
      gsap.to('svg path', {
        attr: { d: finalpath },
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    string.addEventListener('mousemove', mouseMoveHandler);
    string.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      // cleanup
      string.removeEventListener('mousemove', mouseMoveHandler);
      string.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  return (
    <div ref={stringRef} className='string'>
      <svg width='100%' height='200px'>
        <path d='M 10 100 Q 500 100 990 100' stroke='black' fill='transparent' />
      </svg>
    </div>
  );
}
