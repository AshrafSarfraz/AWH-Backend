const express = require("express");
const {
  registerUser,
  requestOtp,
  verifyOtpAndLogin,
} = require("../controllers/phoneAuth") ;

const router = express.Router();

// yahan sirf path + function mapping hai
router.post("/register", registerUser);
router.post("/login/request-otp", requestOtp);
router.post("/login/verify-otp", verifyOtpAndLogin);




module.exports = router;
