import React from 'react'
import App, {About} from './components/App'
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={App} />
            <Route exact path='/about' component={About} />
        </BrowserRouter>
    );
}

export default Routes
