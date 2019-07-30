import React from 'react';
import './background.css'
function Background (){
     const homebackground=require('../../assets/image/cave_background.svg')
    return (
        <div className="home-background">
            <img className="home-cave"src={homebackground}/>
        </div>
    );
}
export default Background