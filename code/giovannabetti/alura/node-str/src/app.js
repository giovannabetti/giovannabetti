"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

// Connect to database
mongoose.connect('mongodb+srv://balta:balta@nodestore.8em4e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Loading models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Loading routes
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");
const customerRoute = require("./routes/customer-route");
const orderRoute = require("./routes/order-route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/customers", customerRoute);
app.use("/orders", orderRoute);

module.exports = app;
