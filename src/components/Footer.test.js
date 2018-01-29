import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './Footer';

jest.mock('material-ui/FlatButton', () => () => 'div');

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});
