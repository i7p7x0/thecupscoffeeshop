import { React, useEffect, useState } from "react";
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
  // check if user is authenticated
  const authentication = useSelector((state) => state.authentication);

  // redirect to error page if user is not authenticated
  const navigate = useNavigate();
  useEffect(() => {
    if (!authentication.isLoggedIn) {
      navigate(routes.home);
    }
  }, [authentication.isLoggedIn]);

  // tracks state of item that is being updated
  const [updateItem, setUpdateItem] = useState({
    parentId: "",
    itemId: "",
    itemCategory: "",
    itemName: "",
    itemPrice: "",
    deleteFlag: false,
  });

  // method to clear updateItem
  const clearUpdateItem = () => {
    setUpdateItem({
      parentId: "",
      itemId: "",
      itemCategory: "",
      itemName: "",
      itemPrice: "",
      deleteFlag: false,
    });
  };

  // tracks state of item that is being added
  const [newItem, setNewItem] = useState({
    itemCategory: "",
    itemName: "",
    itemPrice: "",
  });

  // method to clear new item
  const clearNewItem = () => {
    setNewItem({
      itemCategory: "",
      itemName: "",
      itemPrice: "",
    });
  };

  // handles updates and delete changes
  const handleUpdateChanges = (event) => {
    event.preventDefault();
    let changeType = event.target.id;
    let input = event.target.value;
    clearNewItem();
    switch (changeType) {
      case "edit-menu-update-select":
        let ids = input.split("childId");
        let selectedCategory = menu.filter((menu) => menu._id == ids[0]);
        let selectedItem = selectedCategory[0].items.filter(
          (item) => item._id == ids[1]
        );
        setUpdateItem({
          parentId: ids[0],
          itemId: ids[1],
          itemCategory: selectedCategory[0].category,
          itemName: selectedItem[0].item,
          itemPrice: selectedItem[0].price,
          deleteFlag: false,
        });
        break;
      case "edit-menu-update-price":
        setUpdateItem((previousValue) => {
          return {
            parentId: previousValue.parentId,
            itemId: previousValue.itemId,
            itemCategory: previousValue.itemCategory,
            itemName: previousValue.itemName,
            itemPrice: input,
            deleteFlag: previousValue.deleteFlag,
          };
        });
        break;
      case "edit-menu-delete-item":
        setUpdateItem((previousValue) => {
          return {
            parentId: previousValue.parentId,
            itemId: previousValue.itemId,
            itemCategory: previousValue.itemCategory,
            itemName: previousValue.itemName,
            itemPrice: previousValue.itemPrice,
            deleteFlag: true,
          };
        });
        break;
      default:
        break;
    }
  };

  const handleSubmitMenu = () => {
    console.log(updateItem);
    console.log(newItem);
  };

  // handle state changes for inputs on add new item
  const handleAddItem = (event) => {
    event.preventDefault();
    let changeType = event.target.id;
    let input = event.target.value;
    clearUpdateItem();
    switch (changeType) {
      case "edit-add-item-select":
        setNewItem((previousValue) => {
          return {
            itemCategory: input,
            itemName: previousValue.itemName,
            itemPrice: previousValue.itemPrice,
          };
        });
        break;
      case "edit-add-item":
        setNewItem((previousValue) => {
          return {
            itemCategory: previousValue.itemCategory,
            itemName: input,
            itemPrice: previousValue.itemPrice,
          };
        });
        break;
      case "edit-add-item-price":
        setNewItem((previousValue) => {
          return {
            itemCategory: previousValue.itemCategory,
            itemName: previousValue.itemName,
            itemPrice: input,
          };
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="edit-menu">
      <EditForm header={"Edit your shop menu"}>
        <Form>
          {/* update existing item's price */}
          <Form.Select
            aria-label="Edit a menu item"
            defaultValue="default"
            className="edit-info-select-form mb-3"
            id="edit-menu-update-select"
            onChange={handleUpdateChanges}
          >
            <option value="default" disabled>
              --Select a menu item to edit--
            </option>
            {menu.map((m) => {
              return m.items.map((item) => {
                return (
                  <option key={item._id} value={m._id + "childId" + item._id}>
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
            <FormControl
              aria-label="opening time hh"
              placeholder="Item"
              id="edit-menu-update-item"
              value={updateItem.itemName}
              disabled
            />
            <FormControl
              aria-label="closing time mm"
              placeholder="Price"
              id="edit-menu-update-price"
              onChange={handleUpdateChanges}
              value={updateItem.itemPrice}
            />
            {/* Delete existing item */}
            <Button
              variant="danger"
              id="edit-menu-delete-item"
              onClick={handleUpdateChanges}
            >
              <MdDelete id="edit-menu-delete-item-icon" />
            </Button>
          </InputGroup>
          <span>or</span>
          <br />
          <br />
          {/* Add new item */}
          <InputGroup className="mb-3 edit-info-input-group">
            <InputGroup.Text className="edit-info-input-group">
              Add a new item
            </InputGroup.Text>
            <Form.Select
              aria-label="select-timings"
              defaultValue={"default"}
              className="edit-info-select-form"
              id="edit-add-item-select"
              onChange={handleAddItem}
            >
              <option value="default" disabled>
                --Category--
              </option>
              {menu.map((m) => {
                return (
                  <option key={m._id} value={m.category}>
                    {m.category}
                  </option>
                );
              })}
            </Form.Select>
            <br />
          </InputGroup>
          <InputGroup className="mb-3 edit-info-input-group">
            <FormControl
              aria-label="opening time hh"
              placeholder="Item"
              id="edit-add-item"
              value={newItem.itemName}
              onChange={handleAddItem}
            />
            <FormControl
              aria-label="closing time mm"
              placeholder="Price"
              id="edit-add-item-price"
              value={newItem.itemPrice}
              onChange={handleAddItem}
            />
          </InputGroup>

          <Button variant="success mx-3" onClick={handleSubmitMenu}>
            Submit
          </Button>
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
