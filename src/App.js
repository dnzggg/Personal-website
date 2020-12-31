import './App.css';
import {Route, Router} from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import history from "./utils/history."

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <div className="Index">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home/>
          </Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
