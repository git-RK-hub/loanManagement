const mongoose = require("mongoose");

const loanSchema = mongoose.Schema(
  {
    amount: {
      start: {
        type: Number,
        required: true,
      },
      end: {
        type: Number,
      },
    },
    category: {
      type: String,
      required: true,
    },
    interestRate: {
      type: Number,
    },
    tenure: {
      start: {
        type: Number,
        required: true,
      },
      end: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
