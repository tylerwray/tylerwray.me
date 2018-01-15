import React from 'react';
import ReactDOM from 'react-dom';
import Hamburger from './Hamburger';

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hamburger open={true} />, div);
  expect(div.childNodes[0].classList[0]).toBe('Hamburger');
});
