import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

jest.mock('./NavBar', () => 'div');

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  expect(div.childNodes[0].classList[0]).toBe('Header');
});
