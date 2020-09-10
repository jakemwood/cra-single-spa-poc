import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  componentDidCatch(e: Error) {
    console.log(e);
    return Promise.resolve(e);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Doesn't know where to get assets */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
