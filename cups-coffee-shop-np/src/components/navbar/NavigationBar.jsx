import { React } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgCoffee } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            The C<CgCoffee />
            ps Coffee Shop{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Link to="/">
                <span>Home</span>
              </Link>
              <Link to="/about">
                <span>About</span>
              </Link>
              <Link to="/menu">
                <span>Menu</span>
              </Link> */}

              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/about">About Us</Nav.Link>

              <Nav.Link href="/menu">Menu</Nav.Link>

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="signup">Sign Up</Nav.Link>
              <Nav.Link eventKey={2} href="login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
