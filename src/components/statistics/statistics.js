import React, {Component} from 'react'
import './statistics.css';

class Statistics extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects: 123,
            colaborators: 42,
            impactedPeople: 12658
        }
    }
    
    
    render() {
        return(
            <div className="col-12 col-sm-12 col-xs-12 background-color container">
                <div className="col-12 col-sm-8 offset-sm-2 col-xs-8 offset-xs-2">
                        <div className="row">
                            <div className="col-4 col-sm-4 col-xs-4 text-center">
                                <h3 className="bold text">{this.state.projects}</h3>
                                <p>Projetos</p>
                            </div>
                            <div className="col-4 col-sm-4 col-xs-4 text-center">
                                <h3 className="bold text">{this.state.colaborators}</h3>
                                <p>Colaboradores</p>
                            </div>
                            <div className="col-4 col-sm-4 col-xs-4 text-center">
                                <h3 className="bold text">{this.state.impactedPeople}</h3>
                                <p>Pessoas impactadas diretamente</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistics;