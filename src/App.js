import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Calc from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calc />} />
      </Routes>
    );
  }
}

export default App;
