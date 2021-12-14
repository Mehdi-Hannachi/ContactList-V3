const Contact = require("../models/Contact");

/******************************  Add contact ******************* */

exports.addContact = async (req, res) => {
  const newContact = new Contact({ ...req.body });

  try {
    await newContact.save();

    res.status(201).json({ msg: "Contact added successfully" });
  } catch (error) {
    console.log("adding contact failed", error);

    res.status(401).json({ msg: "Adding contact failed" });
  }
};

/********************************Get all Contacts ************************* */

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();

  try {
    res.status(202).json({ contacts });
  } catch (error) {
    console.log("get contacts failed", error);
    res.status(402).json({ msg: "Fetch contacts failed" });
  }
};
