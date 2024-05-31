import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const UserAccountNavbar = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible z-50">
        <Button size="sm" className="relative ">
          My Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-60 z-50" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium text-base text-black">
              Hello, {user.name}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            className="text-base font-medium text-gray-900 hover:text-blue-500 p-2 block"
            to="/profile"
          >
            Profile Page
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNavbar;
