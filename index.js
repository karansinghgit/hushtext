const express = require("express"); //server side framework 
const app = express();
const mongoose = require("mongoose"); // ODM library for MongoDb and Nodejs.  It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

require("dotenv").config();  // Allows you to separate secrets from your source code

// middlewares
const bodyparser = require('body-parser');  //middleware to  extract the entire body portion of an incoming request stream and exposes it on 
const cors = require('cors'); // Cross orgin Resource Sharing

// PORT
const port = process.env.PORT||6000;

// User Routes
const userRouter = require('./routes/userroutes');

// middleware setup 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false}))
app.use(cors());
app.use(userRouter);

// mongoDB connection
const atlasURI = process.env.ATLAS_URI;

// Connection with MongeDB
mongoose.connect(atlasURI, {
  useNewUrlParser: true,
});

const conn = mongoose.connection;

conn.on('connected',()=>{
    console.log('MongoDB connected')
});

conn.on('error',(err)=>{
    if(err)
    console.log(err)
});

app.listen(port, () => {
  console.log("Server running on port 6000!");
});
