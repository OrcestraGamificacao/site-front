import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './home.css'
import Background from '../../components/background/background'
import Navbar from '../../components/Navbar/Navbar'
<<<<<<< HEAD
import ExplainingCards from '../../components/cards/explainingCards'
import { addTask } from '../../actions/tasks'
import { PropTypes } from 'prop-types'
import HomeBanner from '../../components/homeBanner/homeBanner'
=======
import {addTask} from '../../actions/tasks'
import Statistics from '../../components/statistics/statistics';
import Parceiros from '../../components/Parceiros/Parceiros'
import Cards from '../../components/cards/Cards'
import ExplainingCards from '../../components/cards/explainingCards'
>>>>>>> 2489202c554dc8247af47e05f2967a70ec71a66a

class Home extends Component {
    renderTasks = () => {
        return this.props.tasks.map((item, index) => {
            return (
                <li key={index}>
                    <div>
                        <h3>Name: {item.name}</h3>
                        <p>Desc.: {item.description}</p>
                        <label>
                            Done:
                            <input inactive type='checkbox' defaultChecked={item.done} />
                        </label>
                    </div>
                </li>
            )
        })
    }

    render() {
        let counter = 2
        const newTask = {
            name: "New Task",
            description: "Sup",
            done: true,
            task_id: counter
        }
        return (
            <>
                <Navbar/>
                <div className="landing-section">
                    <Background/>
                </div>
                    <ExplainingCards />
                <hr />
                <ul>
                    {this.renderTasks()}
                </ul>
                <hr />
                <button
                    className="the-button"
                    onClick={() => {
                        this.props.addTask(newTask);
                        counter += 1;
                    }}
                >
                    Adicionar Task
            </button>
                <Parceiros/>
                <Statistics/>
                
            </>
        );
    }
}

function mapStateToProps(state) {
    return (
        {
            tasks: state.tasks
        }
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addTask: addTask
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
