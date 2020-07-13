import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppStyle from "./assets/css/App.css";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import About from "./components/About";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/about" exact component={About} />
        <Route path="/search/:searchKey">
          <SearchResults />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
