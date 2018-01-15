import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => children,
  Route: () => true
}));

jest.mock('../components/Header', () => 'div');
jest.mock('../components/Focus', () => () => true);
jest.mock('../scenes/Profile', () => () => true);
jest.mock('../scenes/Blog', () => () => true);
jest.mock('../scenes/Contact', () => () => true);

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.children[0].classList[0]).toBe('App');
});
