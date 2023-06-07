import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Footer = () => {
    return (
        <Container fluid ='true'>
        <footer className="py-4">
                <Row xs='auto' className="justify-content-center">
                   <p>© 2021 Copyright: ProCarn Solutions</p>
                </Row>
        </footer>
        </Container>
    );
}
export default Footer;