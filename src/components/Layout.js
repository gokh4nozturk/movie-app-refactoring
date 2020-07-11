import React from "react";

import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="container-{breakpoint} layout">
      <div className="row">
        <div className="col">
          <Navigation />
          <main className="main">
            <Sidebar />
            <Content />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
