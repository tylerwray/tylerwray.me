import React, { Suspense } from 'react'
import ReactGA from 'react-ga'

import { Location, Router } from '@reach/router'
import CircularProgress from '@material-ui/core/CircularProgress'

import HomePage from './components/HomePage'

const ProjectsPage = React.lazy(() => import('./containers/ProjectsPage'))
const ContactPage = React.lazy(() => import('./components/ContactPage'))
const WorkHistoryPage = React.lazy(() => import('./containers/WorkHistoryPage'))

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_UA_CODE || '')

function Routes() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Location>
        {({ location }) => {
          ReactGA.pageview(location.href)
          return (
            <Router>
              <HomePage path="/" />
              <ProjectsPage path="/projects" />
              <ContactPage path="/contact" />
              <WorkHistoryPage path="/work-history" />
            </Router>
          )
        }}
      </Location>
    </Suspense>
  )
}

export default Routes
