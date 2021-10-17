import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home";
import background from "./img/expedition-bg.jpg";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          height: "1020px",
        }}
      >
        <Nav />
        <hr />
        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/dashboard">{/* <Dashboard /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
