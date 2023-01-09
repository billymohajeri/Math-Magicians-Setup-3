import React from 'react';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc">
        <div className="first row">
          <input type="text" value="0" className="result" readOnly />
        </div>
        <div className="second row">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="orange" type="button">
            ÷
          </button>
        </div>
        <div className="third row">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button className="orange" type="button">
            x
          </button>
        </div>
        <div className="fourth row">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button className="orange" type="button">
            -
          </button>
        </div>
        <div className="fifth row">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="orange" type="button">
            +
          </button>
        </div>
        <div className="sixth row">
          <button className="double" type="button">
            0
          </button>
          <button type="button">.</button>
          <button className="orange" type="button">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calc;
