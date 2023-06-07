import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Header = () => {
    return (
        <Container className='header-container'>
        <Row className='text-center'> 
            <Col className="border border-dark">
            <h1 className='pt-4 pb-4 title-header'>Average Outdoors</h1>
            </Col>
        </Row>
        </Container>
    );
}

export default Header;