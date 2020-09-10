import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

class App extends React.Component {
  componentDidCatch(e: Error) {
    console.log(e);
    return Promise.resolve(e);
  }
  render() {
    return (
      <BrowserRouter>
        <nav style={{ width: "100%" }}>
          <div style={{ display: "flex", padding: "16px" }}>
            <Link style={{ marginRight: "16px" }} to="/app-one">
              App One
            </Link>
            <Link to="/app-two">App Two</Link>
          </div>
        </nav>
      </BrowserRouter>
    );
  }
}

export default App;
