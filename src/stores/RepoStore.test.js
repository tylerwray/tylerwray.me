import RepoStore from './RepoStore';
import reposFixture from '../../test/fixtures/repos.json';
import { GET_REPOS } from '../constants';

jest.mock('axios', () => ({
  url: null,
  get(url) {
    this.url = url;

    const repos = require('../../test/fixtures/repos.json');

    return Promise.resolve(repos);
  }
}));
jest.mock('events', () => ({
  EventEmitter: class mockEventEmitter {
    constructor() {
      this.constuctorCalled = true;
    }

    emit(event) {
      this.emit.called = true;
      this.emit.event = event;
    }
  }
}));

const repoDefault = [];

describe('Repository Store', () => {
  afterEach(() => {
    RepoStore.repos = repoDefault;
    RepoStore.emit.called = false;
    RepoStore.emit.event = null;
  });

  describe('#constructor', () => {
    it('should export a RepoStore singleton instance', () => {
      expect(RepoStore.constuctorCalled).toEqual(true);
    });

    it('should initialize the repos property with a sensable default', () => {
      expect(RepoStore.repos).toEqual(repoDefault);
    });
  });

  describe('#getRepos', () => {
    it('should set the instance property repos to the fetched repos', async () => {
      await RepoStore.getRepos();

      expect(RepoStore.repos).toEqual(reposFixture);
    });

    it('should emit a change event', async () => {
      await RepoStore.getRepos();

      expect(RepoStore.emit.called).toEqual(true);
      expect(RepoStore.emit.event).toEqual('change');
    });
  });

  describe('#handleActions', () => {
    beforeEach(() => {
      jest.spyOn(RepoStore, 'getRepos');
    });

    afterEach(() => {
      RepoStore.getRepos.mockRestore();
    });

    it('should fall through if type is not recognized', () => {
      RepoStore.handleActions({ type: 'fall through' });

      // STUPID JEST: This is how to test if a spy was NOT called
      expect(RepoStore.getRepos.mock.calls).toEqual([]);
    });

    it('should call getRepos if GET_REPOS is the type of action', () => {
      RepoStore.handleActions({ type: GET_REPOS });

      expect(RepoStore.getRepos).toHaveBeenCalled();
    });
  });
});
