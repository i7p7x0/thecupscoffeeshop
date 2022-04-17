import { React, useEffect, useState } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import * as authenticationActions from "../../stores/actions/Authentication";
import routes from "../../constants/routes";
import { NavLink } from "react-router-dom";
import { CgCoffee } from "react-icons/cg";
import Popup from "../popup/Popup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation-bar.css";

const NavigationBar = () => {
  const dispatch = useDispatch();
  // decide what to render in the navbar based on whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authentication = useSelector((state) => state.authentication);
  // change logged in state everytime authentication status changes
  useEffect(() => {
    setIsLoggedIn(authentication.isLoggedIn);
  }, [authentication.isLoggedIn]);
  // this state handles whether or not to expand navbar body on mobile and tablet view
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  //this model toggles the state that handles whether or not to expand navbar body on mobile and tablet view i.e, : navbarExpanded
  const handleNavbarClick = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  // dispatch logout action
  const handleLogout = () => {
    dispatch(authenticationActions.authenticationAction(false));
    handleModalState();
    return;
  };

  // state that handles whether or not modal is open
  const [show, setShow] = useState(false);
  // changes modal state
  const handleModalState = () => setShow(!show);

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
              <NavLink to={routes.home} className="nav-item-wrapper">
                <span className="nav-item" onClick={handleNavbarClick}>
                  Home
                </span>
              </NavLink>
              <NavLink to={routes.about} className="nav-item-wrapper">
                <span className="nav-item" onClick={handleNavbarClick}>
                  About Us
                </span>
              </NavLink>
              <NavLink to={routes.menu} className="nav-item-wrapper">
                <span className="nav-item" onClick={handleNavbarClick}>
                  Menu
                </span>
              </NavLink>
              {isLoggedIn ? (
                <NavLink
                  to={routes.adminDashboard}
                  className="nav-item-wrapper"
                >
                  <span className="nav-item" onClick={handleNavbarClick}>
                    Dashboard
                  </span>
                </NavLink>
              ) : null}
            </Nav>
            <Nav>
              {!isLoggedIn ? (
                <NavLink to={routes.login} className="nav-item-right">
                  <span className="nav-item" onClick={handleNavbarClick}>
                    Login
                  </span>
                </NavLink>
              ) : (
                <NavLink
                  to={routes.home}
                  className="nav-item-right"
                  onClick={handleLogout}
                >
                  <span className="nav-item" onClick={handleNavbarClick}>
                    Logout
                  </span>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Popup
        handleModalState={handleModalState}
        show={show}
        loggedInPopup={false}
        title={"Success!"}
        body={"Logged out successfully"}
      />
    </div>
  );
};

export default NavigationBar;
