const Contact = require("../models/Contact");

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


