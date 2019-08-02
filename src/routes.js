import React from 'react'
import App, {About} from './components/App'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/home/home'
import Contact from './pages/contact';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contato' component={Contact} />
        </BrowserRouter>
    );
}

export default Routes
