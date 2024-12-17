import React from "react";
import Hero from "@/components/homepage/Hero";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Popular from "@/components/homepage/Popular";
import Recomended from "@/components/homepage/Recomended";

const Category = () => {
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

    // Main div
    <div className="lap:grid grid-cols-4">

      {/* Side bar, only for large screens */}
      <div className="p-8 bg-white w-[360px] col-span-1 hidden lap:block">

        <div className="space-y-14">
          
          {/* Upper part */}
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

          {/* Lower part */}
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

          {/* Slider */}
          <div className="font-jakarta space-y-8 w-[296px] ">
            <p className="font-semibold text-xs text-[#90A3BF]">PRICE</p>
            <div>
              <Slider/>
              <p className="font-semibold text-xl">Max.$100.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Home components */}
      <div className="lap:col-span-3">
      <Hero hidden={true}/>
      <Popular hidden={true}/>
      <Recomended hidden={true} />
      </div>
    </div>
  );
};

export default Category;
