import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header';
import Focus from '../components/Focus';
import Profile from '../components/Profile';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

import '../styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={Focus}/>
        <Route exact={true} path="/profile" component={Profile}/>
        <Route exact={true} path="/blog" component={Blog}/>
        <Route exact={true} path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
