import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='img' src='/space.jpg' width='100%' alt='space background'/>
        <h1 className='title'>StockStats</h1>
        <p className='info'>Money awaits</p>
      </div>
  );
}

export default HeroSection;