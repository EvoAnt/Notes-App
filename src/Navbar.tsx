import { Container, Nav, NavLink, NavbarBrand, NavbarToggle } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nav className="bg-secondary mb-4 p-4">
      <Container>
        <NavbarBrand href='#home'>Notes App</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        
      </Container>
    </Nav>
  );
};

export default Navbar;
