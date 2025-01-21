import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white min-w-min">

      {/* main div */}
      <div className="md:flex justify-center items-center py-10 space-y-8 md:space-y-0 px-6">
        <Link href={"/"}><h3 className="font-jakarta font-bold text-b1 text-[32px]">MORENT</h3></Link>

        {/* input field */}
        <div className="flex border border-gray-300 rounded-lg md:rounded-full md:w-auto lap:w-[492px] md:ml-16 py-1">
          <Button variant={"ghost"} className="rounded-full">
            <Image
              src={"/icons/search.svg"}
              alt="search icon"
              width={24}
              height={24}
            />
          </Button>
          <Input
            placeholder="Search something here"
            className="font-jakarta text-sm border-none shadow-none focus-visible:ring-0"
          />
          <Button variant={"ghost"} className="rounded-full">
            <Image
              src={"/icons/settings.svg"}
              alt="settings icon"
              width={24}
              height={24}
            />
          </Button>
        </div>

        {/* icons */}
        <div className="flex items-center ml-auto lap:ml-[408px] md:gap-5">
          <Button variant={"ghost"} className="border rounded-full w-11 h-11 hidden md:flex">
            <Image
              src={"/icons/heart.svg"}
              alt="icon"
              width={24}
              height={24}
              className="min-w-6"
            />
          </Button>
          <Button variant={"ghost"} className="border rounded-full w-11 h-11 hidden md:flex relative">
            <Image
              src={"/icons/bell.svg"}
              alt="icon"
              width={24}
              height={24}
              className="min-w-6"
            />
            <div className="w-[11px] h-[11px] bg-[#FF4423] rounded-full absolute top-0 right-0"></div>
          </Button>
          <Button variant={"ghost"} className="border rounded-full w-11 h-11 hidden md:flex">
            <Image
              src={"/icons/settings2.svg"}
              alt="icon"
              width={24}
              height={24}
              className="min-w-6"
            />
          </Button>
          <Button variant={"ghost"} className="p-0 absolute right-0 top-[44px] md:relative md:top-0 md:right-0">
            <Image
              src={"/icons/img.svg"}
              alt="icon"
              width={44}
              height={44}
              className="min-w-6 shrink-0 "
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
