import { React, useState } from "react";
import EditForm from "../../../../components/editForm/EditForm";
import { Form, Button } from "react-bootstrap";
import routes from "../../../../constants/routes";
import { Link } from "react-router-dom";
import "./edit-password.css";
const EditPassword = (props) => {
  // state to track user input passwords
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  return (
    <div className="edit-password">
      <EditForm header={"Change Password"}>
        <Form.Label htmlFor="inputPassword5">Old Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Label htmlFor="inputPassword5">New Password</Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        {/* <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text> */}{" "}
        <Button variant="success mt-3 mx-3">Submit</Button>
        <Button variant="danger mt-3 ">Clear</Button>
        <Link to={routes.adminDashboard}>
          <Button variant="secondary mt-3 mx-3">Go Back</Button>
        </Link>
      </EditForm>
    </div>
  );
};

export default EditPassword;
