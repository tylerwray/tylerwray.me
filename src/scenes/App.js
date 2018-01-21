import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header';
import Profile from '../scenes/Profile';
import Blog from '../scenes/Blog';
import Projects from '../scenes/Projects';
import Contact from '../scenes/Contact';

import '../styles/App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Profile} />
      <Route exact={true} path="/blog" component={Blog} />
      <Route exact={true} path="/projects" component={Projects} />
      <Route exact={true} path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
