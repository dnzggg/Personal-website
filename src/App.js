import './App.scss';
import {BrowserRouter as Router} from "react-router-dom"
import {Route} from "react-router"
import React from "react";
import Home from "./Components/Home";
import history from "./utils/history"
import NavBar from "./Components/NavBar"
import SocialMedia from "./Components/SocialMedia";

const App = () => {
    return (
      <div>
          <Router history={history}>
              <NavBar />
              <Route exact path="/">
                  <Home />
              </Route>
              <SocialMedia />
          </Router>
      </div>
    )
    }

export default App;
