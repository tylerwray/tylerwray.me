import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

jest.mock('../components/Focus', () => () => true);
jest.mock('material-ui/Card', () => ({
  Card: () => true,
  CardMedia: () => true,
  CardTitle: () => true
}));

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Profile />, div);
});
