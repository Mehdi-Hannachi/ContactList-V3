const express = require("express");
const { models } = require("mongoose");
const { addContact } = require("../controllers/contact.controller");

const Router = express.Router();

Router.post("/addContact", addContact);

module.exports = Router;
