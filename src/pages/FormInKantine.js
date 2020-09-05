import React, { useState } from "react";
import { Container,  Row, Col, Form, Button } from 'react-bootstrap';

export default function FormInKantine() {
    const [voornaam, setVoornaam] = useState("");
    const [achternaam, setAchternaam] = useState("");

    function validateForm() {
        return voornaam.length > 0 && achternaam.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
    <Container>
        <Row>
            <h1 className="mt-3">Kantine - Check-In</h1>
        </Row>
        <Form>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Voornaam</Form.Label>
                <Form.Control
                    autoFocus
                    required
                    type="text" 
                    placeholder="Uw Voornaam"
                    value={voornaam}
                    onChange={e => setVoornaam(e.target.value)}
                />
            </Form.Group>   

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label >Achternaam</Form.Label>
                <Form.Control
                    autoFocus
                    required
                    type="text" 
                    placeholder="Uw Achternaam"
                    value={achternaam}
                    onChange={e => setAchternaam(e.target.value)}
                />
            </Form.Group>
            <Button href="/kantine/checkin/submit" disabled={!validateForm()} variant="success" type="submit" block>
                Submit
        </Button>
        </Form>
        
    </Container>
    )
}
