import { React, useEffect } from "react";
import "./edit-info.css";
import EditForm from "../../../../components/editForm/EditForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "../../../../constants/routes";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

const EditInfo = (props) => {
  // check if user is authenticated
  const authentication = useSelector((state) => state.authentication);

  // redirect to error page if user is not authenticated
  const navigate = useNavigate();
  useEffect(() => {
    if (!authentication.isLoggedIn) {
      navigate(routes.home);
    }
  }, [authentication.isLoggedIn]);
  return (
    <div className="edit-info">
      <EditForm header={"Edit Your Information"}>
        <Form>
          <InputGroup size="sm" className="mb-3 ">
            <InputGroup.Text
              id="inputGroup-sizing-sm"
              className="edit-info-input-group"
            >
              Email Address
            </InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              className="edit-info-input-group"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text
              id="inputGroup-sizing-sm"
              className="edit-info-input-group"
            >
              Contact Number
            </InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              className="edit-info-input-group"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text
              id="inputGroup-sizing-sm"
              className="edit-info-input-group"
            >
              Location
            </InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              className="edit-info-input-group"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text
              id="inputGroup-sizing-sm"
              className="edit-info-input-group"
            >
              Instagram handle
            </InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              className="edit-info-input-group"
            />
          </InputGroup>

          <Form.Select
            aria-label="select-timings"
            defaultValue={"default"}
            className="edit-info-select-form mb-3"
          >
            <option disabled={true} value="default">
              --Timings--
            </option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </Form.Select>
          <InputGroup className="mb-3 edit-info-input-group">
            <InputGroup.Text className="edit-info-input-group">
              Opening Time
            </InputGroup.Text>
            <FormControl aria-label="opening time hh" placeholder="Hour" />
            <FormControl aria-label="closing time mm" placeholder="Minute" />
            <Form.Select
              aria-label="select-timings"
              defaultValue={"default"}
              className="edit-info-select-form"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </Form.Select>
          </InputGroup>
          <InputGroup className="mb-3 edit-info-input-group">
            <InputGroup.Text className="edit-info-input-group">
              Closing Time
            </InputGroup.Text>
            <FormControl aria-label="opening time hh" placeholder="Hour" />
            <FormControl aria-label="closing time mm" placeholder="Minute" />
            <Form.Select
              aria-label="select-timings"
              defaultValue={"default"}
              className="edit-info-select-form"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </Form.Select>
          </InputGroup>
          <Button variant="success mx-3">Submit</Button>
          <Button variant="danger">Clear</Button>
          <Link to={routes.adminDashboard}>
            <Button variant="secondary mx-3">Go Back</Button>
          </Link>
        </Form>
      </EditForm>
    </div>
  );
};

export default EditInfo;
