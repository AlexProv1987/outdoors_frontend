import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ConvervationArea from "../Components/ConvervationArea";
import ConversationPages from "../Components/ConversationPages";
import HuntingSeasons from '../Components/HuntingSeasons';
import Campgrounds from '../Components/Campgrounds';
const HomePage = () => {
    return (
        <Container className="main-container">
            <Container className="pt-4">
                <Row className="card-row">
                    <Col className="pb-3 card-col" sm={12} md={6}>
                        <ConvervationArea />
                    </Col>
                    <Col className="pb-3 card-col" sm={12} md={6}>
                        <ConversationPages />
                    </Col>
                    </Row>
                    <Row className="card-row">
                    <Col className="pb-3" sm={12} md={6}>
                        <HuntingSeasons />
                    </Col>
                    <Col className="pb-3" sm={12} md={6}>
                        <Campgrounds />
                    </Col>
                    </Row>
            </Container>
        </Container >
    );
}

export default HomePage;