import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './shared/Loading'

import Home from './pages/Home'

function Routes() {
  const Projects = Loadable({
    loader: () => import('./pages/Projects'),
    loading: Loading
  })

  const Contact = Loadable({
    loader: () => import('./pages/Contact'),
    loading: Loading
  })

  const WorkHistory = Loadable({
    loader: () => import('./pages/WorkHistory'),
    loading: Loading
  })

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/work-history" component={WorkHistory} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
