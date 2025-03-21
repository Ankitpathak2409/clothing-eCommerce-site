import React from 'react';
import './Breadcrums.css';
import breadcrum_arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
      HOME <img src={breadcrum_arrow_icon} alt="" /> SHOP <img src= {breadcrum_arrow_icon} alt="" /> {product.category} <img src= {breadcrum_arrow_icon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrums;
