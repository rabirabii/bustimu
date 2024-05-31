const express = require("express");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
const Rute = require("../database/Schema/rute");

// Create Rute
router.post(
  "/create-route",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { pemberhentian, destinasi, jadwalBerangkat } = req.body;

      if (!pemberhentian || !destinasi || !jadwalBerangkat) {
        return next(
          new ErrorHandler("Please Fill Route and Destination Form", 401)
        );
      }

      // Handle both HH:MM and single-digit hour formats:
      let formattedJadwal;
      if (jadwalBerangkat.includes(":")) {
        // Check for HH:MM format
        const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
        if (!timeRegex.test(jadwalBerangkat)) {
          return next(
            new ErrorHandler(
              "Invalid jadwal format. Must be HH:MM (e.g., 18:30)",
              400
            )
          );
        }
        formattedJadwal = jadwalBerangkat; // Use the provided HH:MM format
      } else {
        // Single-digit hour case (e.g., "13")
        const hours = jadwalBerangkat.padStart(2, "0"); // Ensure two-digit format (e.g., "08")
        formattedJadwal = `${hours}:00`; // Append ":00" for consistent storage
      }

      const newRoute = new Rute({
        pemberhentian,
        destinasi,
        jadwalBerangkat: formattedJadwal,
      });

      await newRoute.save();
      res.status(201).json({
        success: true,
        message: "Route created successfully",
        data: newRoute,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
