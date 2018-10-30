import React, { Suspense } from 'react'

import { Router } from '@reach/router'
import CircularProgress from '@material-ui/core/CircularProgress'

import HomePage from './components/HomePage'

const ProjectsPage = React.lazy(() => import('./components/ProjectsPage'))
const ContactPage = React.lazy(() => import('./components/ContactPage'))
const WorkHistoryPage = React.lazy(() => import('./components/WorkHistoryPage'))

function Routes() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Router>
        <HomePage path="/" />
        <ProjectsPage path="/projects" />
        <ContactPage path="/contact" />
        <WorkHistoryPage path="/work-history" />
      </Router>
    </Suspense>
  )
}

export default Routes
