import React from 'react';

import NavBar from './NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header-background"></div>
      <header className="Header">
        <NavBar />
        <div className="Focus">
          <div className="Portrait"></div>
          <p className="Mission-statement">
            Striving to improve the lives of others, using the software I create
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
