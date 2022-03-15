// const { serverly } = require("file-loader");
require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");

const userRoutes = require("./routes/users-routes");

const mongoose = require("mongoose");

const server = express();


server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers', 
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
  });
  
  server.use("/api/users", userRoutes);
  
  server.use((req, res, next) => {
    const error = new HttpError("Could not find this route", 404);
    throw error;
  });
  
  server.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "An unknown error occurred!" });
  });
  
  mongoose.connect(process.env.DB_CONNECTION).then(() => {
    server.listen(5000);
  }).catch((error) => {
    console.log(error);
  });