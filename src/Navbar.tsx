import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link to="/">Home</Link>
      </div>

    </Nav>
  );
};

export default Navbar;
