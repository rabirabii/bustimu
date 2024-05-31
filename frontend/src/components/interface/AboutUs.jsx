import React from "react";
import Logo from "../../assets/Logo.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 justify-center bg-gray-100 py-12 px-6 md:px-12">
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={Logo} alt="Bus" className="w-full" />
      </div>
      <div className="md:w-1/2 md:pr-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
          About Us
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
          At Timu (Ticket Mudah), we're passionate about revolutionizing the way
          you travel by bus. Founded with a vision to simplify the booking
          process and enhance the overall experience for travelers, Timu is more
          than just a ticketing platform – it's your trusted companion on every
          journey.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
          Our mission is simple: to provide a seamless and stress-free booking
          experience, allowing you to focus on the excitement of your
          adventures. With a team dedicated to innovation and customer
          satisfaction, we've curated a platform that prioritizes convenience,
          reliability, and affordability.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
          What sets us apart is our unwavering commitment to putting our
          customers first. From our intuitive interface to our responsive
          customer support, every aspect of Timu is designed to enhance your
          travel experience.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
          Whether you're a frequent traveler or embarking on your first bus
          journey, we're here to make it memorable for all the right reasons.
          Join us on this journey and discover the joy of hassle-free travel
          with Timu. Because with us, every trip is an opportunity for
          adventure.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
