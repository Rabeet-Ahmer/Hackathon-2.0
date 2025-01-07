import React from "react";
import Wrapper from "../special/Wrapper";
import Card from "../special/Card";
import Button2 from "../special/Button2";

interface IHero{
    hidden?: boolean
    scroll?: boolean
}

const Recomended = ({hidden, scroll}:IHero) => {
  type TCar = {
    car: string;
    desc: string;
    carImg: string;
    fuel: number;
    auto: string;
    people: number;
    price: string;
    height?: boolean;
  };

  const cars: TCar[] = [
    {
      car: "All New Rush",
      desc: "SUV",
      carImg: "cars/car4.svg",
      fuel: 70,
      auto: "Manual",
      people: 6,
      price: "72.00",
      height: true
    },
    {
      car: "CR  - V",
      desc: "SUV",
      carImg: "cars/car5.svg",
      fuel: 80,
      auto: "Manual",
      people: 6,
      price: "80.00",
      height: true
    },
    {
      car: "All New Terios",
      desc: "SUV",
      carImg: "cars/car6.svg",
      fuel: 90,
      auto: "Manual",
      people: 6,
      price: "74.00",
      height: true
    },
    {
      car: "CR  - V",
      desc: "SUV",
      carImg: "cars/car7.svg",
      fuel: 80,
      auto: "Manual",
      people: 6,
      price: "80.00",
      height: true
    },
    {
      car: "MG ZX Exclusice",
      desc: "Hatchback",
      carImg: "cars/car8.svg",
      fuel: 70,
      auto: "Manual",
      people: 4,
      price: "76.00",
      height: true
    },
    {
      car: "New MG ZS",
      desc: "SUV",
      carImg: "cars/car9.svg",
      fuel: 80,
      auto: "Manual",
      people: 6,
      price: "80.00",
      height: true
    },
    {
      car: "MG ZX Exclusice",
      desc: "Hatchback",
      carImg: "cars/car8.svg",
      fuel: 70,
      auto: "Manual",
      people: 4,
      price: "76.00",
      height: true
    },
    {
      car: "New MG ZS",
      desc: "SUV",
      carImg: "cars/car9.svg",
      fuel: 80,
      auto: "Manual",
      people: 6,
      price: "80.00",
      height: true
    },
  ];
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
          {cars.map((car, i) => {
            return <Card key={i} item={car} />;
          })}
        </div>

        {/* Copy of above, displays if scroll is true */}
        <div className={`${scroll ? "grid overflow-x-auto gap-8 w-full sm:grid-cols-2 lap:flex" :"hidden" }`}>
          {cars.map((car, i) => {
            return <Card key={i} item={car} />;
          })}
        </div>

        {/* Button */}
        <div className={`flex items-center justify-between gap-[49px] lap:justify-self-end lap:gap-[525px] ${scroll && "hidden"} ${hidden && "lap:gap-[300px]"} py-16`}>
          <Button2 path="/category" text="Show more car" />
          <p className="font-jakarta text-[#90A3BF] whitespace-nowrap">120 car</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Recomended;
