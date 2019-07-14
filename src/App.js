import React, {Component} from 'react';

class Counter extends Component {
  // Add constructor directly under Counter class and before render method'
  // Initialize state by setting 'this.state' to a Javascript object
    constructor() {
      super();
      this.state = { 
        count: 0,
      };
    }
  render () {
    return(
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>What do we put here?</h1>
          <button type="button">Increment Counter</button>
          <button type="button">Decrement Counter</button>
        </div>
      </div>
      // <div>TEST</div>
    )
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
