import React from "react";
import { Container,  Row, Form, Button } from 'react-bootstrap';

// export default function Login() {
//   const { userHasAuthenticated } = useAppContext();
//   const [username, setUsername] = useState("");
//   const [wachtwoord, setWachtwoord] = useState("");

//   function validateForm() {
//     return username.length > 0 && wachtwoord.length > 0;
//   }

//   async function handleSubmit(event) {
//   event.preventDefault();

//     if (username === "Kim" && wachtwoord === "test") {
//         userHasAuthenticated(true);
//     } else {
//         alert("NOT LOGGED IN")
//     }
//   }
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        username: "",
        password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Test Submit");
  }

  validateForm = () => {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  setUsername = (event) => {
    this.setState({username: event})
  }

  setPassword = (event) => {
    this.setState({password: event})
  }

  render() {
    return (
    <Container>
      <Row>
        <h1 className="mt-3">TKC - Login</h1>
      </Row>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="username" bsSize="large">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            placeholder="De TKC Username"
            value={this.state.username}
            onChange={e => this.setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="wachtwoord" bsSize="large">
          <Form.Label>Wachtwoord</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            placeholder="Het TKC wachtwoord"
            value={this.state.password}
            onChange={e => this.setPassword(e.target.value)}
            type="password"
          />
        </Form.Group>
        <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
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

}

export default Login;
