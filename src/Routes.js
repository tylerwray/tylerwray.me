import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Button from '@material-ui/core/Button'

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

function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <Button onClick={props.retry}>Retry</Button>
      </div>
    )
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time... <Button onClick={props.retry}>Retry</Button>
      </div>
    )
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  }
  return null
}

Loading.propTypes = {
  error: PropTypes.bool.isRequired,
  retry: PropTypes.func.isRequired,
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired
}
export default Routes
