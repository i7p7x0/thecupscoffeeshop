import { React, useEffect, useState } from "react";
import "./edit-info.css";
import EditForm from "../../../../components/editForm/EditForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "../../../../constants/routes";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import contactDetail from "../../../../data/contactDetail";
import * as validations from "../../../../validation/validateInputs";

const EditInfo = (props) => {
  //state that determines whether or not the input has been validated and whether or not the input is valid
  const [inputValidated, setInputValidated] = useState("-1");

  // check if user is authenticated
  const authentication = useSelector((state) => state.authentication);

  // redirect to error page if user is not authenticated
  const navigate = useNavigate();
  useEffect(() => {
    if (!authentication.isLoggedIn) {
      navigate(routes.home);
    }
  }, [authentication.isLoggedIn]);

  // user input

  const [userInput, setUserInput] = useState({
    emailAddress: contactDetail.emailAddress,
    contactNumber: contactDetail.contactNumber,
    location: contactDetail.location,
    instagramHandle: contactDetail.instagramHandle,
    timings: "",
    openingTime: {
      hh: "",
      mm: "",
      cycle: "",
    },
    closingTime: {
      hh: "",
      mm: "",
      cycle: "",
    },
  });

  // set user input to state
  const handleUserInput = (event) => {
    event.preventDefault();
    let changeType = event.target.id;
    let input = event.target.value;
    switch (changeType) {
      case "edit-email-address":
        setUserInput((previousValue) => {
          return {
            emailAddress: input,
            contactNumber: previousValue.contactNumber,
            location: previousValue.location,
            instagramHandle: previousValue.instagramHandle,
            timings: previousValue.timings,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: previousValue.openingTime.mm,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: previousValue.closingTime.mm,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "edit-contact-number":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: input,
            location: previousValue.location,
            instagramHandle: previousValue.instagramHandle,
            timings: previousValue.timings,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: previousValue.openingTime.mm,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: previousValue.closingTime.mm,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "edit-location":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: previousValue.contactNumber,
            location: input,
            instagramHandle: previousValue.instagramHandle,
            timings: previousValue.timings,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: previousValue.openingTime.mm,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: previousValue.closingTime.mm,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "edit-instagram-handle":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: previousValue.contactNumber,
            location: previousValue.location,
            instagramHandle: input,
            timings: previousValue.timings,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: previousValue.openingTime.mm,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: previousValue.closingTime.mm,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "edit-timing-select":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: previousValue.contactNumber,
            location: previousValue.location,
            instagramHandle: previousValue.instagramHandle,
            timings: input,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: previousValue.openingTime.mm,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: previousValue.closingTime.mm,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "opening-time-hh":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: previousValue.contactNumber,
            location: previousValue.location,
            instagramHandle: previousValue.instagramHandle,
            timings: previousValue.timings,
            openingTime: {
              hh: input,
              mm: previousValue.openingTime.mm,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: previousValue.closingTime.mm,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "opening-time-mm":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: previousValue.contactNumber,
            location: previousValue.location,
            instagramHandle: previousValue.instagramHandle,
            timings: previousValue.timings,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: input,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: previousValue.closingTime.mm,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "opening-time-select":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: previousValue.contactNumber,
            location: previousValue.location,
            instagramHandle: previousValue.instagramHandle,
            timings: previousValue.timings,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: previousValue.openingTime.mm,
              cycle: input,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: previousValue.closingTime.mm,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "closing-time-hh":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: previousValue.contactNumber,
            location: previousValue.location,
            instagramHandle: previousValue.instagramHandle,
            timings: previousValue.timings,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: previousValue.openingTime.mm,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: input,
              mm: previousValue.closingTime.mm,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "closing-time-mm":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: previousValue.contactNumber,
            location: previousValue.location,
            instagramHandle: previousValue.instagramHandle,
            timings: previousValue.timings,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: previousValue.openingTime.mm,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: input,
              cycle: previousValue.closingTime.cycle,
            },
          };
        });
        break;
      case "closing-time-select":
        setUserInput((previousValue) => {
          return {
            emailAddress: previousValue.emailAddress,
            contactNumber: previousValue.contactNumber,
            location: previousValue.location,
            instagramHandle: previousValue.instagramHandle,
            timings: previousValue.timings,
            openingTime: {
              hh: previousValue.openingTime.hh,
              mm: previousValue.openingTime.mm,
              cycle: previousValue.openingTime.cycle,
            },
            closingTime: {
              hh: previousValue.closingTime.hh,
              mm: previousValue.closingTime.mm,
              cycle: input,
            },
          };
        });
        break;
      default:
        break;
    }
  };

  // handle information submit:
  const handleButtonClick = (event) => {
    event.preventDefault();
    let validated = validations.validateContactDetail(userInput);
    if (validated) {
      alert("Hello World");
      setInputValidated("1");
    } else if (!validated) {
      setInputValidated("0");
    }
  };

  // handle clear inputs
  const handleClearInput = (event) => {
    event.preventDefault();
    setInputValidated("-1");
    setUserInput({
      emailAddress: "",
      contactNumber: "",
      location: "",
      instagramHandle: "",
      timings: "",
      openingTime: {
        hh: "",
        mm: "",
        cycle: "",
      },
      closingTime: {
        hh: "",
        mm: "",
        cycle: "",
      },
    });
  };

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
              id="edit-email-address"
              onChange={handleUserInput}
              value={userInput.emailAddress}
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
              id="edit-contact-number"
              onChange={handleUserInput}
              value={userInput.contactNumber}
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
              id="edit-location"
              onChange={handleUserInput}
              value={userInput.location}
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
              id="edit-instagram-handle"
              onChange={handleUserInput}
              value={userInput.instagramHandle}
            />
          </InputGroup>

          <Form.Select
            aria-label="select-timings"
            defaultValue={"default"}
            className="edit-info-select-form mb-3"
            id="edit-timing-select"
            onChange={handleUserInput}
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
          {userInput.timings.length > 0 ? (
            <>
              <InputGroup className="mb-3 edit-info-input-group">
                <InputGroup.Text className="edit-info-input-group">
                  Opening Time
                </InputGroup.Text>
                <FormControl
                  aria-label="opening time hh"
                  placeholder="Hour"
                  id="opening-time-hh"
                  value={userInput.openingTime.hh}
                  onChange={handleUserInput}
                />
                <FormControl
                  aria-label="closing time mm"
                  placeholder="Minute"
                  id="opening-time-mm"
                  value={userInput.openingTime.mm}
                  onChange={handleUserInput}
                />
                <Form.Select
                  aria-label="select-timings"
                  defaultValue={"default"}
                  className="edit-info-select-form"
                  id="opening-time-select"
                  onChange={handleUserInput}
                >
                  <option value="default" disabled>
                    --AM or PM--
                  </option>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Form.Select>
              </InputGroup>
              <InputGroup className="mb-3 edit-info-input-group">
                <InputGroup.Text className="edit-info-input-group">
                  Closing Time
                </InputGroup.Text>
                <FormControl
                  aria-label="opening time hh"
                  placeholder="Hour"
                  id="closing-time-hh"
                  value={userInput.closingTime.hh}
                  onChange={handleUserInput}
                />
                <FormControl
                  aria-label="closing time mm"
                  placeholder="Minute"
                  id="closing-time-mm"
                  value={userInput.closingTime.mm}
                  onChange={handleUserInput}
                />
                <Form.Select
                  aria-label="select-timings"
                  defaultValue={"default"}
                  className="edit-info-select-form"
                  id="closing-time-select"
                  onChange={handleUserInput}
                >
                  <option value="default" disabled>
                    --AM or PM--
                  </option>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </Form.Select>
              </InputGroup>
            </>
          ) : null}
          {inputValidated === "0" ? (
            <div className="edit-info-error">invalid input*</div>
          ) : null}
          <Button variant="success mx-3" onClick={handleButtonClick}>
            Submit
          </Button>
          <Button variant="danger" onClick={handleClearInput}>
            Clear
          </Button>
          <Link to={routes.adminDashboard}>
            <Button variant="secondary mx-3">Go Back</Button>
          </Link>
        </Form>
      </EditForm>
    </div>
  );
};

export default EditInfo;
