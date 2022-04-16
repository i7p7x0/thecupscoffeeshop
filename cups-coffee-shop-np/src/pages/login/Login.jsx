import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import * as authenticationActions from "../../stores/actions/Authentication";
import Popup from "../../components/popup/Popup";
import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  // state that handles whether or not modal is open
  const [show, setShow] = useState(false);
  // state that keeps track of user input
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  // changes modal state
  const handleModalState = () => setShow(!show);

  // handles event after login buttton is pressed
  const handleButtonPress = (event) => {
    console.log(userInput);
    event.preventDefault();
    handleModalState();
    dispatch(authenticationActions.authenticationAction(true));
    // temp logic
    if (userInput.username === "ishan" && userInput.password === "ishan") {
      dispatch(authenticationActions.authenticationAction(true));
    } else {
      dispatch(authenticationActions.authenticationAction(false));
    }
  };
  // handles event after input change occurs
  const handleInputChange = (event) => {
    let changeType = event.target.id;
    let input = event.target.value;

    changeType === "username"
      ? setUserInput((previousValue) => {
          return {
            username: input,
            password: previousValue.password,
          };
        })
      : setUserInput((previousValue) => {
          return {
            username: previousValue.username,
            password: input,
          };
        });
  };

  return (
    <div className="login">
      <h3>Login as admin</h3>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={handleInputChange}
            value={userInput.username}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={userInput.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-primary" onClick={handleButtonPress}>
          Login
        </Button>
        <Popup handleModalState={handleModalState} show={show} />
      </Form>
    </div>
  );
};

export default Login;
