// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");

// DB Setup
mongoose.connect(
  "mongodb+srv://pouya:kilkil123@cluster0-ofasl.mongodb.net/test?retryWrites=true&w=majority",
  function(error) {
    if (!error) {
      console.log("succesfully connected");
    }
  }
);

// App Setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup

// if there is an environment variable for port, just go ahead and use it or else use 3090
const port = process.env.PORT || 3090;

// http is a low-level Node library.
const server = http.createServer(app);
server.listen(3090);
console.log("server listening on port", port);
