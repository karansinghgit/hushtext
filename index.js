const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();
app.use(express.json());

const atlasURI = process.env.ATLAS_URI;

mongoose.connect(atlasURI, {
  useNewUrlParser: true,
});
app.listen(6000, () => {
  console.log("Server Running on Port 6000!");
});
