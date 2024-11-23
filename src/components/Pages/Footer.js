import React from "react";
import "./Footer.css";

import {FaTwitter} from 'react-icons/fa';
import {BiLogoLinkedinSquare} from 'react-icons/bi';
import {FaYoutube} from 'react-icons/fa';

function Footer() {
    return (
        <div className="FooterContainer">
            
            <div className="FooterContent">
                   <div className="logoContentLeft">
                     <h1>Healthcare</h1>
                      <FaTwitter size={30} color="#45a049"/>
                      <span><BiLogoLinkedinSquare size={30}  color="#45a049"/></span>
                      <span><FaYoutube size={30}  color="#45a049"/></span>
                   </div>

                   <div className="logoContentright">

                      <div className="logoContentRightGrid">
                              <div className="products">
                              <h2>Products</h2>
                                   <ul>
                                    <li>Free Checkups</li>
                                    <li>Pro Checkups</li>
                                   </ul>
                             </div>
                              
                              <div className="Company">
                              <h2>Company</h2>
                                   <ul>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms of Use</li>
                                   </ul>
                              </div>
                      

                     </div>

                  </div>
            </div>

        </div>
    );
}
export default Footer;