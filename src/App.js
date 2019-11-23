import React, { Component } from "react";

import Blog from "./containers/Blog/Blog";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app"></BrowserRouter> - need to set the basename if the app is serving in subfolder else the bas name will be domain /
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
