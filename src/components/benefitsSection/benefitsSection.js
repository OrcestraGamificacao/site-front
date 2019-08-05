import React, {Component} from 'react'
import './benefitsSection.css'
import BenefitCard from '../benefitCard/benefitCard';

const benefits = [
  {
    title: "Something",
    body: "More explanation here!",
    icon: require("../../assets/images/pato_orc.png")
  },
  {
    title: "Something",
    body: "More explanation here!",
    icon: require("../../assets/images/pato_orc.png")
  },
  {
    title: "Something",
    body: "More explanation here!",
    icon: require("../../assets/images/pato_orc.png")
  }
];

class BenefitsSection extends Component {

    renderCards = () => {
        return benefits.map((item, index) => {
            return (
                <>
                    <BenefitCard 
                     title={item.title}
                     body={item.body}
                     icon={item.icon}
                     key={index}
                    />
                </>
            )
        })
    }

    render() {
        return (
            <>
            <section className='benefits-section'>
                <h2>Benefícios da Gamificação</h2>

                <div className='benefits-cards'>
                    {this.renderCards()}
                </div>
            </section>
            </>
        )
    }
}

export default BenefitsSection