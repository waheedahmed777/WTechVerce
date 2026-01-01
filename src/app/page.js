'use client';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lottie from 'lottie-react';
import { gsap } from 'gsap';
import Animatedscg from './lottie/vision.json';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SmoothScrollWrapper from './Components/SmoothScrollWrapper';
import AnimatedSVG from './Components/linesvg';
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

    gsap.to('.blogsection', {
      y: '-400px',
      duration: 0.1,
      scrollTrigger: {
        trigger: '.hero',
        start: 'bottom bottom',
        end: 'bottom bottom',
        scrub: 4,
      },
    });

    const videos = document.querySelectorAll('.new-cursor');

    videos.forEach((video) => {
      video.addEventListener('mouseenter', () => {
        video.play();
      });

      video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });

    gsap.from('h1 span', {
      y: 500,
      opacity: 0,
      duration: 4,
      delay: 0.5,
      rotationZ: 10,
      ease: 'power4.out',
      stagger: 0.15,
    });
    var string = document.querySelector('.string');
    var path = 'M 10 100 Q 500 100 990 100';
    var finalpath = 'M 10 100 Q 500 100 990 100';

    string.addEventListener('mousemove', function (dets) {
      const path = `M 10 100 Q 500 ${dets.offsetY} 990 100`;
      gsap.to('svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out',
      });
    });

    // mouse leave ko alag listener me rakho
    string.addEventListener('mouseleave', function () {
      gsap.to('svg path ', {
        attr: { d: finalpath },
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)', // amplitude=1, period=0.3
      });
    });
  }, []);

  return (
    <SmoothScrollWrapper>
      <>
        <div className='hero'>
          <h1>
            <span>Design</span>
            <span>agency</span>
            <span>focused</span>

            <br />
            <span>on</span>
            <span> AI-driven </span>
            <span> products </span>
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
                Cuberto doesn't do cookie-cutter solutions and we build products exactly as they
                were during the design phase, no short cuts or simplifications.
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
        <div className='solutions'>
          <h1>Our Solutions</h1>
          <AnimatedSVG height={200} />
          <div className='firstsection'>
            <div className='a1'>
              <h6>Websites and platforms</h6>
            </div>
            <div className='a2'>
              <h4>
                In our team, developers work alongside <br /> designers. This is crucial in creating
                a <br /> fast and responsive website that would <br /> excite the audience.
              </h4>
              <button className='buttons'>Read More</button>
            </div>
          </div>
          <AnimatedSVG height={300} />
          <div className='firstsection'>
            <div className='a1'>
              <h6>Mobile Applications</h6>
            </div>
            <div className='a2'>
              <h4>
                Cuberto doesn't do cookie-cutter <br /> solutions. Every mobile app involves <br />{' '}
                stages of target audience research and <br /> prototype testing. The result? A
                product <br /> that’s perfectly suited to your users.
              </h4>
              <button className='buttons'>Read More</button>
            </div>
          </div>
          <AnimatedSVG height={300} />{' '}
          <div className='firstsection'>
            <div className='a1'>
              <h6>Stratgery And Branding</h6>
            </div>
            <div className='a2'>
              <h4>
                We identify your brand by developing a <br /> logo, corporate identity, user
                manuals, <br /> any mockups, and souvenir products. <br /> Whatever it takes to get
                your brand <br /> noticed.
              </h4>
              <button className='buttons'>Read More</button>
            </div>
          </div>
        </div>
      </>
    </SmoothScrollWrapper>
  );
}
