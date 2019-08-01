import React, { Component } from 'react'
import './BtnServices.css'

class BtnServices extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="text-center">
                <input className="btnServices" type="button" value="Como fazemos isso?"></input>
            </div>
        );
    }
}

export default BtnServices;