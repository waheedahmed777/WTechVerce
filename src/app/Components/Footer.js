'use client';

import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      {/* Background Video */}
      <video className='footer-video' autoPlay loop muted playsInline>
        <source src='/footer video.mp4' type='video/mp4' />
      </video>

      {/* Overlay content */}
      <div className='footer-content'>
        <h2>
          Have an <br /> Idea?{' '}
        </h2>
        <button>TELL US</button>
      </div>
    </footer>
  );
}
