const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  addLoan,
  getLoans,
  getLoanById,
  getLoanApplications,
  getLoanApplicationsById,
  getUserLoansApplication,
  createLoanApplication,
} = require("../controller/loanController");

router.route("/my-application").get(protect, getUserLoansApplication);
router.route("/application/:id").get(getLoanApplicationsById);
router
  .route("/application")
  .get(getLoanApplications)
  .post(protect, createLoanApplication);
router.route("/:id").get(getLoanById);
router.route("/").get(getLoans).post(addLoan);

module.exports = router;
