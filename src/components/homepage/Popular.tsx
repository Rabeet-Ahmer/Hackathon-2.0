import React from "react";
import Wrapper from "../special/Wrapper";
import Card from "../special/Card";
import Link from "next/link";
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
    const cars = await client.fetch(`*[_type=="car" && "popular" in tags][0..3]{
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

const Popular = async ({hidden, scroll}:IHero) => {

    const car:ICars[] = await fetchData()

  return (
    <Wrapper>

      {/* Main div */}
      <div className="space-y-5 w-screen lg:w-full">

        {/* Card top */}
        <div className="font-jakarta font-semibold text-base flex justify-between items-center px-5">
          <p className="text-[#90A3BF]">Popular Car</p>
          <Link href={"/category"} className="text-b1">View All</Link>
        </div>

        {/* Popular cars Card */}                                           
        <div className={`flex overflow-x-auto gap-[19px] lap:gap-8  ${hidden && " lap:grid lap:grid-cols-3"} ${scroll && "hidden lap:hidden"}`}>
        {
            car.map((car)=>{
                return(
                    <Card key={car._id} item={car} />
                )
            })
        }
        </div>

        {/* Copy of above, displays if scroll is true */}
         <div className={`${scroll ? "grid sm:grid-cols-2 lap:flex overflow-x-auto gap-8 w-full" :"hidden" }`}>
        {
            car.map((car)=>{
                return(
                    <Card key={car._id} item={car}/>
                )
            })
        }
        </div>
      </div>
    </Wrapper>
  );
};

export default Popular;
