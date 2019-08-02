import React from 'react'
import Cards from './Cards';
import './explainingCards.css'

function ExplainingCards() {
    const bgCards = require('../../assets/images/Vector.svg')
    return (
        <div>
            <div className="big-card" >
                <div className="col-sm-12">
                    <div className="explain-cards">
                        <div className="card-body">
                            <h2 className="card-title" id="explain-card-title">Benefícios da Gamificação</h2>
                            <Cards />
                        </div>
                    </div>
                </div>
            </div >
            <img className='img-bg-cards' src={bgCards} />
        </div>
    );
}
export default ExplainingCards
