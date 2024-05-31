import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { formatPrice } from "@/utilities/priceUtils";
import ReactDatePicker from "react-datepicker";
import { Label } from "../ui/label";
import SeatSelection from "./SeatSelection";

const DialogBooking = ({
  busId,
  price,
  seatsAvailable,
  route,
  destination,
}) => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const { isLoggedIn, auth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const onSeatSelect = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!selectedSeat || !checkIn || !checkOut) {
      console.error("Incomplete booking data!");
      return;
    }

    const bookingData = {
      selectedSeat,
      checkIn,
      checkOut,
    };
    console.log(bookingData);
    sessionStorage.setItem("bookingData", JSON.stringify(bookingData));

    navigate(`/booking/${busId}/confirmation`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Book Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Select Seat</DialogTitle>
          <DialogDescription>Choose your preferred seat</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <SeatSelection
              onSeatSelect={onSeatSelect}
              seatsAvailable={seatsAvailable}
            />
          </div>
          <div className="flex flex-col border flex-shrink bg-slate-100 px-4 py-2 space-y-2">
            <div>
              <h3>Travel Details</h3>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Route:</p>
                <div className="pl-5 mt-4 flow-root">
                  {route.map((rute, index) => (
                    <ul key={index}>
                      <li className="text-sm mr-2 list-disc">{rute}</li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p className="font-medium">Destination:</p>
                <p className="text-sm">{destination}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <p className="mr-2 font-medium">Seat Number:</p>
              {selectedSeat ? (
                <>
                  <span className="text-sm">{selectedSeat}</span>
                </>
              ) : (
                <p className="text-sm">Please select the seat</p>
              )}
            </div>

            <form onSubmit={onSubmit}>
              <div className="flex items-center space-x-2">
                <Label htmlFor="checkIn" className="mr-2 text-md block">
                  Departure Date:
                </Label>
                <ReactDatePicker
                  required
                  selected={checkIn}
                  onChange={(date) => setCheckIn(date)}
                  selectsStart
                  startDate={checkIn}
                  endDate={checkOut}
                  placeholderText="Departure Date"
                  minDate={minDate}
                  maxDate={maxDate}
                  className="min-w-80%  bg-white p-2 focus:outline-none"
                  wrapperClassName="min-w-full"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="checkIn" className="mr-2 text-md block">
                  Return Date:
                </Label>
                <ReactDatePicker
                  selected={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  selectsStart
                  startDate={checkIn}
                  endDate={checkOut}
                  placeholderText="Return Date (Optional)"
                  minDate={minDate}
                  maxDate={maxDate}
                  className="min-w-80%  bg-white p-2 focus:outline-none"
                  wrapperClassName="min-w-full"
                />
              </div>
              <div className="flex items-center space-x-2 pb-2">
                <h4>Payment Details:</h4>
                <span>{formatPrice(price)}</span>
              </div>
              <input type="hidden" name="seatNumber" value={selectedSeat} />
              <Button type="submit">Confirm Booking</Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBooking;
