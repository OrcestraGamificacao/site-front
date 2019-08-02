import React from 'react'
import {Link} from 'react-router-dom'
import './successCase.css'

import faciplacborda from '../../assets/images/faciplacborda.png'
import ifcborda from '../../assets/images/ifcborda.png'
import nutrirborda from '../../assets/images/nutrirborda.png'
import arrow from '../../assets/images/arrow.png'
import orbitborda from '../../assets/images/orbitborda.png'
import tecmecborda from '../../assets/images/tecmecborda.png'
import Card from '../card/card'
import BtnServices from '../btnServices/BtnServices'

const cards = [{
  name: 'Faciplac',
  image: faciplacborda,
  text: "Donec nec enim quis nunc convallis accumsan vitae quis ligula. Proin eu urna eget nisl sollicitudin tristique. Praesent sed nulla tortor. Proin lobortis eget lorem id sodales. Proin at elit viverra, placerat diam eget, feugiat elit. Nullam rhoncus finibus nulla nec fringilla. Curabitur finibus ante lacus, et euismod diam elementum quis. Donec porta porta faucibus. "
},
{
  name: 'IFC',
  image: ifcborda,
  text: "Donec nec enim quis nunc convallis accumsan vitae quis ligula. Proin eu urna eget nisl sollicitudin tristique. Praesent sed nulla tortor. Proin lobortis eget lorem id sodales. Proin at elit viverra, placerat diam eget, feugiat elit. Nullam rhoncus finibus nulla nec fringilla. Curabitur finibus ante lacus, et euismod diam elementum quis. Donec porta porta faucibus. "
},
{
  name: 'Nutrir',
  image: nutrirborda,
  text: "Donec nec enim quis nunc convallis accumsan vitae quis ligula. Proin eu urna eget nisl sollicitudin tristique. Praesent sed nulla tortor. Proin lobortis eget lorem id sodales. Proin at elit viverra, placerat diam eget, feugiat elit. Nullam rhoncus finibus nulla nec fringilla. Curabitur finibus ante lacus, et euismod diam elementum quis. Donec porta porta faucibus. "
}]

function SuccessCase() {
  return (
    <>
      <div className="container success-case justify-content-md-center">
        <h3 className="case-header text-center">Casos de Sucesso</h3>
        <div className="row justify-content-md-center">
          {cards.map((card) => {
            return (
              <Card name={card.name} image={card.image} text={card.text} />
            )
          })}
          <div className="card col-md-5 case">
            <div className="case-body card-body">
              <p className="card-title case-seemore text-center">Ver Mais</p>
              <div className="text-center p-3">
                <Link to='/about'>
                  <img className="case-seemore-image" src={arrow}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <BtnServices/>
      </div>
    </>
  )
}

export default SuccessCase;
