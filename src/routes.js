import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import MainPage from './pages/Main'

const Routes = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes