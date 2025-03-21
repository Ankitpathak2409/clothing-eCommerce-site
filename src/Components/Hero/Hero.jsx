"use client"
import React from 'react';
import './Hero.css';
import hero_hand_icon from '../Assets/hero_hand_icon.png';
import right_arrow from '../Assets/right_arrow.png';
import hero_image from '../Assets/hero_image.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
         <h3>NEW ARRIVALS ONLY</h3>
      <div>

      <div className="hero-hand-icon">
        <p>new</p>
        <img src={hero_hand_icon} alt="waving_hand" />
        </div>
        <div>
        <p>collections </p>
        <p>for everyone</p>
        </div>
      </div>

      <div  className="hero-latest-button">
      <button> Latest Collection </button>
      <img src= {right_arrow} alt="" />
      </div>
      </div>

      <div className="hero-right">
         <img src= {hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
