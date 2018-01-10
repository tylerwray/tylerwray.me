import React from 'react';

import Alert from 'react-bootstrap/lib/Alert';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header-background"></div>
      <header className="Header">
        <nav className="Nav">
          <div className="Name">
            <span className="First-name">Tyler</span>
            &nbsp;
            <span className="Last-name">Wray</span>
          </div>
        </nav>
        <div className="Focus">
          <div className="Portrait"></div>
          <p className="Mission-statement">
            Striving to improve the lives of others, using the software I create
          </p>
        </div>
      </header>
      <Alert>
        hello
      </Alert>
    </div>
  );
}

export default App;
