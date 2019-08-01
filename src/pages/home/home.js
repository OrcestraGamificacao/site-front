import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './home.css'
import Background from '../../components/background/background'
import Navbar from '../../components/Navbar/Navbar'
import { addTask } from '../../actions/tasks'
import { PropTypes } from 'prop-types'
import HomeBanner from '../../components/homeBanner/homeBanner'
import Parceiros from '../../components/Parceiros/Parceiros'

class Home extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

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
                <Navbar></Navbar>
                <h1>Homepage</h1>
                <div className="landing-section">
                    <Background></Background>
                </div>
                <Parceiros/>
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