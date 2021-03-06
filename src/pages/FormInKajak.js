import React from "react";
import { Container, Button, Row, Col, Form } from 'react-bootstrap';

class FormInKajak extends React.Component {
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

  ErgensAndersHandler = (event) => {
      if (this.state.extra_location_field) {
          this.setState({extra_location_field: false});
      } else {
          this.setState({extra_location_field: true});
      }     
  }

  AndereDivisieHandler = (event) => {
      if (this.state.extra_division_field) {
          this.setState({extra_division_field: false});
      } else {
          this.setState({extra_division_field: true});
      }       
  }

  setVoornaam = (event) => {
    this.setState({voornaam: event})
  }

  setAchternaam = (event) => {
    this.setState({achternaam: event})
  }

  render() {
    let location_field = '';
    if (this.state.extra_location_field) {
      location_field = 
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label >Locatie</Form.Label>
            <Form.Control placeholder="Locatie" />
        </Form.Group>
    } else {
      location_field = '';
    }

    let division_field = '';
    if (this.state.extra_division_field) {
      division_field = 
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label >Subdivisie</Form.Label>
            <Form.Control placeholder="Subdivisie" />
        </Form.Group>
    } else {
      division_field = '';
    }

    return (

   <Container>
        <Row>
            <h1 className="mt-3">Kajak - Check-In</h1>
        </Row>
        <Form>
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

    <Form.Group as={Col}>
      <Form.Label>Richting</Form.Label>
      <Col>
        <Form.Check
          type='checkbox'
          label="Beerse"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type='checkbox'
          label="Club"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type='checkbox'
          label="Ravels"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          size="lg"
        />
        <Form.Check onChange={this.ErgensAndersHandler}
          type='checkbox'
          label="Ergens Anders"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
        />
      </Col>
    </Form.Group>

    {location_field}

    <Form.Group as={Col}>
      <Form.Label>Subdivisie</Form.Label>
      <Col sm={10}>
        <Form.Check
            type='checkbox'
            label="Kajak op't Gemak"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
        />
        <Form.Check
          type='checkbox'
          label="Lijn"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          size="lg"
        />
        <Form.Check
          type='checkbox'
          label="Polo"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type='checkbox'
          label="Start To Kayak"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
        />
        <Form.Check
          type='checkbox'
          label="SUP"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
        />
        <Form.Check
          type='checkbox'
          label="Tour"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
        />
        <Form.Check
          type='checkbox'
          label="Wildwater"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
        />
        <Form.Check onChange={this.AndereDivisieHandler}
          type='checkbox'
          label="Andere Subdivisie"
          name="formHorizontalRadios"
          id="formHorizontalRadios4"
        />
      </Col>
    </Form.Group>
    
    {division_field}

    <Button href="/kajak/checkin/submit" disabled={!this.validateForm()} variant="success" type="submit" block onSubmit={e => this.handleSubmit(e)}>
        Submit
    </Button>
        </Form>
    </Container>
);
  }
}

export default FormInKajak;