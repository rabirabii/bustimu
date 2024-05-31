const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const catchAsyncErrors = require("../middleware/catchAsyncError");
const { isAuth, isAdmin } = require("../middleware/auth");
const Bus = require("../database/Schema/bus");
const ErrorHandler = require("../utils/ErrorHandler");
const { default: Stripe } = require("stripe");

router.post(
  "/:busId/bookings/process",
  isAuth,
  catchAsyncErrors(async (req, res, next) => {
    const { amount } = req.body;
    const busId = req.params.busId;

    const bus = await Bus.findById(busId);
    if (!bus) {
      return next(new ErrorHandler("Bus not found", 404));
    }

    const totalCost = bus.price * amount;

    const paymentIntent = await Stripe.payment;
  })
);
