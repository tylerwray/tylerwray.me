import React from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './Header';
import Profile from './Profile';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const muiTheme = getMuiTheme({
  flatButton: {
    primaryTextColor: 'var(--link-color)'
  }
});

const appStyle = {
  backgroundColor: 'rgb(248, 248, 248)'
};

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={appStyle}>
      <Header />
      <Route exact={true} path="/" component={Profile} />
      <Route exact={true} path="/projects" component={Projects} />
      <Route exact={true} path="/contact" component={Contact} />
      <Footer />
    </div>
  </MuiThemeProvider>
);

export default App;
