import React, { useState } from "react";
import { useParams } from "react-router-dom";
import busData from "@/utilities/dataDummy";
import { formatPrice } from "@/utilities/priceUtils";
import { useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import { Button } from "../ui/button";

const PaymentForm = () => {
  const { busId } = useParams();

  const { isAuth } = useSelector((state) => state.user);

  const bus = busData.data.find((bus) => bus.id === parseInt(busId));
  const seatNumberString = sessionStorage.getItem("bookingData");
  const bookingData = seatNumberString ? JSON.parse(seatNumberString) : null;

  const { selectedSeat, checkIn, checkOut } = bookingData;

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic here
    // You can access the selected dates, seat number, etc. from the state
    console.log("Departure Date:", checkIn);
    console.log("Return Date:", checkOut);
    console.log("Seat Number:", seatNumber);
    console.log("Total Amount:", bus ? formatPrice(bus.price) : "Loading...");

    // Optionally, you can redirect the user to the payment page or perform other actions
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="border shadow-md p-4 bg-gray-200">
        <h3 className="text-md font-bold mb-4">Reservation Form</h3>
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Departure Date
            </label>
            <ReactDatePicker
              required
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              selectsStart
              endDate={checkOut}
              startDate={checkIn}
              placeholderText="Departure Date"
              minDate={minDate}
              maxDate={maxDate}
              className="min-w-full bg-white p-2 focus:outline-none"
              wrapperClassName="min-w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Return Date
            </label>
            <ReactDatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              selectsStart
              placeholderText="Return Date"
              endDate={checkOut}
              startDate={checkIn}
              minDate={minDate ? checkIn : new Date()}
              maxDate={maxDate}
              className="min-w-full bg-white p-2 focus:outline-none"
              wrapperClassName="min-w-full"
            />
          </div>
          <div>
            <label className="mr-4 text-sm font-medium text-gray-700">
              Seats Number:
            </label>
            <input
              className="w-full p-1 focus:outline-none font-bold"
              value={selectedSeat !== null ? selectedSeat : "Something error"}
            />
          </div>
          <label className="mr-4 text-sm font-medium text-gray-700">
            Total Amount:
          </label>
          <h2 className="text-md text-bold">
            {" "}
            {bus ? `${formatPrice(bus.price)}` : "Loading..."}
          </h2>
          <Button className="mt-4">Proceed to Pay</Button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
