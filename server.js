require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const contact = require("./routes/contact");

const app = express();

app.use(express.json());

connectDB();

app.use("/contact", contact);

app.listen(process.env.PORT, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log("Server connected");
});
