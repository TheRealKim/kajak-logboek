
import React, {useState} from "react";
import { AppContext } from "./libs/contextLib";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Routes from "./Routes";
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleLogout() {
  userHasAuthenticated(false);
}
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
