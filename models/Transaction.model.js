const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  services: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Service"
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Employee"
  },
  cashier: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  total: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    default: Date.now()
  }
});


module.exports = mongoose.model("Transaction", TransactionSchema, "transactions");