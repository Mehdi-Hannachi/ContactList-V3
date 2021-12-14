const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
});

module.exports = Contact = mongoose.model("contact", contactSchema);
