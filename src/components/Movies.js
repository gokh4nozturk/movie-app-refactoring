import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

function Movies() {
  return (
    <>
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
    </>
  );
}
export default Movies;
