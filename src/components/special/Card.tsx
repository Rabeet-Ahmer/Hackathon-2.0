import React, { FC } from "react";
import Image from "next/image";
import Button2 from "./Button2";

interface ICard {
  _id: string;
  name: string;
  type: string;
  tags: string[];
  seatingCapacity: string;
  transmission: string;
  fuelCapacity: string;
  pricePerDay: string;
  image_url: string;
}

const Card: FC<{ item: ICard; height?: boolean }> = ({ item, height }) => {
  return (
    // Main Card
    <div
      className={`font-jakarta w-[261px] sm:w-auto justify-self-center ${height && "sm:h-[417px]"} space-y-16 p-6 rounded-lg bg-white md:flex md:flex-col md:justify-center md:items-center`}
    >
      {/* Card top */}
      <div className="flex items-start justify-between gap-14">
        <div className="space-y-1">
          <h4 className="font-bold text-xl">{item.name}</h4>
          <p className="font-bold text-[#90A3BF]">{item.type}</p>
        </div>
        <Image src={"icons/heart2.svg"} alt="icon" width={24} height={24} />
      </div>

      {/* Car image */}
      <div>
        <Image src={item.image_url || "cars/ad1.svg"} alt="car" width={232} height={72} />
      </div>

      {/* Car features / Pricing */}
      <div className="space-y-6">
        {/* Features */}
        <div className="flex gap-4">
          <div className="flex items-center gap-[6px]">
            <Image src={"icons/fuel.svg"} alt="icon" width={24} height={24} />
            <p className="font-medium text-sm text-[#90A3BF]">
              {item.fuelCapacity}
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <Image src={"icons/steer.svg"} alt="icon" width={24} height={24} />
            <p className="font-medium text-sm text-[#90A3BF]">
              {item.transmission}
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <Image
              src={"icons/capacity.svg"}
              alt="icon"
              width={24}
              height={24}
            />
            <p className="font-medium whitespace-nowrap text-sm text-[#90A3BF]">
              {item.seatingCapacity}{" "}
            </p>
          </div>
        </div>

        {/* Pricing / Button */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center">
            <p className="font-bold text-lg">
              {item.pricePerDay.includes("/day") ? (
                item.pricePerDay
              ) : (
                <>
                  {item.pricePerDay}/
                  <span className="text-[#90A3BF] text-sm">day</span>
                </>
              )}
            </p>
          </div>

          {/* Rent Now button */}
          <Button2 path={`/carDetail/${item._id}`} text="Rent Now" />
        </div>
      </div>
    </div>
  );
};

export default Card;
