import React from "react";
import Logo from "../../../assets/Logo.png";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleUser, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import useLogout from "@/hooks/useLogout";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Navbar = () => {
  const { isAuth, user } = useSelector((state) => state.user);
  const { logout } = useLogout(); // Using the useLogout custom hook

  const handleLogout = () => {
    logout(); // Calling the logout function from the useLogout hook
  };

  return (
    <header className="sticky top-1 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-md lg:gap-6">
        <Link to="/dashboard" className=" flex items-center gap-2 text-lg">
          <img className="w-auto h-12" src={Logo} />
        </Link>
        <Link className="text-foreground transition-colors hover:text-foreground">
          Dashboard
        </Link>
        <Link className="text-muted-foreground transition-colors hover:text-foreground">
          Orders
        </Link>
        <Link className="text-muted-foreground transition-colors hover:text-foreground">
          {" "}
          Bus
        </Link>
        <Link className="text-muted-foreground transition-colors hover:text-foreground">
          {" "}
          Customers
        </Link>
        <Link className="text-muted-foreground transition-colors hover:text-foreground">
          Analytics
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="w-6 h-6" />
            <span className="sr-only">Hamburger menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link to="/dashboard" className="flex items-center gap-2">
              <img src={Logo} className="w-auto h-12" />
            </Link>
            <Link className="text-foreground transition-colors hover:text-foreground">
              Dashboard
            </Link>
            <Link className="text-muted-foreground transition-colors hover:text-foreground">
              Orders
            </Link>
            <Link className="text-muted-foreground transition-colors hover:text-foreground">
              {" "}
              Bus
            </Link>
            <Link className="text-muted-foreground transition-colors hover:text-foreground">
              {" "}
              Customers
            </Link>
            <Link className="text-muted-foreground transition-colors hover:text-foreground">
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search . . ."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Hello, {user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
