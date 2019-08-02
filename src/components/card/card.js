import React, {Component} from 'react'
import './card.css'

class Card extends Component {
   render() {
      return (
         <div className="card p-3 col-md-5 case">
            <img className="case-image card-img-top" src={this.props.image} alt={this.props.name}/>
            <div className="case-body card-body">
              <p className="case-text card-text text-center">
                {this.props.text}
              </p>
            </div>
         </div>
      )
   }
}

export default Card;