require("dotenv").config();

const server = require("./server.js");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  res.send(`===Now listening on port ${process.env.PORT}===`);
});
