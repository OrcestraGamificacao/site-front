import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './home.css'
import Background from '../../components/background/background'
import Navbar from '../../components/Navbar/Navbar'
import {addTask} from '../../actions/tasks'
import {PropTypes} from 'prop-types'
import HomeBanner from '../../components/homeBanner/homeBanner'
import BtnServices from '../../components/btnServices/BtnServices'
import Statistics from '../../components/statistics/statistics';
import Parceiros from '../../components/Parceiros/Parceiros'
import SuccessCase from '../../components/successCase/successCase'
import AboutUs from '../../components/aboutUs/aboutUs' 

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
<<<<<<< HEAD
                <Navbar></Navbar>
                <h1>Homepage</h1>
                <HomeBanner></HomeBanner>
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

            <AboutUs></AboutUs>
=======
                <Navbar/>
                <div className="landing-section">
                    <Background/>
                </div>
                <SuccessCase/>                
                <Parceiros/>
                <Statistics/>
>>>>>>> 660ba02b9a54cb5f1354d7e14895d4a3d2667a81
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
