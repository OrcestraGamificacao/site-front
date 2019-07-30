import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './home.css'
import {addTask} from '../../actions/tasks'
import {PropTypes} from 'prop-types'
import HomeBanner from '../../components/homeBanner/homeBanner'

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
                <h1>Homepage</h1>
                <HomeBanner></HomeBanner>
                <hr />
                <div className="group-icons">
                    <a className="space-icon" href="https://www.instagram.com/orcestragamificacao/?hl=pt-br" target="_blank">
                        <i class="fa fa-instagram color-icons"></i>
                    </a>
                    <a className="space-icon" href="https://www.facebook.com/Orcestra.Ej/" target="_blank">
                        <i class="fa fa-facebook-square color-icons"></i>
                    </a>
                    <a className="space-icon" href="https://www.linkedin.com/company/orcestragamificacao/" target="_blank">
                        <i class="fa fa-linkedin color-icons"></i>
                    </a>
                </div>
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