import { Container, Nav, NavbarBrand, NavbarToggle } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nav className="bg-primary">
      <Container>
        <NavbarBrand href='#home'>Notes App</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
      </Container>
    </Nav>
  );
};

export default Navbar;
