const Contact = require("../models/Contact");
const errors = require("../json/errors");
const successes = require("../json/successes");

exports.getContact = async (req, res, next) => {
  let contact;

  try {
    contact = await Contact.contact.find();
  } catch (err) {
    return res.json(errors.error.fatalError);
  }
  return res.json(contact);
};
exports.postContact = async (req, res, next) => {
  let contact;
  const { emailAddress, contactNumber, location, instagramHandle, timing } =
    req.body;

  try {
    contact = await Contact.contact.find();
  } catch (err) {
    return res.json(errors.error.fatalError);
  }

  let newTiming = new Contact.timing({
    day: timing.day,
    openingTime: timing.openingTime,
    closingTime: timing.closingTime,
  });
  if (contact === undefined || contact === null || contact.length === 0) {
    newContactInformation = new Contact.contact({
      emailAddress: emailAddress,
      contactNumber: contactNumber,
      location: location,
      instagramHandle: instagramHandle,
      timings: [newTiming],
    });
    try {
      await newContactInformation.save();
    } catch (err) {
      return res.json(errors.error.fatalError);
    }
    return res.json(successes.success.added);
  }
  return res.json(errors.error.itemAlreadyExistsError);
};

exports.patchContact = async (req, res, next) => {
  let contact,
    timings = [];
  const { emailAddress, contactNumber, location, instagramHandle, timing } =
    req.body;

  try {
    contact = await Contact.contact.find();
  } catch (err) {
    return res.json(errors.error.fatalError);
  }
  timings = contact[0].timings;

  let newTiming = new Contact.timing({
    day: timing.day,
    openingTime: timing.openingTime,
    closingTime: timing.closingTime,
  });

  console.log(newTiming.day);
  if (timings.find((t) => t.day === newTiming.day) !== undefined) {
    timings = timings.filter((t) => t.day !== newTiming.day);
  }
  timings.push(newTiming);

  let newContactInformation = new Contact.contact({
    emailAddress: emailAddress,
    contactNumber: contactNumber,
    location: location,
    instagramHandle: instagramHandle,
    timings: timings,
  });

  try {
    await Contact.contact.replaceOne(
      { emailAddress: emailAddress },
      {
        emailAddress: newContactInformation.emailAddress,
        contactNumber: newContactInformation.contactNumber,
        location: newContactInformation.location,
        instagramHandle: newContactInformation.instagramHandle,
        timings: newContactInformation.timings,
      }
    );
  } catch (error) {
    return res.json(errors.error.fatalError);
  }

  return res.json(successes.success.updated);
};
exports.deleteContact = (req, res, next) => {};
