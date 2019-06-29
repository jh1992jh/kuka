import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from './Login';
import '../assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          Test
          <Route path="/" exact component={Login} ></Route>
          <Route path="/login" exact component={Login} ></Route>
        </Router>
      </div>
    );
  }
}

export default App;
