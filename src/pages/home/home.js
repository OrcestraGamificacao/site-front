import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './home.css'
import Background from '../../components/background/background'
import Navbar from '../../components/Navbar/Navbar'
import {addTask} from '../../actions/tasks'
import Statistics from '../../components/statistics/statistics';
import Parceiros from '../../components/Parceiros/Parceiros'
import Cards from '../../components/cards/Cards'

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
<<<<<<< HEAD
                <Parceiros/>
                <Statistics/>

=======
                <div className="explain-cards">

                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="explain-card-title mt-2 mb-2">Benefícios da Gamificação</h2>
                                <Cards></Cards>
                            </div>
                        </div>
                    </div>
                </div>
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
>>>>>>> 4730259... adding cards
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
