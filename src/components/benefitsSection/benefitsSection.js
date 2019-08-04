import React, {Component} from 'react'
import './benefitsSection.css'

const benefits = [
    {
        title: "Something",
        body: "More explanation here!",
        icon: "require_image"
    }
]

class BenefitsSection extends Component {
    render() {
        return (
            <>
            <section className='benefits-section'>
                <h2>Benefícios da Gamificação</h2>

                <div className='benefits-cards'>
                    cards here
                </div>
            </section>
            </>
        )
    }
}

export default BenefitsSection