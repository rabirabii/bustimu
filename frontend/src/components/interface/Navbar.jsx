import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import useSticky from "@/hooks/sticky";
import { useSelector } from "react-redux";
import UserAccountNavbar from "./UserAccountNavbar";
import useLogout from "@/hooks/useLogout"; // Implemented useLogout custom hook

const Navbar = () => {
  const { isAuth, user } = useSelector((state) => state.user);
  const isSticky = useSticky();
  const { logout } = useLogout(); // Using the useLogout custom hook

  const handleLogout = () => {
    logout(); // Calling the logout function from the useLogout hook
  };

  return (
    <header
      className={`bg-transparent z-50 ${
        isSticky ? "fixed left-0 top-0 w-full shadow-lg" : ""
      } bg-white opacity-90 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <img src={Logo} className="w-auto h-16" />
          <span className="sr-only">Rentalus Logo</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/search"
            className="mr-5 hover:text-gray-900 transition-colors duration-200 ease-in-out"
          >
            Search Bus
          </Link>
          <Link className="mr-5 hover:text-gray-900 transition-colors duration-200 ease-in-out">
            Second
          </Link>
          <Link className="mr-5 hover:text-gray-900 transition-colors duration-200 ease-in-out">
            Third
          </Link>
          <Link className="mr-5 hover:text-gray-900 transition-colors duration-200 ease-in-out">
            Fourth
          </Link>
        </nav>
        <div className="space-x-3">
          {isAuth ? (
            <>
              <UserAccountNavbar user={user} />
              <Button type="submit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <div>
              {/* Todo Auth */}
              <Link to="/sign-in">
                <Button className="mr-2 gap-2">Login</Button>
              </Link>
              <Link to="/sign-up">
                <Button>Register </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
