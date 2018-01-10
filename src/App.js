import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Focus from './Focus';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact={true} path="/" component={Focus}/>
      </div>
    </Router>
  );
}

export default App;
