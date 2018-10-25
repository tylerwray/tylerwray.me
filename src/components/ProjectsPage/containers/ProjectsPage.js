import React, { useState, useEffect } from 'react'

import Repos from '../pure/Repos'
import { getRepos } from '../services/repos'

function ProjectsPage() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    if (repos.length === 0) {
      getRepos().then(setRepos)
    }
  })

  return <Repos repos={repos} />
}

export default ProjectsPage
