import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>FAISHON STORE</p>
      </div>

      <div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>

      <div className='footer-social-icons'>
        <img src={instagram_icon} alt="instagram" />
        <img src={pintester_icon} alt="pintester" />
        <img src={whatsapp_icon} alt="whatsapp" />
      </div>

      <div className='footer-copyright'>
        <p>Copyright @ 2025 - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
