import React from "react";
import { Container,  Row, Col, Form, Button } from 'react-bootstrap';

const FormOutKantine = () => (
   <Container>
        <Row>
            <h1 className="mt-3">Kantine - Check-Out</h1>
        </Row>
        <Form>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Voornaam</Form.Label>
                <Form.Control required type="text" placeholder="Uw Voornaam"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label >Achternaam</Form.Label>
                <Form.Control required type="text" placeholder="Uw Achternaam" />
            </Form.Group>
        </Form>
        <Button href="/kantine/checkout/submit" variant="warning" type="submit" block>
            Submit
        </Button>
    </Container>
);

export default FormOutKantine;