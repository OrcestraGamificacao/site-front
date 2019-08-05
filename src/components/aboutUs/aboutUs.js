import React from 'react';
import './aboutUs.css';

const startSection = require('../../assets/images/section_begin_green_v2.svg')

function AboutUs() {

    return (
      <>
        <img src={startSection} alt="start section" style={{
            marginTop: '2em',
            marginBottom: '-4em'
        }}/>
        <div className="about-us">
          <div className="d-flex justify-content-around align-items-center">
            <div className="" id="about_us_tag">
              <h1 className="mb-0">SOBRE NÓS</h1>
            </div>
            <div id="about_us_content">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </>
    );


}
export default AboutUs