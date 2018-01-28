import React from 'react';
import ReactDOM from 'react-dom';

import Projects from './Projects';

jest.mock('material-ui/Card', () => ({
  Card: () => '<div></div>',
  CardTitle: () => '<div></div>'
}));
jest.mock('../actions/RepoAction', () =>
  function mockRepoAction() {
    return {
      getRepositories() { }
    };
  }
);
jest.mock('../stores/RepoStore', () => ({
  repos: [],
  on(event, fn) {
    fn();
  }
}));

jest.mock('../dispatcher', () => () => ({}));

describe('Projects Scene', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Projects />, div);
  });

  describe('#constructor', () => {
    it('should create a repo action', () => {
      const instance = new Projects();

      expect(Object.keys(instance.repoAction)).toEqual(['getRepositories']);
    });

    it('should set the default state', () => {
      const instance = new Projects();

      expect(instance.state).toEqual({ repos: [] });
    });
  });
});
