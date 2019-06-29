import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./Login";
import "../assets/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
