// src/customer/customer.router.js
const express = require("express");
const { addCustomer, getCustomers } = require("./customer.dal");
const router = express.Router();

router.post("/customer", (req, res) => {
  const customer = addCustomer(req.body);
  res.status(201).json(customer);
});

router.get("/customer", (req, res) => {
  res.json(getCustomers());
});

module.exports = router;
