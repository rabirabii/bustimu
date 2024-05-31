const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const User = require("../database/Schema/user");
const { isAuth, isAdmin } = require("../middleware/auth");
const crypto = require("crypto");
const ErrorHandler = require("../utils/ErrorHandler");
const createActivationToken = require("../utils/activationToken");
const sendMail = require("../utils/sendMail");
const catchAsyncError = require("../middleware/catchAsyncError");
router.post(
  "/create-user",
  catchAsyncError(async (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      const userEmail = await User.findOne({ email });

      if (userEmail) {
        return next(new ErrorHandler("User Already exists", 401));
      }

      const user = {
        name: name,
        email: email,
        password: password,
      };

      const activationToken = createActivationToken(user);

      const activationUrl = `${process.env.FRONTEND_URL}/activation/${activationToken}`;

      try {
        await sendMail({
          email: user.email,
          subject: "Activitation Account",
          html: `
        <html lang="en">
        <head>
        <meta charset="utf-8" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Timu! - Activate Your Account</title>

        </head>
        <body>
        <div class="container">
        <h1>Welcome to Timu!</h1>
        <a href="${activationUrl}">Activate your Account</a>
        <p>**Please note:** This activation link is valid for 5 minutes. If you encounter any diffulties, please feel free to contact our Support team at <a href="mailto:${process.env.SUPPORT_EMAIL}"> ${process.env.SUPPORT_EMAIL} </a> </p>
       <p>Enjoy your Trip</p>
        <p>The Timu team </p>
        </div>
        </body>
        </html>
        `,
        });

        res.status(201).json({
          success: true,
          message: `Please check your email :- ${user.email} to activate your account`,
        });
      } catch (error) {
        return next(new ErrorHandler("Something Wrong to send the email", 500));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
// Active user
router.post(
  "/activation",
  catchAsyncError(async (req, res, next) => {
    try {
      const { activation_Token } = req.body;

      const newUser = jwt.verify(
        activation_Token,
        process.env.ACTIVATION_SECRET
      );

      if (!newUser) {
        return next(new ErrorHandler("Invalid Token", 401));
      }

      const { name, email, password } = newUser;

      // Generate random user identifier
      const userIdentifier = crypto.randomBytes(20).toString("hex");
      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({
          name,
          email,
          password,
          userIdentifier,
        });
      } else {
        return next(new ErrorHandler("User Already Exists", 401));
      }

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Login User
router.post(
  "/login",
  catchAsyncError(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(
          new ErrorHandler("Please enter corerct email and password", 400)
        );
      }

      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return next(new ErrorHandler("User does not exists", 404));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(new ErrorHandler("Password is not valid", 401));
      }

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Logout
router.get(
  "/logout",
  catchAsyncError(async (req, res, next) => {
    try {
      res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
      res.status(201).json({
        success: true,
        message: "Log out successfully",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Loaf user
router.get(
  "/loadUser",
  isAuth,
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      if (!user) {
        return next(new ErrorHandler("User not found", 404));
      }

      res.status(201).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Update user info
router.put(
  "/update-user-info",
  isAuth,
  catchAsyncError(async (req, res, next) => {
    try {
      const { email, name, password, phoneNumber } = req.body;
      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        return next(new ErrorHandler("User not found", 404));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(new ErrorHandler("Password is not valid", 401));
      }

      user.name = name;
      user.phoneNumber = phoneNumber;

      await user.save();

      res.status(201).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Update user Address
router.put(
  "/update-user-address",
  isAuth,
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);

      const sameTypeAddress = user.address.find(
        (address) => address.addressType === req.body.addressType
      );

      if (sameTypeAddress) {
        return next(
          new ErrorHandler(`${req.body.addressType} address already exists`)
        );
      }

      const existsAddress = user.address.find(
        (address) => address._id === req.body._id
      );
      if (existsAddress) {
        Object.assign(existsAddress, req.body);
      } else {
        user.address.push(req.body);
      }

      await user.save();

      res.status(201).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Delete user's address
router.delete(
  "/delete-user-address/:id",
  isAuth,
  catchAsyncError(async (req, res, next) => {
    try {
      const userId = req.user.id;
      const addressId = req.params.id;

      await User.updateOne(
        {
          id: userId,
        },
        { $pull: { address: { _id: addressId } } }
      );

      const user = await User.findById(userId);
      if (!user) {
        return next(new ErrorHandler("User not found", 404));
      }

      res.status(201).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Update password
router.put(
  "/update-password",
  isAuth,
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).select("+password");

      const isPasswordValid = await user.comparePassword(req.body.oldPassword);

      if (!isPasswordValid) {
        return next(new ErrorHandler("Old password is not valid", 401));
      }

      if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 401));
      }
      user.password = req.body.newPassword;

      await user.save();

      res.status(200).json({
        success: true,
        message: "Password updated successfully",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Find single user information
router.get(
  "/user-info/:userIdentifier",
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findOne(
        {
          userIdentifier: req.params.userIdentifier,
        },
        {
          _id: 0,
        }
      );

      res.status(201).json({
        success: true,
        user,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// Get all users for Admin
router.get(
  "/get-all-users",
  isAuth,
  isAdmin("Admin"),
  catchAsyncError(async (req, res, next) => {
    try {
      const users = await User.find().sort({
        createdAt: -1,
      });

      res.status(201).json({
        success: users.length > 0,
        users,
      });
    } catch (error) {}
  })
);

// Delete Users
router.delete(
  "/delete-user/:id",
  isAuth,
  isAdmin("Admin"),
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return next(new ErrorHandler("User not found", 404));
      }

      await User.findOneAndDelete(req.params.id);

      res.status(201).json({
        success: true,
        message: "User deleted successfully",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
