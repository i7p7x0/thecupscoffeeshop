import { React, useEffect, useState } from "react";
import EditForm from "../../../../components/editForm/EditForm";
import { useSelector } from "react-redux";
import routes from "../../../../constants/routes";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import * as validations from "../../../../validation/validateInputs";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Popup from "../../../../components/popup/Popup";
import useGetAPICall from "../../../../hooks/useGetAPICall";
import LoadingSpinner from "../../../../components/loadingSpinner/LoadingSpinner";
import patchAPICall from "../../../../api/patchAPICall";
import deleteAPICall from "../../../../api/deleteAPICall";
import postAPICall from "../../../../api/postAPICall";
import "./edit-menu.css";

const EditMenu = (props) => {
  // modal state variable
  const [show, setShow] = useState(false);

  // determine whether the modal should be open or closed
  const handleModalState = () => {
    setShow(false);
  };

  // set modal content
  const [modalContent, setModalContent] = useState({
    route: "",
    title: "",
    body: "",
  });
  const [menuItems, setMenuItems] = useState([]);
  const [responseData, setResponseData] = useState(false);
  useGetAPICall("menu", setMenuItems, setResponseData);
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
    itemCategory: "default",
    itemName: "",
    itemPrice: "",
    deleteFlag: false,
  });

  // tracks state of item that is being added
  const [newItem, setNewItem] = useState({
    itemCategory: "default",
    itemName: "",
    itemPrice: "",
  });

  // state that tracks whether or not an input is validated
  const [inputValidated, setInputValidated] = useState("-1");

  // handles updates and delete changes
  const handleUpdateChanges = (event) => {
    event.preventDefault();
    let changeType = event.target.id;
    let input = event.target.value;
    clearNewItem();
    switch (changeType) {
      case "edit-menu-update-select":
        let ids = input.split("childId");
        let selectedCategory = menuItems.filter((menu) => menu._id == ids[0]);
        let selectedItem = selectedCategory[0].items.filter(
          (item) => item._id == ids[1]
        );

        setUpdateItem({
          parentId: ids[0],
          itemId: ids[1],
          itemCategory: selectedCategory[0].category,
          itemName: selectedItem[0].name,
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

  // handle add changes
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

  // method to clear updateItem
  const clearUpdateItem = () => {
    setInputValidated("-1");
    setUpdateItem({
      parentId: "",
      itemId: "",
      itemCategory: "default",
      itemName: "",
      itemPrice: "",
      deleteFlag: false,
    });
  };
  // method to clear new item
  const clearNewItem = () => {
    setInputValidated("-1");
    setNewItem({
      itemCategory: "default",
      itemName: "",
      itemPrice: "",
    });
  };

  // handle clear press
  const handleClearButtonPress = (event) => {
    event.preventDefault();

    clearUpdateItem();
    clearNewItem();
  };

  // handle submit button press
  const handleSubmitMenu = async (event) => {
    event.preventDefault();
    if (
      newItem.itemCategory !== "default" &&
      updateItem.itemCategory === "default"
    ) {
      if (validations.validateItem(newItem)) {
        const responseData = await postAPICall("menu", {
          category: newItem.itemCategory,
          name: newItem.itemName,
          price: newItem.itemPrice,
        });
        if (responseData.error) {
          setModalContent({
            route: routes.adminEditInfo,
            title: responseData.errorType,
            body: responseData.errorMessage,
          });
        } else if (!responseData.error) {
          setModalContent({
            route: routes.adminDashboard,
            title: "Success!",
            body: "Your data has been added.",
          });
        }
        setShow(true);
        setInputValidated("1");
      } else if (!validations.validateItem(newItem)) {
        setInputValidated("0");
      }
    }
    if (
      newItem.itemCategory === "default" &&
      updateItem.itemCategory !== "default" &&
      !updateItem.deleteFlag
    ) {
      if (validations.validateItem(updateItem)) {
        const responseData = await patchAPICall("menu", {
          category: updateItem.itemCategory,
          name: updateItem.itemName,
          price: updateItem.itemPrice,
        });
        if (responseData.error) {
          setModalContent({
            route: routes.adminEditInfo,
            title: responseData.errorType,
            body: responseData.errorMessage,
          });
        } else if (!responseData.error) {
          setModalContent({
            route: routes.adminDashboard,
            title: "Success!",
            body: "Your data has been updated.",
          });
        }
        setShow(true);
        setInputValidated("1");
      } else if (!validations.validateItem(updateItem)) {
        setInputValidated("0");
      }
    }
    if (
      newItem.itemCategory === "default" &&
      updateItem.itemCategory !== "default" &&
      updateItem.deleteFlag
    ) {
      if (validations.validateItem(updateItem)) {
        const responseData = await deleteAPICall("menu", {
          category: updateItem.itemCategory,
          name: updateItem.itemName,
        });
        if (responseData.error) {
          setModalContent({
            route: routes.adminEditInfo,
            title: responseData.errorType,
            body: responseData.errorMessage,
          });
        } else if (!responseData.error) {
          setModalContent({
            route: routes.adminDashboard,
            title: "Success!",
            body: "Your data has been deleted.",
          });
        }
        setShow(true);
        setInputValidated("1");
      } else if (!validations.validateItem(updateItem)) {
        setInputValidated("0");
      }
    }
  };

  return (
    <>
      {responseData ? (
        <div className="edit-menu">
          {show ? (
            <Popup
              show={show}
              title={modalContent.title}
              body={modalContent.body}
              handleModalState={handleModalState}
              route={modalContent.route}
            />
          ) : null}
          <EditForm header={"Edit your shop menu"}>
            <Form>
              {(updateItem.itemCategory === "default" &&
                newItem.itemCategory === "default") ||
              (updateItem.itemCategory !== "default" &&
                newItem.itemCategory === "default") ? (
                <>
                  <Form.Select
                    aria-label="Edit a menu item"
                    className="edit-info-select-form mb-3"
                    id="edit-menu-update-select"
                    onChange={handleUpdateChanges}
                    value={updateItem.itemName}
                  >
                    <option value="default" disabled>
                      --Select a menu item to edit--
                    </option>
                    {menuItems.map((m) => {
                      return m.items.map((item) => {
                        return (
                          <option
                            key={item._id}
                            value={m._id + "childId" + item._id}
                          >
                            {item.name}
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
                      className={
                        updateItem.deleteFlag ? "edit-item-to-be-deleted" : ""
                      }
                      disabled
                    />
                    <FormControl
                      aria-label="closing time mm"
                      placeholder="Price"
                      id="edit-menu-update-price"
                      onChange={handleUpdateChanges}
                      className={
                        updateItem.deleteFlag ? "edit-item-to-be-deleted" : ""
                      }
                      value={updateItem.itemPrice}
                    />
                    {/* Delete existing item */}
                    <Button
                      variant="danger"
                      id="edit-menu-delete-item"
                      onClick={handleUpdateChanges}
                      disabled={
                        updateItem.category === "default" ? true : false
                      }
                    >
                      delete
                    </Button>
                  </InputGroup>
                </>
              ) : null}
              {/* update existing item's price */}
              {(updateItem.itemCategory === "default" &&
                newItem.itemCategory === "default") ||
              (updateItem.itemCategory === "default" &&
                newItem.itemCategory !== "default") ? (
                <>
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
                      className="edit-info-select-form"
                      id="edit-add-item-select"
                      onChange={handleAddItem}
                      value={newItem.itemCategory}
                    >
                      <option value="default" disabled>
                        --Category--
                      </option>
                      {menuItems.map((m) => {
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
                </>
              ) : null}
              {inputValidated === "0" ? (
                <div className="edit-info-error">invalid input*</div>
              ) : null}
              <Button variant="success mx-3" onClick={handleSubmitMenu}>
                Submit
              </Button>
              <Button variant="danger" onClick={handleClearButtonPress}>
                Clear
              </Button>
              <Link to={routes.adminDashboard}>
                <Button variant="secondary mx-3">Go Back</Button>
              </Link>
            </Form>
          </EditForm>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default EditMenu;
