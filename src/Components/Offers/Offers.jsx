import React from 'react';
import './Offers.css';
import offers_image from '../Assets/offers_image.png';

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
         <h2>Exclusive</h2>
         <h2>Offers For You</h2>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>

         <button className="offers-btn">Check Now</button>
      </div>
      
      <div className="offers-right">
         <img src={offers_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
