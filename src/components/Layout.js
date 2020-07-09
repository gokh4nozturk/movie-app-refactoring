import React from "react";

import Navigation from "./Navigation";

import { Container, Row, Col } from "react-bootstrap";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navigation />
            <Content />
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
