import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { MdTravelExplore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import "react-datepicker/dist/react-datepicker.css";

const Searchbar = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState();
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [route, setRoute] = useState();
  const [seatCount, setSeatCount] = useState();

  // Todo Logic Handle Submit

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  return (
    <form className="py-4 px-3 mb-16 -mt-24  rounded shadow-md grid grid-cols-2 bg-teal-100  lg:grid-cols-3 2xl:grid-cols-2 items-center gap-4">
      <div className="flex items-center flex-1 flex-row bg-white p-1">
        <input
          className="text-md border  w-full focus:ring-2 focus:ring-orange-200 focus:border-orange-400 focus:bg-transparent outline-none"
          placeholder="Departure from "
          value={route}
        />
      </div>
      <div className="flex flex-row items-center flex-1 bg-white  p-2">
        <MdTravelExplore className="mr-2" size={25} />
        <input
          placeholder="Where are you going?"
          className="text-md border  w-full focus:ring-2 focus:ring-orange-200 focus:border-orange-400 focus:bg-transparent outline-none"
          value={destination}
        />
      </div>
      <div>
        <DatePicker
          selected={checkIn}
          selectsStar
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Departure Date"
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassname="min-w-full"
          onChange={(date) => setCheckIn(date)}
        />
      </div>
      <div>
        <DatePicker
          selected={checkOut}
          selectsStar
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn ? checkIn : new Date()}
          maxDate={maxDate}
          placeholderText="Return Date"
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassname="min-w-full"
          onChange={(date) => setCheckOut(date)}
        />
      </div>
      <div className="flex gap-1">
        <Button>Search</Button>
        <Button>Clear</Button>
      </div>
    </form>
  );
};

export default Searchbar;
