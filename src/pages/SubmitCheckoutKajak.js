import React from "react";
import { Container,  Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const SubmitCheckoutKajak = () => (
   <Container>
        <Row>
            <h1 className="m-3">Bedankt voor uit te checken!</h1>
        </Row>
        <Row>
            <h5 className="m-3">De grote dorst na deze inspanning kan gelest worden in onze gezellige kantine.</h5>
        </Row>
        <Row>
            <h5 className="m-3">De frisdrank en het bier staan koud, de stoof brandt.</h5>
        </Row>
        <Row>
            <h3 className="mt-3">Kantine Check-in</h3>
        </Row>
        <Row>
            <Col></Col> 
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
            <Col></Col> 
        </Row>
    </Container>
);

export default SubmitCheckoutKajak;