import React, { Component } from 'react'

import Repos from '../pure/Repos'
import { getRepos } from '../services/repos'

class ProjectsPage extends Component {
  state = {
    repos: []
  }

  async componentDidMount() {
    const { repos } = this.state

    if (repos.length === 0) {
      this.setState({
        repos: await getRepos()
      })
    }
  }

  render() {
    const { repos } = this.state

    return <Repos repos={repos} />
  }
}

export default ProjectsPage
