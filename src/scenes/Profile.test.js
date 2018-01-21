import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

jest.mock('../components/Focus', () => () => true);

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profile />, div);
});
