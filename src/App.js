import React, {Component} from 'react';

class Counter extends Component {
  // Add constructor directly under Counter class and before render method'
  // Initialize state by setting 'this.state' to a Javascript object
  constructor() {
    super();
    this.state = {
      count: 0,
      inc: 1,
      // min_limit: 0,
      // max_limit: 30,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + this.state.inc
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - this.state.inc
    });
  };

  // RESET
  reset = () => {
    this.setState({
      count: this.state.count * 0
    });
  };

  // TOGGLE ... Increments either Double or Single by "inc"
  toggle = () => {
    if (this.state.inc == 1) {
      this.setState({
        inc: 2
      })
    }
    if (this.state.inc == 2) {
      this.setState({
        inc: 1
      })
    }
  };

  // toggle end

  render() {
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <h2>Current Increment Size: {this.state.inc}</h2>
          <button type="button" onClick={this.increment}>
            Select to Increment Counter
          </button>
          <button type="button" onClick={this.decrement}>
            Select to Decrement Counter
          </button>
          <button id="reset" type="button" onClick={this.reset}>
            Select to RESET
          </button>
          <button id="toggle" type="button" onClick={this.toggle}>
            Select to TOGGLE
          </button>
        </div>
      </div>
      // <div>TEST</div>
    );
  }
}

export default Counter;


// class HelloWorld extends Component {
//   render () {
//     return (
//       <div>Hello World</div>
//     )
//   }
// }

// export default HelloWorld;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
