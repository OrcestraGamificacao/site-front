import React from 'react'
import unbImage from '../../assets/images/unb.png'
import fgaImage from '../../assets/images/fga.png'
import engageImage from '../../assets/images/engage.png'
import concentroImage from '../../assets/images/concentro.png'
import './Parceiros.css'

const Parceiros = () => (
    <div className="d-flex justify-content-center parceiros-area" >
        <div className="parceiros d-flex justify-content-between align-items-center pt-5 pb-5 " >
            <div className="d-flex justify-content-between flex-wrap align-items-center parceiros-imgs" >
                <img className="parceiros-img" id="unb" src={unbImage} />
                <img className="parceiros-img" src={fgaImage} />
                <img className="parceiros-img" src={engageImage} />
                <img className="parceiros-img" id="concentro" src={concentroImage} />
            </div>
            <h1 className="parceiros-text" ><b>PARCEIROS</b></h1>
        </div>
    </div>
)       
export default Parceiros