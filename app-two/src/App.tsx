import React from "react";
import grumpycat from "./grumpycat.png";
import "./App.css";

class App extends React.Component {
  componentDidCatch(e: Error) {
    console.log(e);
    return Promise.resolve(e);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header-2">
          <h1>App Two</h1>
          {/* @ts-ignore */}
          <img src={`${__webpack_public_path__}/${grumpycat}`} />
        </header>
      </div>
    );
  }
}

export default App;
