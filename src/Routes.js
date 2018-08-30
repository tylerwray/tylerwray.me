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

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
