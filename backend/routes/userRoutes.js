const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
  getUserById,
} = require("../controller/userController");
const protect = require("../middleware/authMiddleware");

router.route("/").post(registerUser).get(protect, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/:id").get(protect, getUserById);

module.exports = router;
