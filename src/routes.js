import React from 'react'
import App, {About} from './components/App'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/home/home'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
        </BrowserRouter>
    );
}

export default Routes
