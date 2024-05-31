const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncError");
const User = require("../database/Schema/user");
const jwt = require("jsonwebtoken");
// Token for Role User
exports.isAuth = catchAsyncError(async (req, res, next) => {
  try {
    // Check the secret key
    if (!process.env.JWT_SECRET_KEY) {
      return next(new ErrorHandler("JWT Secret key is not found", 404));
    }

    // Getting the token from the cookies
    const { token } = req.cookies;

    if (!token) {
      return next(new ErrorHandler("Auth Required", 501));
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      return next(new ErrorHandler("Invalid Token", 500));
    }

    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// Token for Admin
exports.isAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHandler(`${req.user.role} do not have access`));
    }
    next();
  };
};
