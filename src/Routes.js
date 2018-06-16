import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Home, Projects, Contact } from './pages'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
    <Redirect to="/" />
  </Switch>
)

export default Routes
