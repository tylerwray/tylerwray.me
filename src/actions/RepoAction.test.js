import RepoAction from './RepoAction';
import { GET_REPOS } from '../constants';

const dispatchSpy = {
  called: false,
  args: null,
  dispatch(args) {
    this.args = args;
    this.called = true;
  }
};

describe('Repo Actions', () => {
  afterEach(() => {
    dispatchSpy.called = false;
    dispatchSpy.args = null;
  });

  it('should initialize', () => {
    const repoAction = new RepoAction();
    expect(repoAction instanceof RepoAction).toEqual(true);
  });

  it('should set the dispatcher when injected', () => {
    const repoAction = new RepoAction(dispatchSpy);

    expect(repoAction.dispatcher).toEqual(dispatchSpy);
  });

  describe('#getRepositories', () => {
    it('should dispatch a GET_REPOS event', () => {
      const repoAction = new RepoAction(dispatchSpy);

      repoAction.getRepositories();

      expect(repoAction.dispatcher.called).toEqual(true);
      expect(dispatchSpy.args).toEqual({
        type: GET_REPOS
      });
    });
  });
});
