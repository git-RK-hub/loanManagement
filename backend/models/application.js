const mongoose = require("mongoose");

const loanApplicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    loan: {
      type: mongoose.Schema.ObjectId,
      ref: "Loan",
    },
    amount: {
      type: Number,
    },
    startDate: Date,
    endDate: Date,
    emi: Number,
    method: String,
  },
  {
    timestamps: true,
  }
);

const LoanApplication = mongoose.model(
  "LoanApplication",
  loanApplicationSchema
);

module.exports = LoanApplication;
