import React from 'react'
import App, { About, Portfolio, Blog } from './components/App'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/home/home'
import Services from './pages/services/services'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/portfolio' component={About} />
            <Route exact path='/blog' component={About} />
        </BrowserRouter>
    );
}

export default Routes
