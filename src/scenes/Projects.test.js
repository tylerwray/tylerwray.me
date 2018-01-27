import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects';

jest.mock('../actions/RepoAction', () =>
  function mockRepoAction() {
    return {
      getRepositories() { }
    };
  }
);
jest.mock('../stores/RepoStore', () => ({
  isSideNavOpen: true,
  navItems: [
    {
      name: 'test',
      href: 'http://test.com'
    }
  ],
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
