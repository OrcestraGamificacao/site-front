import React from 'react';
import './background.css';
import BackgroundImage from '../../assets/image/cave_background.svg'
import HomeBanner from '../homeBanner/homeBanner'
import SocialMediaButtons from '../socialMediaButtons/socialMediaButtons'

function Background(){ 
    return (
        <div className="home-background">
            <div className="Colors" >
                <div className="White"></div>         
            </div>
            <img className="bg-image" src={BackgroundImage}/>
            <div className="media-buttons" >
                <SocialMediaButtons/>
            </div>
            <div className="layer">
                <HomeBanner/>
            </div>
        </div>
    );
}
export default Background