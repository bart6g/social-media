import React from "react";
import LoginPage from "./components/forms/LoginPage";
import RegisterPage from "./components/forms/RegisterPage";
import HomePage from "./components/pages/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
