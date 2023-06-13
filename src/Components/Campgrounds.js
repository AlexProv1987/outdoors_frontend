import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { stateCounty } from "../Data/state_county";
import { useState } from "react";
const ConvervationArea = () => {
    const [state, setState] = useState('')
    const [county, setCounty] = useState('')
    const [counties, setCounties] = useState([])
    const HandleSelect = (event) => {
        switch(event.target.name){
            case 'state':
                setState(event.target.value);
                setCounties(stateCounty[event.target.value]);
                return;
            case 'county':
                setCounty(event.target.value);
                return;
            default:
                return;
        }
    };

    return (
        <Container className="pt-4 border border-dark rounded">
            <Row className="justify-content-center text-center">
                <Col><p>Campgrounds</p></Col>
                <hr/>
            </Row>
            <Row className="text-center">
                <Col>
                    <select value={state} onChange={HandleSelect} name='state' required className="form-control form-select text-center" id="inlineFormCustomSelect">
                        <option value="" disabled selected hidden={true}>State</option>
                        {Object.keys(stateCounty).map(key=>
                        <option value={key}>{key}</option>
                            )}
                    </select>
                </Col>
                <Col>
                    <select value={county} onChange={HandleSelect} name='county' required className="form-control form-select text-center" id="inlineFormCustomSelect">
                    <option value="" disabled selected hidden={true}>Counties</option>
                        {counties.length > 0 ? counties.map(sCounty => <option value={sCounty}>{sCounty}</option>) :  <option value="" disabled >No State Selected</option>}
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