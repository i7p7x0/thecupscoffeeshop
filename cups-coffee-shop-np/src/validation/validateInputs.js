const errorMessages = [];

// check if the input field is empty, null or undefined
const validateEmptyFields = (field) => {
  let validated = true;
  if (field === undefined || field === null || field.length === 0) {
    errorMessages.push(field + " is required");
    validated = false;
    return validated;
  }
  return validated;
};

const validateContactDetail = (contactDetail) => {
  if (
    !validateEmptyFields(contactDetail.emailAddress) ||
    !validateEmptyFields(contactDetail.contactNumber) ||
    !validateEmptyFields(contactDetail.location) ||
    !validateEmptyFields(contactDetail.instagramHandle)
  ) {
    console.log(errorMessages);
    return false;
  }
  return true;
};

exports.errorMessages = errorMessages;
exports.validateContactDetail = validateContactDetail;
