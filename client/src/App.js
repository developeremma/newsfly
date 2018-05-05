import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SuperComponent from './components/SuperComponent'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
//import MapWithAMarker from './components/Map'
import './index.css';

class App extends Component {
  
  render() {
    return (
      <div>
       
        <Router>
          <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SuperComponent} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
