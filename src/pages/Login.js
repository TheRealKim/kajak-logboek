import React, { useState } from "react";
import { Container,  Row, Col, Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { useAppContext } from "../libs/contextLib";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [username, setUsername] = useState("");
  const [wachtwoord, setWachtwoord] = useState("");

  function validateForm() {
    return username.length > 0 && wachtwoord.length > 0;
  }

  async function handleSubmit(event) {
  event.preventDefault();

    if (username === "Kim" && wachtwoord === "test") {
        userHasAuthenticated(true);
    } else {
        alert("NOT LOGGED IN")
    }
  } 

  return (
    <Container>
    <Row>
        <h1 className="mt-3">TKC - Login</h1>
    </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username" bsSize="large">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="wachtwoord" bsSize="large">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control
            value={wachtwoord}
            onChange={e => setWachtwoord(e.target.value)}
            type="password"
          />
        </Form.Group>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
      <Row>
        <h6 className="m-3">De username en het wachtwoord kunt u opvragen in een van de kajak whatsapp groepen of op de club.<br/>
        We willen de app niet te moeilijk maken en iedereen verplichten een account aan te maken, maar tegenlijkertijd willen we ook niet ook niet alles openstellen voor Jan, alleman, en de internet robots.</h6>
      </Row>
    </Container>
  );
}
