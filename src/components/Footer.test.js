import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer';

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  expect(div.childNodes[0].classList[0]).toBe('Footer');
});
