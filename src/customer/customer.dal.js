// src/customer/customer.dal.js
const customers = [];

const addCustomer = (customer) => {
  customers.push(customer);
  return customer;
};

const getCustomers = () => {
  return customers;
};

module.exports = { addCustomer, getCustomers };
