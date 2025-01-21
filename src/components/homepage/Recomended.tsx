import React from "react";
import Wrapper from "../special/Wrapper";
import Card from "../special/Card";
import Button2 from "../special/Button2";
import { client } from "@/sanity/lib/client";

interface IHero{
    hidden?: boolean
    scroll?: boolean
}

interface ICars {
  _id: string,
  name: string,
  type: string,
  tags: string[],
  seatingCapacity: string,
  transmission: string,
  fuelCapacity: string,
  pricePerDay: string,
  image_url: string
}

const fetchData = async () => {
  try {
    const cars = await client.fetch(`*[_type=="car" && "recommended" in tags]{
  _id,
  name,
    type,
    tags,
    seatingCapacity,
    transmission,
    fuelCapacity,
    pricePerDay,
    "image_url":image.asset->url
}`);
  return cars;
  } catch (error) {
    console.error("Error:", error)
  }
}

const Recomended = async ({hidden, scroll}:IHero) => {
  
  const car:ICars[] = await fetchData(); 
  return (
    <Wrapper>

      {/* Main div */}
      <div className="space-y-5">

        {/* Heading */}
        <div className="font-jakarta font-semibold text-base px-5 py-2">
          <p className="text-[#90A3BF]">Recomendation Car</p>
        </div>

        {/* Recomendation cars Card */}
        <div className={`grid grid-cols-1 items-center gap-5 ${hidden && "lap:grid lap:grid-cols-3 lap:gap-8"} ${scroll ? "hidden lap:hidden": ""} sm:grid-cols-2 sm:justify-center lg:grid-cols-4`}>
          {car.map((car) => {
            return <Card key={car._id} item={car} height={true} />;
          })}
        </div>

        {/* Copy of above, displays if scroll is true */}
        <div className={`${scroll ? "grid lap:overflow-x-auto gap-8 w-full sm:grid-cols-2 lg:grid-cols-3 lap:flex" :"hidden" }`}>
          {car.map((car) => {
            return <Card key={car._id} item={car} height={true}/>;
          })}
        </div>

        {/* Button */}
        <div className={`flex items-center justify-between gap-[49px] lap:justify-self-end lap:gap-[525px] ${scroll && "hidden"} ${hidden && "lap:gap-[300px]"} py-16`}>
          <Button2 path="/category" text="Show more car" />
          <p className="font-jakarta text-[#90A3BF] whitespace-nowrap">{car.length} car</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Recomended;
