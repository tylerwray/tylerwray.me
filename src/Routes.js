import React from 'react'
import PropTypes from 'prop-types'

import { Redirect, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Replay from '@material-ui/icons/Replay'

import HomePage from './components/HomePage'

function Routes() {
  const ProjectsPage = Loadable({
    loader: () => import('./components/ProjectsPage'),
    loading: Loading
  })

  const ContactPage = Loadable({
    loader: () => import('./components/ContactPage'),
    loading: Loading
  })

  const WorkHistoryPage = Loadable({
    loader: () => import('./components/WorkHistoryPage'),
    loading: Loading
  })

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

function Loading(props) {
  let inner

  if (props.error) {
    inner = (
      <Typography variant="headline" color="error">
        Error loading page...
        <br />
        <Button variant="outlined" onClick={props.retry}>
          <Replay />
          Retry
        </Button>
      </Typography>
    )
  } else if (props.pastDelay) {
    inner = <CircularProgress />
  }

  return (
    <div
      style={{
        padding: 20,
        textAlign: 'center'
      }}
    >
      {inner}
    </div>
  )
}

Loading.propType = {
  error: PropTypes.bool,
  retry: PropTypes.func.isRequired,
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired
}

export default Routes
