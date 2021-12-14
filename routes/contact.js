const express = require("express");
const {
  addContact,
  getContacts,
} = require("../controllers/contact.controller");

const Router = express.Router();

Router.post("/addContact", addContact);
Router.get("/getContacts", getContacts);

module.exports = Router;
