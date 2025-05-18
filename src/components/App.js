import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/about"> 
          <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
