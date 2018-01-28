import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => children,
  Route: () => true
}));

jest.mock('./Header', () => 'div');
jest.mock('./Profile', () => () => true);
jest.mock('./Blog', () => () => true);
jest.mock('./Contact', () => () => true);
jest.mock('./Footer', () => () => true);

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
