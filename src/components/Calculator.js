import React from 'react';
import calculate from '../logic/calculate';

class Calc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calc">
        <div className="first row">
          {/* <p "className="result"> readOnly </p> */}
          <p className="result">{next || total}</p>
        </div>
        <div className="second row">
          <button type="button" onClick={this.handleClick}>AC</button>
          <button type="button" onClick={this.handleClick}>+/-</button>
          <button type="button" onClick={this.handleClick}>%</button>
          <button className="orange" type="button" onClick={this.handleClick}>
            ÷
          </button>
        </div>
        <div className="third row">
          <button type="button" onClick={this.handleClick}>7</button>
          <button type="button" onClick={this.handleClick}>8</button>
          <button type="button" onClick={this.handleClick}>9</button>
          <button className="orange" type="button" onClick={this.handleClick}>
            x
          </button>
        </div>
        <div className="fourth row">
          <button type="button" onClick={this.handleClick}>4</button>
          <button type="button" onClick={this.handleClick}>5</button>
          <button type="button" onClick={this.handleClick}>6</button>
          <button className="orange" type="button" onClick={this.handleClick}>
            -
          </button>
        </div>
        <div className="fifth row">
          <button type="button" onClick={this.handleClick}>1</button>
          <button type="button" onClick={this.handleClick}>2</button>
          <button type="button" onClick={this.handleClick}>3</button>
          <button className="orange" type="button" onClick={this.handleClick}>
            +
          </button>
        </div>
        <div className="sixth row">
          <button className="double" type="button" onClick={this.handleClick}>
            0
          </button>
          <button type="button" onClick={this.handleClick}>.</button>
          <button className="orange" type="button" onClick={this.handleClick}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calc;
