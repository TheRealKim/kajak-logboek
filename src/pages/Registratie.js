import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const Registratie = () => (
   <Container>
    <Row>
      <h1 className="mt-3">Registratie</h1>
    </Row>
      <Row>
        <h2 className="my-3">Kajak</h2>
      </Row>
      <Row>
        <Col >
          <Button href="/kajak/checkin" size="lg" variant="success" block>
            <Row>
              <FontAwesomeIcon icon={faCheck}/>
            </Row>
            <Row>
              Check-in
            </Row>
          </Button>
        </Col>
        <Col >
          <Button href="/kajak/checkout" size="lg" variant="warning" block> 
            <Row>
              <FontAwesomeIcon icon={faTimes}/>
            </Row>
            <Row>
              Check-out
            </Row>
          </Button>
        </Col>
      </Row>
      <Row>
        <h2 className="my-3">Kantine</h2>
      </Row>
      <Row>
        <Col >
          <Button href="/kantine/checkin" size="lg" variant="success" block>
            <Row>
              <FontAwesomeIcon icon={faCheck}/>
            </Row>
            <Row>
              Check-in
            </Row>
          </Button>
        </Col>
        <Col >
          <Button href="/kantine/checkout" size="lg" variant="warning" block> 
            <Row>
              <FontAwesomeIcon icon={faTimes}/>
            </Row>
            <Row >
              Check-out
            </Row>
          </Button>
        </Col>
      </Row>
    </Container>
);

export default Registratie;