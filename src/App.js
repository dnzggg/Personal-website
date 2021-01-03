import './App.scss';
import {Route, Router} from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import history from "./utils/history"
import NavBar from "./Components/NavBar"

const App = () => {
  return (
      <div>
          <Router history={history}>
              <NavBar />
              <Route exact path="/">
                  <Home />
              </Route>
          </Router>
      </div>

  )
}

export default App;
