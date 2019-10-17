import React from "react";
import './App.css'
import Home from "./Pages/home";
import Meetups from "./Pages/meetups";
import Savings from "./Pages/savings";
import Questions from "./Pages/questions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logedIn from "./Pages/logedIn";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logedin" component={logedIn} />
        <Route exact path="/meetups" component={Meetups} />
        <Route exact path="/savings" component={Savings} />
        <Route exact path="/questions" component={Questions} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
