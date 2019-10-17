import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

class Navbar extends Component {
    render() {
        const logo = require('../../assets/images/Orc_estra_Logo1_horizontalEXP2.svg')
        return (
            <nav className="navbar navbar-expand-lg navbar-bg-color d-flex align-items-center sticky-top">
                <Link to="/">
                    <a className="navbar-brand resize-logo">
                        <img className="logo-navbar" src={logo}/>
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/services">
                                <a className="nav-link text-dark">Serviços</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio">
                                <a className="nav-link text-dark">Portifólio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog">
                                <a className="nav-link text-dark">Blog</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">
                                <button type="button" className="btn btn-success button-text">
                                    Diagnóstico Gratuito
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
