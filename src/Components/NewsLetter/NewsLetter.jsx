import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <h6>Subscribe to our newsletter and stay updated</h6>
      <div className="input">
      <input type="email" placeholder='Your Email id'/>
      <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
