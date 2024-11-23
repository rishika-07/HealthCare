import React from "react";
import Navbar from "./Navbar";
import headerImage from "../Images/headerImage.png";
import { TypeAnimation } from 'react-type-animation';
import DashboardForm from "./DashboardForm";
import medicineIllustration from "../Images/medicineIllustration.png";
import Footer from "./Footer";  
import { animateScroll as scroll } from 'react-scroll';


import "./Home.css";

const scrollTo = () => {
  scroll.scrollTo(600); 
};
const Home = () => {
    return (
      <div>
        <Navbar />
        <div className="main-container">
          <div className="hero-container">
            <div className="hero-content">
              <TypeAnimation
              sequence={[
                'Improve outcomes, cut treatment delays, effortlessly deliver care.'

              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '3.5rem', display: 'inline-block', fontWeight: '800', lineHeight: 1, paddingTop: '30px' ,}}
              repeat={Infinity}/>

              <p>
              Provide secure and accurate health insights for patients, doctors, and care teams. Manage data across formats, streamline workflows, and save lives daily.
              </p>              
              <button onClick={scrollTo}>Get Started</button>
            </div>
          
            <div className="hero-image">
              <img src={headerImage} alt="hero" className="hero_img width:10px" />
            </div>
            <div className="middle-container-main">
            <div><img src={medicineIllustration} alt="hero" className="formImage"/>
           </div>
           </div>
           <div><DashboardForm /></div>
          </div>
          <div><Footer /></div>
          </div>
        </div>

      
    );
  };

  export default Home;