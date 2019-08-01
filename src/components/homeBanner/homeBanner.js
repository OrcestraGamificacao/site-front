import React from 'react';
import './homeBanner.css';
import SocialMediaButtons from '../socialMediaButtons/socialMediaButtons';

function HomeBanner() {
    const logo=require('../../assets/images/Orc_estra_Logo1_horizontalEXP2.svg')
  return (
    <div className="home-banner">
      <SocialMediaButtons></SocialMediaButtons>
      <img className="home-logo" src={logo}/>
    </div>
  );
}
export default HomeBanner