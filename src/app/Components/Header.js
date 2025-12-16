'use client';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { ImCross } from 'react-icons/im';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to('.sidebar', {
      top: 0,
      duration: 0.8,
      ease: 'power3.out',
      onStart: () => {
        document.body.style.overflow = 'hidden'; // 🔥 scroll band
      },
    });

    tl.from('.sidebar h4', {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.5,
    });

    const bar = document.querySelector('.bars');
    const cross = document.querySelector('.cross');

    bar.addEventListener('click', () => {
      tl.play();
    });

    cross.addEventListener('click', () => {
      tl.reverse();
      document.body.style.overflow = 'auto';
    });
  }, []);

  return (
    <>
      <div className='header'>
        <img src='/coberto.svg' alt='' />
        <HiMiniBars3CenterLeft className='bars' />
      </div>
      <div className='sidebar'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Portfolio</h4>
        <h4>Contact </h4>
        <ImCross className='cross' />
      </div>
    </>
  );
}
