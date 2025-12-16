'use client';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SmoothScrollWrapper from './Components/SmoothScrollWrapper';

import './globals.css';
export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.hero .cursor-video', {
      width: '100%',
      duration: 0.3,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 4,
      },
    });
  }, []);

  return (
    <SmoothScrollWrapper>
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
          className='cursor-video'
        ></video>

        <div className='secondsection'>
          <div className='top-left'>
            <video
              className='bubble-video'
              src='/bubble-rotation.mp4'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className='right'>
            <h5>
              Since 2010, we have been helping our clients find exceptional solutions for their
              businesses, creating memorable websites and digital products.
            </h5>
            <h5>
              Cuberto doesn't do cookie-cutter solutions and we build products exactly as they were
              during the design phase, no short cuts or simplifications.
            </h5>
          </div>
        </div>
      </div>

      <div className='blogsection'>
        <h1>Featured projects</h1>
        <div className='gallery'>
          <div className='left'>
            <div className='card1'>
              <video className='new-cursor' src='/card1.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
            <div className='card2'>
              <video className='new-cursor' src='/card2.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
            <div className='card3'>
              <video className='new-cursor' src='/card3.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
            <div className='card4'>
              <video className='new-cursor' src='/card4.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
            <div className='card5'>
              <video className='new-cursor' src='/card5.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
            <div className='card6'>
              <video className='new-cursor' src='/card6.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
          </div>
          <div className='right'>
            <div className='card7'>
              <video className='new-cursor' src='/card7.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
            <div className='card8'>
              <video className='new-cursor' src='/card8.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
            <div className='card9'>
              <video className='new-cursor' src='/card9.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
            <div className='card10'>
              <video className='new-cursor' src='/card10.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
            <div className='card11'>
              <video className='new-cursor' src='/card11.mp4' muted loop />
              <h1>
                <b>Punato pago</b>-The First App in
              </h1>
              <p>America Notic</p>
            </div>
          </div>
        </div>
      </div>
    </SmoothScrollWrapper>
  );
}
