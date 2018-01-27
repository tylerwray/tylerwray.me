import { GET_REPOS } from '../constants';

class RepoAction {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  getRepositories() {
    this.dispatcher.dispatch({
      type: GET_REPOS
    });
  }
}

export default RepoAction;
