import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import UnauthorizedLayout from './components/UnauthorizedLayout'
import AuthorizedRoute from './components/AuthorizedRoute'
import PrimaryLayout from './components/PrimaryLayout'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/auth" component={UnauthorizedLayout}> </Route>
            <AuthorizedRoute path="/app" component={PrimaryLayout} />
            <Redirect to="/auth" />
          </Switch>
        </BrowserRouter>
      
    );
  }
}

export default App;
