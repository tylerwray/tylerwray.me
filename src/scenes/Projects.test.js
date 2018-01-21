import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects';

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Projects />, div);
});
