import React from 'react'

import { Redirect, Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage'
import ContactPage from './components/ContactPage'
import WorkHistoryPage from './components/WorkHistoryPage'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/work-history" component={WorkHistoryPage} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
