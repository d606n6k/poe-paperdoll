// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home";
import AccountSearch from "./pages/AccountSearch/AccountSearch.js";
import About from "./pages/About/About.js";
import PaperDoll from "./components/Paperdoll/PaperDoll";
// import Footer from "./components/Footer/Footer";
import background from "./img/sota-bg.jpg";

// console.log(process.env.REACT_APP_POE_CLIENT_ID)

function App() {
  return (
    <Router>
      {/* TODO: need to move this to stylesheet and fix setting the league bg */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          // height: "1020px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 50px",
        }}
        className="min-h-screen"
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
          <Route exact path="/accountlookup">
            <AccountSearch />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          {/* temporary paperdoll link for development */}
          <Route exact path="/paperdoll">
            <PaperDoll />
          </Route>
          {/* <Route path="/dashboard"><Dashboard /></Route> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
