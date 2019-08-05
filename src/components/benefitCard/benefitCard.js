import React, {Component} from 'react'
import './benefitCard.css'

class BenefitCard extends Component {
    render() {
        return (
          <div className="benefit-card">
            <div className="card-icon">
              <img src={this.props.icon} alt="card icon"/>
            </div>
            <h3>{this.props.title}</h3>
            <p>{this.props.body}</p>
          </div>
        );
    }
}

export default BenefitCard