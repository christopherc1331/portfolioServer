require("dotenv").config();

const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());
server.get("/", (req, res) => {
  res.send(`===Now listening on port ${process.env.PORT}===`);
});
