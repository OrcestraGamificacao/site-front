import React, { Component } from 'react'
import './cards.css';

class Cards extends Component {

    render() {
        const iconEngage = require('../../assets/images/engajamento.png')
        const iconMotivation = require('../../assets/images/motivacao.png')
        const iconProd = require('../../assets/images/produtividade.png')

        return (


            <div className="row d-flex justify-content-around cards card-class">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body benefits-cards">
                            <img className='icon-engage' src={iconEngage} />
                            <h5 className="card-title">ENGAJAMENTO</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body benefits-cards">
                            <img className='icon-motivation' src={iconMotivation} />
                            <h5 className="card-title">MOTIVAÇÃO</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body benefits-cards">
                            <img className='icon-productivity' src={iconProd} />
                            <h5 className="card-title">PRODUTIVIDADE</h5>
                            <p className="card-text"></p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;