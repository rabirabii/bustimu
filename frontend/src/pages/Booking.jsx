import React, { useState } from "react";
import { useParams } from "react-router-dom";
import busData from "@/utilities/dataDummy";
import { formatPrice } from "@/utilities/priceUtils";
import { useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";

import BookingDetails from "@/components/interface/BookingDetails";
import BookingForm from "@/components/interface/BookingForm";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);
console.log(stripePromise);
const Booking = () => {
  const { busId } = useParams();

  const { isAuth, user } = useSelector((state) => state.user);

  const bus = busData.data.find((bus) => bus.id === parseInt(busId));
  const seatNumberString = sessionStorage.getItem("bookingData");
  const bookingData = seatNumberString ? JSON.parse(seatNumberString) : null;

  const { selectedSeat, checkIn, checkOut } = bookingData;
  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
      <BookingDetails
        bus={bus}
        seatSelected={selectedSeat}
        checkIn={checkIn}
        checkOut={checkOut}
      />
      <Elements stripe={stripePromise}>
        <BookingForm user={user} />
      </Elements>
    </div>
  );
};

export default Booking;
