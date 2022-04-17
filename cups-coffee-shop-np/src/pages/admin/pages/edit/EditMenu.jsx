import { React, useEffect } from "react";
import EditForm from "../../../../components/editForm/EditForm";
import { useSelector } from "react-redux";
import routes from "../../../../constants/routes";
import { useNavigate } from "react-router-dom";
import { Table, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import menu from "../../../../data/menu";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "./edit-menu.css";

const EditMenu = (props) => {
  let serialNumber = 0;

  const getSerialNumber = () => ++serialNumber;

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
    <div className="edit-menu">
      <EditForm header={"Edit your shop menu"}>
        <Form>
          <Form.Select
            aria-label="Edit a menu item"
            defaultValue="default"
            className="edit-info-select-form mb-3"
          >
            <option value="default" disabled>
              --Select a menu item to edit--
            </option>
            {menu.map((m) => {
              return m.items.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.item}
                  </option>
                );
              });
            })}
          </Form.Select>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text
              id="inputGroup-sizing-sm"
              className="edit-info-input-group"
            >
              Item
            </InputGroup.Text>
            <FormControl aria-label="opening time hh" placeholder="Item" />
            <FormControl aria-label="closing time mm" placeholder="Price" />
            <Button variant="danger" id="button-addon1">
              <MdDelete />
            </Button>
          </InputGroup>
          <span>or</span>
          <br />
          <br />
          <InputGroup className="mb-3 edit-info-input-group">
            <InputGroup.Text className="edit-info-input-group">
              Add a new item
            </InputGroup.Text>
            <Form.Select
              aria-label="select-timings"
              defaultValue={"default"}
              className="edit-info-select-form"
            >
              <option value="default" disabled>
                --Category--
              </option>
              {menu.map((m) => {
                return (
                  <option key={m._id} value={m._id}>
                    {" "}
                    {m.category}
                  </option>
                );
              })}
            </Form.Select>
            <FormControl aria-label="opening time hh" placeholder="Item" />
            <FormControl aria-label="closing time mm" placeholder="Price" />
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

export default EditMenu;
