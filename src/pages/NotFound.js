import React from "react";
import { Container, Row } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container>
    <Row>
      <h1>404</h1>
    </Row>
    <Row>
      <h3>Sorry, deze pagina is nog moeilijker te vinden dan de bril van Dries in de Vaart.</h3>
    </Row>
    </Container>
  );
}