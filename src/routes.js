import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Login from './pages/Login'

const Routes = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes