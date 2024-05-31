import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SeatSelection = ({ onSeatSelect, seatsAvailable }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
    onSeatSelect(seatNumber);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 border space-x-1 mx-4">
      {[...Array(seatsAvailable).keys()].map((number) => (
        <Button
          key={number}
          className={`w-6 h-6 ${
            selectedSeat === number + 1 ? "bg-green-500" : "bg-gray-200"
          }`}
          onClick={() => handleSeatClick(number + 1)}
        >
          {number + 1}
        </Button>
      ))}
    </div>
  );
};

export default SeatSelection;
