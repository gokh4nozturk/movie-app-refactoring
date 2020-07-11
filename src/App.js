import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";

import AppStyle from "./assets/css/App.css";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
