import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Fourk from "./components/Fourk";
import Trending from "./components/Trending";
import Browse from "./components/Browse";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import SinglePage from "./components/SinglePage";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/4k" component={Fourk} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/browse" component={Browse} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/singlePage/:id" component={SinglePage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
export default App;
