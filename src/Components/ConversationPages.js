import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { stateCounty } from "../Data/state_county";
const ConvervationArea = () => {
    const [state, setState] = useState('')

    const HandleSelect = (event) => {
        setState(event.target.value);
};


    return (
        <Container className="pt-4 border border-dark rounded">
            <Row className="text-center">
                <Col><p>Conservation Pages</p></Col>
                <hr/>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col md={6} sm={6} xs={6}>
                    <select value={state} onChange={HandleSelect} name='state' required className="form-control form-select text-center" id="inlineFormCustomSelect">
                        <option value="" disabled selected hidden={true}>State</option>
                        {Object.keys(stateCounty).map(key=>
                        <option value={key}>{key}</option>
                            )}
                    </select>
                </Col>
            </Row>
            <Row className="text-center pt-3 pb-3">
                <Col>
                    <Button className="w-25 find-btn" type='submit'>Find</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ConvervationArea;