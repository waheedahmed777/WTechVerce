'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    // gsap.from('.header .logo img', {
    //   y: 350,
    //   x: 1300,
    //   scale: 2.5,
    //   // duration: 0,
    //   scrollTrigger: {
    //     trigger: '.header .logo img',
    //     scrub: 4,
    //   },
    // });
  }, []);

  return (
    <>
      <div className='header'>
        <div className='logo'>
          <img src='/coberto.svg' alt='logo' />
        </div>

        <div className='menu'>
          <a href=''>Services</a>
          <a href=''>Project</a>
          <a href=''>Company</a>
          <a href=''>Blogs</a>
          <a href=''>Contact</a>
        </div>
      </div>
    </>
  );
}
