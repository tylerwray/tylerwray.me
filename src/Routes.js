import React, { Suspense } from 'react'

import { Redirect, Switch, Route } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import HomePage from './components/HomePage'

const ProjectsPage = React.lazy(() => import('./components/ProjectsPage'))
const ContactPage = React.lazy(() => import('./components/ContactPage'))
const WorkHistoryPage = React.lazy(() => import('./components/WorkHistoryPage'))

function Routes() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/projects"
          component={props => <ProjectsPage {...props} />}
        />
        <Route
          exact
          path="/contact"
          component={props => <ContactPage {...props} />}
        />
        <Route
          exact
          path="/work history"
          component={props => <WorkHistoryPage {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  )
}

export default Routes
