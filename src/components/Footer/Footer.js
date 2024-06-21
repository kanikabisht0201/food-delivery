import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets'; // Assuming assets is correctly imported

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="FreshEats Logo" />
          <p>
FreshEats offers a delightful culinary experience with a focus on fresh, quality ingredients. From tantalizing dishes to impeccable service, it promises a memorable dining journey. Emphasizing health and flavor, FreshEats caters to diverse palates, ensuring every visit is a savory adventure with a commitment to excellence in taste and presentation</p>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right"> {/* Corrected placement of div */}
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>567-876-876</li>
            <li>fresheats@gmail.com</li>
          </ul>
        </div>
      </div>

      <p className='footer-copyright'>© 2024 FreshEats. All rights reserved.</p>
    </div>
  );
}
