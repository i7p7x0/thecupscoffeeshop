import { React, useState } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CgCoffee } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation-bar.css";

const NavigationBar = () => {
  // this state handles whether or not to expand navbar body on mobile and tablet view
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  //this model toggles the state that handles whether or not to expand navbar body on mobile and tablet view i.e, : navbarExpanded
  const handleNavbarClick = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  return (
    <div>
      <Navbar expanded={navbarExpanded} expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            The C<CgCoffee />
            ps Coffee Shop{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleNavbarClick}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-item-wrapper">
                <span className="nav-item" onClick={handleNavbarClick}>
                  Home
                </span>
              </NavLink>
              <NavLink to="/about" className="nav-item-wrapper">
                <span className="nav-item" onClick={handleNavbarClick}>
                  About Us
                </span>
              </NavLink>
              <NavLink to="/menu" className="nav-item-wrapper">
                <span className="nav-item" onClick={handleNavbarClick}>
                  Menu
                </span>
              </NavLink>

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
              {/* <NavLink to="/menu" className="nav-item-right">
                <span className="nav-item">Sign Up</span>
              </NavLink> */}
              <NavLink to="/login" className="nav-item-right">
                <span className="nav-item">Login</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
