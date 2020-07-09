import React from "react";
import { Logo } from "./icons/index";
import AppStyle from "../assets/css/App.css";

function Navigation() {
  return (
    <nav className={AppStyle}>
      <Logo />
    </nav>
  );
}
export default Navigation;
