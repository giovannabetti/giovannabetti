"use strict";
const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");

exports.create = async (data) => {
  let customer = new Customer(data);
  await customer.save();
};
