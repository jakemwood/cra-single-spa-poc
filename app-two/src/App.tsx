import React from "react";
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
          <h1>App Two</h1>
        </header>
      </div>
    );
  }
}

export default App;
