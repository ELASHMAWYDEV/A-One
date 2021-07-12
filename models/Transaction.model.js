const mongoose = require("mongoose");
const { ServiceSchema } = require("./Service.model");
const { EmployeeSchema } = require("./Employee.model");

const CashierSchema = new mongoose.Schema({
  name: String,
});

const ExtraServiceSchema = new mongoose.Schema({
  amount: Number,
  description: String,
});

const TransactionSchema = new mongoose.Schema({
  services: {
    type: [ServiceSchema],
    required: true,
    ref: "Service",
  },
  employee: {
    type: EmployeeSchema,
    required: true,
    ref: "Employee",
  },
  cashier: {
    type: CashierSchema,
    required: true,
    ref: "User",
  },
  extraService: {
    type: ExtraServiceSchema,
  },
  total: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model(
  "Transaction",
  TransactionSchema,
  "transactions"
);
