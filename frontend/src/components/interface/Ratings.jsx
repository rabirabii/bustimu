import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const Ratings = ({ rating, size, color }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<AiFillStar key={i} size={size} color={color} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<BsStarHalf key={i} size={size * 0.85} color={color} />);
    } else {
      stars.push(<AiOutlineStar key={i} size={size * 0.9} color={color} />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default Ratings;
