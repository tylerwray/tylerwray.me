import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

import Repos from '../pure/Repos'
import { getRepos } from '../services/repos'
import { IRepo } from '../types';

function ProjectsPage(props: RouteComponentProps) {
  const initialRepos: Array<IRepo> = []
  const [repos, setRepos] = useState(initialRepos)

  useEffect(() => {
    if (repos.length === 0) {
      getRepos().then(setRepos)
    }
  })

  return <Repos repos={repos} />
}

export default ProjectsPage
