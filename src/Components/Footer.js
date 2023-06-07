import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const Footer = () => {
    return (
        <Container fluid='true footer-container'>
            <footer>
                <Container>
                    <Row xs='auto' className="justify-content-center">
                        <p>© 2021 Copyright: ProCarn Solutions</p>
                    </Row>
                </Container>
            </footer>
        </Container>
    );
}
export default Footer;