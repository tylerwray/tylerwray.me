import React from 'react';
import ReactDOM from 'react-dom';
import Focus from './Focus';

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Focus />, div);
});
