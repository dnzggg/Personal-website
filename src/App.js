import './App.scss';
import {Route, Router} from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import history from "./utils/history."

const App = () => {
  return (
      <Router history={history}>
          <Route exact path="/">
            <Home />
          </Route>
      </Router>
  );
};

export default App;
