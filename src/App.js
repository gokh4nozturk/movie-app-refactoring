import React from "react";
import AppStyle from "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FilmDetail from "./components/FilmDetail";

function App() {
  return (
    <div className={AppStyle}>
      <Button className="btn">buton</Button>
      <FilmDetail />
    </div>
  );
}

export default App;
