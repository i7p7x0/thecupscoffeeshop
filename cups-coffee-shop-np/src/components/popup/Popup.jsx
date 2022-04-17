import { React, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./popup.css";
const Popup = (props) => {
  const authentication = useSelector((state) => state.authentication);

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleModalState}
        backdrop="static"
        keyboard={false}
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {authentication.isLoggedIn
              ? "Logged In Successfully!"
              : "Invalid Credentials"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {authentication.isLoggedIn
            ? "Welcome to Admin view."
            : "No user with such credentials exists."}
        </Modal.Body>
        <Modal.Footer>
          <NavLink to="/admin/dashboard">
            <Button variant="outline-danger" onClick={props.handleModalState}>
              Close
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
