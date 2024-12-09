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
    },
    {
      car: "CR  - V",
      desc: "SUV",
      carImg: "cars/car5.svg",
      fuel: 80,
      auto: "Manual",
      people: 6,
      price: "80.00",
    },
    {
      car: "All New Terios",
      desc: "SUV",
      carImg: "cars/car6.svg",
      fuel: 90,
      auto: "Manual",
      people: 6,
      price: "74.00",
    },
    {
      car: "CR  - V",
      desc: "SUV",
      carImg: "cars/car7.svg",
      fuel: 80,
      auto: "Manual",
      people: 6,
      price: "80.00",
    },
    {
      car: "MG ZX Exclusice",
      desc: "Hatchback",
      carImg: "cars/car8.svg",
      fuel: 70,
      auto: "Manual",
      people: 4,
      price: "76.00",
    },
    {
      car: "New MG ZS",
      desc: "SUV",
      carImg: "cars/car9.svg",
      fuel: 80,
      auto: "Manual",
      people: 6,
      price: "80.00",
    },
    {
      car: "MG ZX Exclusice",
      desc: "Hatchback",
      carImg: "cars/car8.svg",
      fuel: 70,
      auto: "Manual",
      people: 4,
      price: "76.00",
    },
    {
      car: "New MG ZS",
      desc: "SUV",
      carImg: "cars/car9.svg",
      fuel: 80,
      auto: "Manual",
      people: 6,
      price: "80.00",
    },
  ];
  return (
    <Wrapper>
      <div className="space-y-5">
        <div className="font-jakarta font-semibold text-base px-5 py-2">
          <p className="text-[#90A3BF]">Recomendation Car</p>
        </div>
        <div className={`flex flex-col lap:grid lap:grid-cols-4 gap-5 lap:gap-8 ${hidden && "grid-cols-3 lap:grid-cols-3"} ${scroll && "hidden lap:hidden"}`}>
          {cars.map((car, i) => {
            return <Card key={i} item={car} />;
          })}
        </div>
        <div className={`${scroll ? "flex overflow-x-auto gap-8 w-[327px] lap:w-full" :"hidden" }`}>
          {cars.map((car, i) => {
            return <Card key={i} item={car} />;
          })}
        </div>
        <div className={`flex items-center justify-self-end gap-[49px] lap:gap-[550px] ${scroll && "hidden"} ${hidden && "gap-[350px]"} max-w-[734px] py-16`}>
          <Button2 text="Show more car" />
          <p className="font-jakarta text-[#90A3BF] whitespace-nowrap">120 car</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Recomended;
