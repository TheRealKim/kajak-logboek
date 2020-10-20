import React from "react";
import { Container,  Row, Col, Form, Button } from 'react-bootstrap';

class FormInKantine extends React.Component {
    constructor(props) {
    super(props);
    this.state = { 
        extra_location_field: false,
        extra_division_field: false,
        voornaam: "",
        achternaam: ""
    };
  }

  validateForm = () => {
    return this.state.voornaam.length > 0 && this.state.achternaam.length > 0;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Test Submit");
  }

  setVoornaam = (event) => {
    this.setState({voornaam: event})
  }

  setAchternaam = (event) => {
    this.setState({achternaam: event})
  }

  render() {
    return (
    <Container>
        <Row>
            <h1 className="mt-3">Kantine - Check-In</h1>
        </Row>
        <Form onSubmit={e=>this.handleSubmit(e)}>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Voornaam</Form.Label>
                <Form.Control
                    autoFocus
                    required
                    type="text" 
                    placeholder="Uw Voornaam"
                    value={this.state.voornaam}
                    onChange={e => this.setVoornaam(e.target.value)}
                />
            </Form.Group>   

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label >Achternaam</Form.Label>
                <Form.Control
                    autoFocus
                    required
                    type="text" 
                    placeholder="Uw Achternaam"
                    value={this.state.achternaam}
                    onChange={e => this.setAchternaam(e.target.value)}
                />
            </Form.Group>
            <Button href="/kantine/checkin/submit" disabled={!this.validateForm()} variant="success" type="submit" block>
                Submit
        </Button>
        </Form>
        
    </Container>
    )
  }
}

export default FormInKantine;
