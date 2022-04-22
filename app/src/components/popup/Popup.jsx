import { React, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "../../constants/routes";
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
            <span className="modal-span">
              {authentication.isLoggedIn
                ? "Logged In Successfully!"
                : props.title}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="modal-span">
            {authentication.isLoggedIn ? "Welcome to Admin view." : props.body}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <NavLink to={props.route}>
            <Button variant="primary" onClick={props.handleModalState}>
              Close
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;