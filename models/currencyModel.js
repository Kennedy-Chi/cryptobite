const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
  symbol: String,
  name: {
    type: String,
    unique: [true, "This currency already exist"],
  },
  totalWithdrawal: {
    type: Number,
    default: 0,
  },
  totalDeposit: {
    type: Number,
    default: 0,
  },
  status: {
    type: Boolean,
    default: false,
  },

  address: String,
  description: String,
  time: Number,
  paymentMethod: String,
});

const Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;
