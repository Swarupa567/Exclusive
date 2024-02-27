"use client";
import React, { useState } from "react";
// import { Header } from "@/types/site";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    <Sheet open={isOpen}>
      <SheetTrigger></SheetTrigger>
      <SheetContent></SheetContent>
    </Sheet>;
  };

  return (
    <div className="bg-white text-black w-full">
      <div className="flex justify-between items-center gap-4 w-full pt-4 md:pt-10 px-2.5 lg:px-[130px]">
        <div className="flex gap-4 ">
          <Menu
            className="block lg:hidden mt-1 md:mt-0 cursor-pointer"
            onClick={handleClick}
          />
          <p className="font-bold text-[#000] text-2xl">Exclusive</p>
        </div>
        <div className=" justify-evenly gap-8 text-[#000] hidden lg:flex">
          <p className=" hover:underline">Home</p>
          <p className=" hover:underline">Contact</p>
          <p className=" hover:underline">About</p>
          <p className=" hover:underline">Sign Up</p>
        </div>
        <div className="flex justify-evenly xs:flex-col gap-6">
          <input
            placeholder="what are you searching for?"
            className="border-2 border-black rounded-md px-3 py-2 lg:block hidden"
          />
          <Search
            size={20}
            className="relative right-14 items-center top-3 lg:block hidden"
          />
          <div className="flex gap-4 -ml-12 pt-0 md:pt-2 pr-9">
            <Heart />
            <ShoppingCart />
          </div>
        </div>
      </div>
      <div className=" lg:hidden flex justify-center pt-8 lg:pt-0 p-4 lg:p-0">
        <input
          placeholder="what are you searching for?"
          className="border-2 border-black rounded-md px-3 py-2 w-full"
        />
        <Search
          size={20}
          className="relative right-8 md:right-12 items-center lg:top-1 top-3"
        />
      </div>
      <hr className="relative top-2 border-1 border-gray-100" />
    </div>
  );
}

export default NavBar;
