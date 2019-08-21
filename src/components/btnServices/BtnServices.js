import React, { Component } from 'react'
import './BtnServices.css'
import {Link} from 'react-router-dom'


class BtnServices extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            
        <div className="text-center">
            <Link to="/services"><input className="btnServices" type="button" value="Como fazemos isso?"></input></Link>
        </div>

        );
    }
}

export default BtnServices;