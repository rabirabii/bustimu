import AboutUs from "@/components/interface/AboutUs";
import BookingSteps from "@/components/interface/BookingSteps";
import CarCard from "@/components/interface/CarCard";
import Features from "@/components/interface/Features";
import Hero from "@/components/interface/Hero";
import Searchbar from "@/components/interface/Searchbar";
import Sponsor from "@/components/interface/Sponsor";
import Testimonial from "@/components/interface/Testimonial";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Hero />

      <Sponsor />
      <BookingSteps />
      <AboutUs />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Homepage;
