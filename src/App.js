import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <span className="App-first-name">Tyler</span>
            &nbsp;
            <span className="App-last-name">Wray</span>
          </h1>
        </header>
        <div className="App-portrait"></div>
        <p className="App-intro">
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
        </p>
      </div>
    );
  }
}

export default App;
