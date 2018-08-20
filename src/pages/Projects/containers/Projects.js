import React, { Component } from 'react'

import Repos from '../pure/Repos'
import { getRepos } from '../services'

class Projects extends Component {
  state = {
    repos: []
  }

  async componentDidMount() {
    if (this.state.repos.length === 0) {
      const repos = await getRepos()

      this.setState({
        repos
      })
    }
  }

  render() {
    return <Repos repos={this.state.repos} />
  }
}

export default Projects
