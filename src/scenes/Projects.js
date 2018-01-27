import React, { Component } from 'react';

import RepoAction from '../actions/RepoAction';
import RepoStore from '../stores/RepoStore';
import dispatcher from '../dispatcher';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.repoAction = new RepoAction(dispatcher);

    this.state = {
      repos: []
    };
  }

  componentWillMount() {
    RepoStore.on('change', () => {
      this.setState({ repos: RepoStore.repos });
    });
  }

  render() {
    return (
      <div>
        IT WORKS!
      </div>
    );
  }
}

export default Projects;
