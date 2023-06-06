import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ConvervationArea from "../Components/ConvervationArea";
const HomePage = () => {
    return (
        <Container>
            <Container className="pt-4">
                <Row className="pb-3">
                    <Col className="pb-3" sm={12} md={6}>
                        <ConvervationArea />
                    </Col>
                    <Col className="pb-3" sm={12} md={6}>
                        <ConvervationArea />
                    </Col>
                    <Col className="pb-3" sm={12} md={6}>
                        <ConvervationArea />
                    </Col>
                    <Col className="pb-3" sm={12} md={6}>
                        <ConvervationArea />
                    </Col>
                    </Row>
            </Container>
        </Container >
    );
}

export default HomePage;