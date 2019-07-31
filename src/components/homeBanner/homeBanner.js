import React from 'react';
import './homeBanner.css';

function HomeBanner() {
    const logo=require('../../assets/images/Orc_estra_Logo1_horizontalEXP2.svg')
  return (
    <div className="home-banner">
      <img className="home-logo" src={logo}/>
    </div>
  );
}
export default HomeBanner