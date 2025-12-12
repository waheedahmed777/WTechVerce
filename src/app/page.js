'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SmoothScrollWrapper from './Components/SmoothScrollWrapper';

import './globals.css';
export default function Home() {
  useEffect(() => {
    gsap.to('.hero .firstVideo', {
      width: '100%',
      duration: 1,
      scrollTrigger: {
        start: 'top10%',
        end: 'bottom bottom',
        scrub: 4,
      },
    });

    var main = document.querySelector('.main');
    var cursor = document.querySelector('.cursor');
    main.addEventListener('mousemove', function (dets) {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
      });
    });
  }, []);
  return (
    <SmoothScrollWrapper>
      <div className='main'>
        <div className='hero'>
          <h1>
            Design agency focused <br />
            on AI-driven products
          </h1>
          <h6>
            Cuberto is a digital design and technology partner focused on smart <br />
            interactions, delightful UX, and cutting-edge AI solutions.
          </h6>
          <video
            src='/first_video_coberto.mp4'
            autoPlay
            loop
            muted
            playsInline
            className='firstVideo'
          ></video>
        </div>
        <div
          style={{ height: '20px', width: '20px', borderRadius: '50%', backgroundColor: 'black' }}
          className='cursor'
        ></div>
      </div>
    </SmoothScrollWrapper>
  );
}
