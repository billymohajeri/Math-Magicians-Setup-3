import './App.css';
import React from 'react';
import Calc from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Calc />
        </header>
      </div>
    );
  }
}

export default App;
