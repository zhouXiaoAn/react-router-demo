import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPages from './loginPages'
class UnauthorizedLayout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/auth/login" component={LoginPages}></Route>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        )
    }
}
export default UnauthorizedLayout