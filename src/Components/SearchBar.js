import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../imgs/od_logo.png'
const SearchBar = () => {
    return (          
        <Navbar className='search-bar sticky-top' expand="lg">
        <Container fluid>
          <Navbar.Brand>
          <img
              alt=""
              src={Logo}
              width="100"
              height="70"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Recipes</Nav.Link>
            <Nav.Link href="#">Podcast</Nav.Link>
            <NavDropdown title="Merch" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Mens</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Kids</NavDropdown.Item>
              <NavDropdown.Item href="#action4">All Merch</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown disabled title="Etc.." id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Thing</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Thing</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Thing</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Thing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='find-btn'>Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default SearchBar;