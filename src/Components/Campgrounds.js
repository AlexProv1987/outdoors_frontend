import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
const ConvervationArea = () => {
    const [state, setState] = useState('')
    const [county, setCounty] = useState('')

    const HandleSelect = (event) => {
        switch(event.target.name){
            case 'state':
                setState(event.target.value);
                return;
            case 'county':
                setCounty(event.target.value);
                return;
            default:
                return;
        }
    };

    return (
        <Container className="pt-4 border border-dark">
            <Row className="justify-content-center text-center">
                <Col><p>Campgrounds</p></Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <select value={state} onChange={HandleSelect} name='state' required className="form-control form-select text-center" id="inlineFormCustomSelect">
                        <option value="" disabled selected hidden={true}>State</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Missouri">Missouri</option>
                        <option value="California">California</option>
                    </select>
                </Col>
                <Col>
                    <select value={county} onChange={HandleSelect} name='county' required className="form-control form-select text-center" id="inlineFormCustomSelect">
                        <option value="" disabled selected hidden={true}>County</option>
                        <option value="County1">County1</option>
                        <option value="County2">County2</option>
                        <option value="County3">County3</option>
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