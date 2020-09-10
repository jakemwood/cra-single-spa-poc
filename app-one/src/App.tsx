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
        <header className="App-header-1">
          {/* Doesn't know where to get assets */}
          <h1>App One</h1>
        </header>
      </div>
    );
  }
}

export default App;
