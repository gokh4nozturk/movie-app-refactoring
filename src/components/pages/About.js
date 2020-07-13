import React from "react";
import Navigation from "../Navigation";
import Sidebar from "../Sidebar";

function About() {
  return (
    <>
      <div className="container-{breakpoint} home">
        <div className="row">
          <div className="col">
            <Navigation />
            <main className="main">
              <Sidebar />
              <div className="content">about</div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
