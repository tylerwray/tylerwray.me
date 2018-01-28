import { EventEmitter } from 'events';
import axios from 'axios';
import dispatcher from '../dispatcher';

import { GET_REPOS } from '../constants';

class RepoStore extends EventEmitter {
  constructor() {
    super();

    this.repos = [];
  }

  handleActions({ type }) {
    switch (type) {
      case GET_REPOS:
        this.getRepos();
        break;
      default:
        break;
    }
  }

  getRepos() {
    axios.get('https://api.github.com/users/wraytw/repos').then(repos => {
      this.repos = repos.data.map(this.transformRepo);
      this.emit('change');
    });
  }

  transformRepo(repo) {
    return {
      name: repo.name,
      description: repo.description,
      url: repo.url,
      language: repo.language,
      updated_at: repo.updated_at
    };
  }
}

const repoStore = new RepoStore();

dispatcher.register(repoStore.handleActions.bind(repoStore));

export default repoStore;
