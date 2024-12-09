import React from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Button2 from "@/components/special/Button2";
import Popular from "@/components/homepage/Popular";
import Recomended from "@/components/homepage/Recomended";

const CarDetail = () => {
  const check = [
    { text: "Sport", num: 10 },
    { text: "SUV", num: 12 },
    { text: "MPV", num: 16 },
    { text: "Sedan", num: 20 },
    { text: "Coupe", num: 14 },
    { text: "Hatchback", num: 14 },
  ];

  const check2 = [
    { text: "2 Person", num: 10 },
    { text: "4 Person", num: 14 },
    { text: "6 Person", num: 12 },
    { text: "8 Person", num: 16 },
  ];

  return (
    <div className="grid grid-cols-4">
      <div className="p-8 bg-white w-[360px] col-span-1 hidden lap:block">
        <div className="space-y-14">
          <div className="font-jakarta space-y-8">
            <p className="font-semibold text-xs text-[#90A3BF]">TYPE</p>
            {check.map((item, i) => {
              return (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox />
                  <Label
                    htmlFor="label"
                    className="font-semibold text-xl text-[#596780]"
                  >
                    {item.text}{" "}
                    <p className="inline-block text-[#90A3BF]"> ({item.num})</p>
                  </Label>
                </div>
              );
            })}
          </div>
          <div className="font-jakarta space-y-8">
            <p className="font-semibold text-xs text-[#90A3BF]">CAPACITY</p>
            {check2.map((item, i) => {
              return (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox />
                  <Label
                    htmlFor="label"
                    className="font-semibold text-xl text-[#596780]"
                  >
                    {item.text}{" "}
                    <p className="inline-block text-[#90A3BF]"> ({item.num})</p>
                  </Label>
                </div>
              );
            })}
          </div>
          <div className="font-jakarta space-y-8 w-[296px] ">
            <p className="font-semibold text-xs text-[#90A3BF]">PRICE</p>
            <div>
              <Slider />
              <p className="font-semibold text-xl">Max.$100.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-8">
        <div className="flex flex-col lap:flex-row gap-8 p-8">
          <div className="font-jakarta space-y-6">
            <div
              className={`bg-b1 text-white space-y-5 p-6 w-[327px] h-[232px] lap:w-[492px] lap:h-[360px] relative rounded-lg`}
            >
              <div className="max-w-[372px] space-y-4">
                <h1 className="font-semibold text-base lap:text-[32px] lap:leading-tight">
                  Sports car with the best design and acceleration
                </h1>
                <p className="font-medium text-xs lap:text-base">
                  Safety and comfort while driving a futuristic and elegant
                  sports car
                </p>
              </div>
              <div className="absolute bottom-5 right-24">
                <Image
                  src={"cars/ad2.svg"}
                  alt="cars"
                  width={340}
                  height={108}
                  className="w-[190px] lap:w-auto"
                />
              </div>
            </div>
            <div className="flex gap-12 lap:gap-6">
              <Image
                src={"cars/detail1.svg"}
                alt="car"
                width={148}
                height={124}
                className="h-16 object-cover lap:h-auto"
              />
              <Image
                src={"cars/detail2.svg"}
                alt="car"
                width={148}
                height={124}
                className="h-16 object-cover lap:h-auto"
              />
              <Image
                src={"cars/detail3.svg"}
                alt="car"
                width={148}
                height={124}
                className="h-16 lap:h-auto"
              />
            </div>
          </div>
          <div>
            <div className="font-jakarta p-6 bg-white w-[327px] lap:w-[492px] lap:h-[508px] space-y-8 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-xl lap:text-[32px]">Nissan GT - R</h2>
                  <div className="flex items-center gap-2">
                    <Image
                      src={"icons/stars.svg"}
                      alt="stars"
                      width={108}
                      height={20}
                    />
                    <p className="text-[#596780] text-xs lap:text-sm">440+ Reviewer</p>
                  </div>
                </div>
                <Image
                  src={"icons/heart3.svg"}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="font-normal text-xs lap:text-xl text-[#596780] leading-loose">
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track".
                </p>
              </div>
              <div className="grid grid-cols-4 font-jakarta text-xs lap:text-xl gap-4 ">
                <p className="text-[#90A3BF]">Type Car</p>
                <p className="text-[#596780] font-semibold text-end">Sport</p>
                <p className="text-[#90A3BF] ">Capacity</p>
                <p className="text-[#596780] font-semibold text-end">
                  2 Person
                </p>
                <p className="text-[#90A3BF] ">Steering</p>
                <p className="text-[#596780] font-semibold text-end">Manual</p>
                <p className="text-[#90A3BF]">Gasoline</p>
                <p className="text-[#596780] font-semibold text-end">70L</p>
              </div>
              <div className="flex justify-between ">
                <div className="flex items-center">
                  <p className="font-bold text-xl">$80.00/</p>
                  <p className="text-[#90A3BF] text-sm">day</p>
                </div>
                <Button2 text="Rent Now" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 space-y-8 min-w-[327px] m-8 rounded-md">
          <div className="flex items-center font-jakarta gap-3">
            <h1 className="font-semibold text-xl">Reviews</h1>
            <p className="bg-b1 rounded-md text-white flex items-center justify-between px-4 py-1">
              13
            </p>
          </div>
          <div className="flex items-start gap-4 font-jakarta">
            <Image src={"icons/img.svg"} alt="image" width={56} height={56} className="min-w-14"/>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h1 className="font-bold text-base lap:text-xl">Alex Stanton</h1>
                  <p className="font-medium text-xs lap:text-sm text-[#90A3BF]">CEO at Bukalapak</p>
                </div>
                <div className="space-y-2 flex flex-col items-end">
                  <p className="text-[#90A3BF] font-medium text-sm">21 July 2022</p>
                  <Image
                    src={"icons/stars.svg"}
                    alt="stars"
                    width={108}
                    height={20}
                  />
                </div>
              </div>
              <div>
                <p className="font-normal text-xs lap:text-sm text-[#596780] leading-loose">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 font-jakarta">
            <Image src={"icons/img2.svg"} alt="image" width={56} height={56} />
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h1 className="font-bold text-base lap:text-xl">Skylar Dias</h1>
                  <p className="font-medium text-xs lap:text-sm text-[#90A3BF]">CEO at Amazon</p>
                </div>
                <div className="space-y-2 flex flex-col items-end">
                  <p className="text-[#90A3BF] font-medium text-sm">20 July 2022</p>
                  <Image
                    src={"icons/stars.svg"}
                    alt="stars"
                    width={108}
                    height={20}
                  />
                </div>
              </div>
              <div>
                <p className="font-normal text-xs lap:text-sm text-[#596780] leading-loose">
                We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
          </div>
          <Button variant={"ghost"} className="font-jakarta font-semibold text-base text-[#90A3BF] flex justify-self-center">Show All</Button>
        </div>
        <div className="">
            <Popular scroll={true}/>
            <Recomended scroll={true}/>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
