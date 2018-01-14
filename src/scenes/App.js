import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header';
import Focus from '../components/Focus';
import Profile from '../scenes/Profile';
import Blog from '../scenes/Blog';
import Contact from '../scenes/Contact';

import '../styles/App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Focus} />
      <Route exact={true} path="/profile" component={Profile} />
      <Route exact={true} path="/blog" component={Blog} />
      <Route exact={true} path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
