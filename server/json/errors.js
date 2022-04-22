const error = {
  fatalError: {
    error: true,
    errorType: "fatal",
    errorMessage: "An unknown error occured",
  },
  inputError: {
    error: true,
    errorType: "input",
    errorMessage: "Error! Invalid Input",
  },
  limitError: {
    error: true,
    errorType: "limit",
    errorMessage: "Can't add more items",
  },
  itemAlreadyExistsError: {
    error: true,
    errorType: "duplicate",
    errorMessage: "Error! Item already exists in the menu",
  },
};

exports.error = error;
