import React, {Component} from 'react'
import './benefitsSection.css'
import BenefitCard from '../benefitCard/benefitCard';
import BtnServices from '../btnServices/BtnServices';

const benefits = [
  {
    title: "Engajamento",
    body:
      "Pooping rainbow while flying in a toasted bread costume in space chase ball of string chew foot, and poop on grasses. Why must they do that flop over. Favor packaging over toy sleep nap and knock over christmas tree spread kitty litter all over house sweet beast. Use lap as chair give attitude poop on grasses sleep nap. Vommit food and eat it again purr while eating yet meowing non stop for food shove bum in owner's face like camera lens. ",
    icon: require("../../assets/images/icon_mock.png")
  },
  {
    title: "Motivação",
    body: "Pooping rainbow while flying in a toasted bread costume in space chase ball of string chew foot, and poop on grasses. Why must they do that flop over. Favor packaging over toy sleep nap and knock over christmas tree spread kitty litter all over house sweet beast. Use lap as chair give attitude poop on grasses sleep nap. Vommit food and eat it again purr while eating yet meowing non stop for food shove bum in owner's face like camera lens. ",
    icon: require("../../assets/images/icon_mock.png")
  },
  {
    title: "Produtividade",
    body: "Pooping rainbow while flying in a toasted bread costume in space chase ball of string chew foot, and poop on grasses. Why must they do that flop over. Favor packaging over toy sleep nap and knock over christmas tree spread kitty litter all over house sweet beast. Use lap as chair give attitude poop on grasses sleep nap. Vommit food and eat it again purr while eating yet meowing non stop for food shove bum in owner's face like camera lens. ",
    icon: require("../../assets/images/icon_mock.png")
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

                <BtnServices />

            </section>
            <div className='benefits-end' />
            </>
        )
    }
}

export default BenefitsSection