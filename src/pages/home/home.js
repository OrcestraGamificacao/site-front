import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './home.css'
import Background from '../../components/background/background'
import Navbar from '../../components/Navbar/Navbar'
import { addTask } from '../../actions/tasks'
import { PropTypes } from 'prop-types'
import HomeBanner from '../../components/homeBanner/homeBanner'
import BlogPosts from '../../components/blogPosts/blogPosts'
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
                <Navbar />
                <div className="landing-section">
                    <Background />
                </div>
                <SuccessCase/>                
                <AboutUs/>
                <Parceiros/>
                <Statistics/>
                <BlogPosts/>
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
