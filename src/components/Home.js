import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="container-{breakpoint} home">
      <div className="row">
        <div className="col">
          <Navigation />
          <main className="main">
            <Sidebar />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
