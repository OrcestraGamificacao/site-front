import React from 'react';
import './background.css';
import BackgroundImage from '../../assets/image/cave_background.svg'
import HomeBanner from '../homeBanner/homeBanner'

function Background(){ 
    return (
        <div className="home-background">
            <img className="bg-image" src={BackgroundImage}/>
            <div className="layer">
                <HomeBanner/>
            </div>
        </div>
    );
}
export default Background