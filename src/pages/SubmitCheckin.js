import React from "react";
import { Container,  Row } from 'react-bootstrap';

const SubmitCheckin = () => (
   <Container>
        <Row>
            <h1 className="m-3">Bedankt voor in te checken!</h1>
        </Row>
        <Row>
            <h5 className="mt-3">Vergeet niet uit te checken na afloop!</h5>
        </Row>
    </Container>
);

export default SubmitCheckin;