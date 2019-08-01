import React, { Component } from 'react'
import './cards.css';

class Cards extends Component {

    render() {

        return (


            <div className="row d-flex justify-content-around cards card-class">
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">ENGAJAMENTO</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">MOTIVAÇÃO</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-body">
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