// check if the input field is empty, null or undefined
const validateEmptyFields = (field) => {
  let validated = true;
  if (field === undefined || field === null || field.length === 0) {
    validated = false;
  }
  return validated;
};
// check if the input value matches length criteria
const validateLength = (field, minLength, maxLength) => {
  let validated = true;
  if (field.length < minLength || field.length > maxLength) {
    validated = false;
  }
  return validated;
};

// check if entered inputt is an email address
const validateEmailAddress = (emailAddress) => {
  let validated = true;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
    validated = false;
  }
  return validated;
};

// check if string only contains numbers
const validateNumbers = (inputNumber) => {
  let validated = true;
  if (!/^\d+$/.test(inputNumber)) {
    validated = false;
  }
  return validated;
};

// check if username is valid
const validateInstagramHandle = (instagramHandle) => {
  let validated = true;
  if (!/^[a-z0-9_.]+$/.test(instagramHandle)) {
    validated = false;
  }
  return validated;
};

const validateContactDetail = (contactDetail) => {
  let validated = true;
  if (
    !validateEmptyFields(contactDetail.emailAddress) ||
    !validateEmptyFields(contactDetail.contactNumber) ||
    !validateEmptyFields(contactDetail.location) ||
    !validateEmptyFields(contactDetail.instagramHandle)
  ) {
    //   check if any of the input field is empty undefined or null
    validated = false;
    return false;
  }
  if (
    !validateLength(contactDetail.emailAddress.replace(/\s/g, ""), 3, 320) ||
    !validateLength(contactDetail.contactNumber.replace(/\s/g, ""), 10, 13) ||
    !validateLength(contactDetail.location.replace(/\s/g, ""), 10, 50) ||
    !validateLength(contactDetail.instagramHandle.replace(/\s/g, ""), 4, 30)
  ) {
    //   check if any of the input field exceeds or preceeds allowed length
    validated = false;
    return false;
  }
  if (!validateEmailAddress(contactDetail.emailAddress)) {
    //   check if email address entered is valid
    validated = false;
    return false;
  }
  if (!validateNumbers(contactDetail.contactNumber)) {
    //   check if contact number entered is valid
    validated = false;
    return false;
  }
  if (!validateInstagramHandle(contactDetail.instagramHandle)) {
    // check if instagram handle is valid
    validated = false;
    return false;
  }

  //   validate timings
  if (validateEmptyFields(contactDetail.timings)) {
    if (
      !validateEmptyFields(contactDetail.openingTime.hh) ||
      !validateEmptyFields(contactDetail.openingTime.mm) ||
      !validateEmptyFields(contactDetail.openingTime.cycle) ||
      !validateEmptyFields(contactDetail.closingTime.hh) ||
      !validateEmptyFields(contactDetail.closingTime.mm) ||
      !validateEmptyFields(contactDetail.closingTime.cycle)
    ) {
      validated = false;
    }
    if (
      !validateLength(contactDetail.openingTime.hh, 1, 2) ||
      !validateLength(contactDetail.openingTime.mm, 1, 2) ||
      !validateLength(contactDetail.openingTime.cycle, 1, 2) ||
      !validateLength(contactDetail.closingTime.hh, 2, 2) ||
      !validateLength(contactDetail.closingTime.mm, 1, 2) ||
      !validateLength(contactDetail.closingTime.cycle, 2, 2)
    ) {
      validated = false;
    }
    if (contactDetail.openingTime.hh < 1 || contactDetail.openingTime.hh > 12) {
      validated = false;
    }
    if (contactDetail.openingTime.mm < 0 || contactDetail.openingTime.mm > 59) {
      validated = false;
    }
    if (contactDetail.closingTime.hh < 1 || contactDetail.closingTime.hh > 12) {
      validated = false;
    }
    if (contactDetail.closingTime.mm < 0 || contactDetail.closingTime.mm > 59) {
      validated = false;
    }
    if (
      contactDetail.openingTime.cycle.toUpperCase() === "AM" ||
      contactDetail.openingTime.cycle.toUpperCase() === "PM"
    ) {
      validated = true;
    } else {
      validated = false;
    }
    if (
      contactDetail.closingTime.cycle.toUpperCase() === "AM" ||
      contactDetail.closingTime.cycle.toUpperCase() === "PM"
    ) {
      validated = true;
    } else {
      validated = false;
    }
  }

  return validated;
};

// validate item Price, item name and item category

const validateItem = (item) => {
  let validated = true;
  if (
    !validateEmptyFields(item.itemCategory) ||
    !validateEmptyFields(item.itemName) ||
    !validateEmptyFields(item.itemPrice)
  ) {
    //   check if any of the input field is empty undefined or null
    validated = false;
    return false;
  }
  if (
    !validateLength(item.itemCategory.replace(/\s/g, ""), 5, 20) ||
    !validateLength(item.itemName.replace(/\s/g, ""), 5, 20) ||
    !validateLength(item.itemPrice.replace(/\s/g, ""), 1, 5)
  ) {
    //   check if any of the input field exceeds or preceeds allowed length
    validated = false;
    return false;
  }
  return validated;
};

const validateMenu = (category, name, price) => {
  let validated = true;
  if (
    !validateEmptyFields(category) ||
    !validateEmptyFields(name) ||
    !validateEmptyFields(price)
  ) {
    validated = false;
    return false;
  }
  if (
    category.toLowerCase() !== "hot beverages" &&
    category.toLowerCase() !== "iced beverages" &&
    category.toLowerCase() !== "refresher" &&
    category.toLowerCase() !== "food"
  ) {
    console.log("reached");
    validated = false;
    return false;
  }
  if (
    !validateLength(category.replace(/\s/g, ""), 3, 20) ||
    !validateLength(name.replace(/\s/g, ""), 3, 20) ||
    !validateLength(price.replace(/\s/g, ""), 1, 5)
  ) {
    console.log(category.toLowerCase());
    //   check if any of the input field exceeds or preceeds allowed length
    validated = false;
    return false;
  }
  return validated;
};

exports.validateMenu = validateMenu;
exports.validateItem = validateItem;
exports.validateContactDetail = validateContactDetail;
