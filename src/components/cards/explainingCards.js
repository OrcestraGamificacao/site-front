import './Cards'
import React from 'react'
import Cards from './Cards';
import './explainingCards.css'

function ExplainingCards() {
    const secondbg=require('../../assets/images/greenBack.svg')
  return(      
        < div className = "explain-cards" >
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <img className='cards-secondbg' src={secondbg}/>
                        <h2 className="explain-card-title m-5">Benefícios da Gamificação</h2>
                        <Cards />
                    </div>
                </div>
            </div>
    </div >
  );
}
export default ExplainingCards
