import React from "react";
import { Container, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';

class FormOutKajak extends React.Component {
    constructor(props) {
    super(props);
    this.state = { 
        extra_km_field: false,
    };
  }

  ErgensAndersHandler = (event) => {
    this.setState({extra_km_field: true});
  }

  StandaardKmHandler = (event) => {
    this.setState({extra_km_field: false});      
  }

  render() {
    let km_field = '';
    if (this.state.extra_km_field) {
      km_field = 
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Aantal Kilometers</Form.Label>
            <Form.Control type="number" placeholder="Aantal Kilometers" />
        </Form.Group>
    } else {
      km_field = '';
    }

    return (

   <Container>
        <Row>
            <h1 className="mt-3">Kajak - Check-Out</h1>
        </Row>
        <Form>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Voornaam</Form.Label>
            <Form.Control
              required
              autofocus
              type="text"  
              placeholder="Uw Voornaam"
            />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label >Achternaam</Form.Label>
          <Form.Control 
            required 
            autofocus
            placeholder="Uw Achternaam" 
            type="text"
          />
        </Form.Group>

    <Form.Group as={Col}>
      <Form.Label></Form.Label>
      <Col>
      <Form.Check
          type='radio'
          label="Voor de club"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type='radio'
          label="Beerse - Brug 4"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type='radio'
          label="Beerse - Brug 5"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type='radio'
          label="Beerse - Brug 6"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          size="lg"
        />
        <Form.Check
          type='radio'
          label="Turnhout - Nieuwe Kaai"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type='radio'
          label="Turnhout - Oude Kaai"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type='radio'
          label="Turnhout - Laguit"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          size="lg"
        />
        <Form.Check
          type='radio'
          label="Turnhout - Bocht Van Edwin"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          size="lg"
        />
        <Form.Check onChange={this.StandaardKmHandler}
          type='radio'
          label="Ravels - Soepkom"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          size="lg"
        />
        <Form.Check onChange={this.ErgensAndersHandler}
          type='radio'
          label="Verder of Anders"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
        />
      </Col>
    </Form.Group>

    {km_field}

    <Button href="/kajak/checkout/submit" variant="warning" type="submit" block>
        Submit
    </Button>
    </Form>
    </Container>
);
  }
}

export default FormOutKajak;