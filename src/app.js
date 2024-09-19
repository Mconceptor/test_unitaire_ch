// src/app.js
const express = require("express");
const customerRouter = require("./customer/customer.router");
const app = express();

app.use(express.json());
app.use(customerRouter);

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}
