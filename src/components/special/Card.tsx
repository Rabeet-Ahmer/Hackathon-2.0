import React, { FC } from "react";
import Image from "next/image";
import Button2 from "./Button2";

interface ICard{
    car: string,
    desc: string,
    carImg: string,
    fuel: number,
    auto: string,
    people: number,
    price: string
}

const Card:FC<{item: ICard}> = ({item}) => {
  return (
    <div className="font-jakarta w-[304px] space-y-16 p-6 rounded-lg bg-white">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h4 className="font-bold text-xl">{item.car}</h4>
          <p className="font-bold text-[#90A3BF]">{item.desc}</p>
        </div>
        <Image src={"icons/heart2.svg"} alt="icon" width={24} height={24} />
      </div>
      <div>
        <Image src={`${item.carImg}`} alt="car" width={232} height={72} />
      </div>
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex items-center gap-[6px]">
            <Image src={"icons/fuel.svg"} alt="icon" width={24} height={24} />
            <p className="font-medium text-sm text-[#90A3BF]">{item.fuel}L</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <Image src={"icons/steer.svg"} alt="icon" width={24} height={24} />
            <p className="font-medium text-sm text-[#90A3BF]">{item.auto}</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <Image
              src={"icons/capacity.svg"}
              alt="icon"
              width={24}
              height={24}
            />
            <p className="font-medium whitespace-nowrap text-sm text-[#90A3BF]">{item.people} People</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="font-bold text-lg">${item.price}/</p>
            <p className="text-[#90A3BF] text-sm">day</p>
          </div>
          <Button2 text="Rent Now" />
        </div>
      </div>
    </div>
  );
};

export default Card;
