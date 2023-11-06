import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// footer for navigation
const Footer = () => (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/officers">Officers</Nav.Link>
          <Nav.Link href="/login">Audition Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
);

export default Footer;