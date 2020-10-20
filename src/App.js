
import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from "./Routes";
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function App() {
  return (
   <Router>
      <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="/">TKC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/registratie">Registratie</Nav.Link>
              <Nav.Link href="/logboek">Logboek</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Routes />
    </Router>
  );
}
