import React from "react";

const BookingDetails = ({ bus, checkIn, checkOut, seatSelected }) => {
  const parsedCheckIn = new Date(checkIn);
  const parsedCheckOut = new Date(checkOut);
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-b py-2">
        Bus Details:
        <div className="font-semibold">{`${bus.brandBus} , ${
          bus.destination
        }, ${bus.route.join(" to ")}, ${bus.departureTime} , ${
          bus.busType
        }`}</div>
      </div>
      <div className="flex justify-between">
        <div>
          Departure Date
          <div className="font-bold">
            {parsedCheckIn instanceof Date ? parsedCheckIn.toDateString() : "-"}
          </div>
        </div>
        <div>
          Return Date
          <div className="font-bold">
            {parsedCheckOut instanceof Date
              ? parsedCheckOut.toDateString()
              : "-"}
          </div>
        </div>
      </div>
      <div>
        Seat Number
        <div className="font-bold">{seatSelected}</div>
      </div>
    </div>
  );
};

export default BookingDetails;
