const asyncHandler = require("express-async-handler");
const Loan = require("../models/loan");
const LoanApplication = require("../models/application");

const addLoan = asyncHandler(async (req, res) => {
  const amount = {
    start: req.body.startAmount,
    end: req.body.endAmount,
  };
  const tenure = {
    start: req.body.startTenure,
    end: req.body.endTenure,
  };
  const { category, interestRate } = req.body;

  const loan = await Loan.create({
    amount,
    category,
    tenure,
    interestRate,
  });
  if (loan) {
    res.json(loan);
  } else {
    res.status(404);
    throw new Error("Something went wrong");
  }
});

const getLoans = asyncHandler(async (req, res) => {
  const loans = await Loan.find({});
  res.json(loans);
});

const getLoanById = asyncHandler(async (req, res) => {
  const loan = await Loan.findById(req.params.id);
  if (loan) {
    res.json(loan);
  } else {
    res.status(404);
    throw new Error("Loan not found");
  }
});

const getLoanApplications = asyncHandler(async (req, res) => {
  const loans = await LoanApplication.find({}).populate({
    path: "user",
    select: "_id name contact",
  });
  res.json(loans);
});

const getLoanApplicationsById = asyncHandler(async (req, res) => {
  const loan = await LoanApplication.findById(req.params.id);
  if (loan) {
    res.json(loan);
  } else {
    res.status(404);
    throw new Error("Loan not found");
  }
});

const getUserLoansApplication = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const loans = await LoanApplication.find({ user: userId }).populate({
    path: "loan",
    select: "category -_id",
  });
  if (loans) {
    res.json(loans);
  } else if (loans.length === 0) {
    res.json("No loans yet taken");
  } else {
    res.status(404);
    throw new Error("Not found");
  }
});

const createLoanApplication = asyncHandler(async (req, res) => {
  let loan = await LoanApplication.findOne({
    $and: [{ user: req.user._id }, { loan: req.body.loanId }],
  });
  if (loan) {
    res.status(404);
    throw new Error("Already applied");
  }
  console.log(req.body);
  loan = await LoanApplication.create({
    user: req.user._id,
    loan: req.body.loanId,
    amount: req.body.amount,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    emi: req.body.emi,
    method: req.body.method,
  });
  if (loan) {
    res.json(loan);
  } else {
    res.status(404);
    throw new Error("Something went wrong");
  }
});

module.exports = {
  createLoanApplication,
  getLoanApplications,
  getLoanApplicationsById,
  getUserLoansApplication,
  addLoan,
  getLoans,
  getLoanById,
};
