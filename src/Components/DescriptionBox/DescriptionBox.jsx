import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav">Description</div>
        <div className="descriptionbox-nav-fade">Reviews (122)</div>
      </div>
      
      <div className="descriptionbox-description">
        <p>
        An e-commerce website is an online platform that facilitates the buying and selling of products of services over the internet, it serves as a virtual marketplace where businesses and individuais can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. 
        </p>
        <p>
        E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g, sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
