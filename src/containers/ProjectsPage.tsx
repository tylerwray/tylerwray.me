import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

import RepoList from '../components/RepoList'
import { getRepos } from '../services/repos'
import { GithubRepo } from '../types'

function ProjectsPage(_: RouteComponentProps) {
  const initialRepos: GithubRepo[] = []
  const [repos, setRepos] = useState(initialRepos)

  useEffect(() => {
    if (repos.length === 0) {
      getRepos().then(setRepos)
    }
  })

  return <RepoList repos={repos} />
}

export default ProjectsPage
