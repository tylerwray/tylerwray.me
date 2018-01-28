import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from '../components/Header';
import Profile from '../scenes/Profile';
import Projects from '../scenes/Projects';
import Contact from '../scenes/Contact';
import Footer from '../components/Footer';

import '../styles/App.css';

const muiTheme = getMuiTheme({
  flatButton: {
    primaryTextColor: 'var(--link-color)'
  }
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={Profile} />
        <Route exact={true} path="/projects" component={Projects} />
        <Route exact={true} path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
