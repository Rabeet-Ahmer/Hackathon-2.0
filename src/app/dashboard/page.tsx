import Select2 from "@/components/special/Select2";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  type TSelect = {
    label: string;
    placeholder: string;
    item1: string | React.ReactNode;
    item2?: string;
    item3?: string;
  };

  const Select1: TSelect = {
    label: "Locations",
    placeholder: "Select your city",
    item1: "Kota Semarang",
  };
  const Select3: TSelect = {
    label: "Date",
    placeholder: "Select your date",
    item1: "21 July 2022",
  };
  const Select4: TSelect = {
    label: "Time",
    placeholder: "Select your time",
    item1: "01.00",
  };

  return (
    // Main div
    <main className="font-jakarta flex">

      {/* Side bar, only for large screens */}
      <div className="bg-white w-[286px] px-8 py-9 space-y-[60px] hidden lap:block">
        <div className="space-y-7">
          <p className="text-[#94A7CB]/40 text-xs font-semibold">MAIN MENU</p>
          <div className="grid gap-1">
            <Button
              className="text-[#90A3BF] hover:text-white hover:bg-b1 rounded-lg w-[230px] h-14 justify-start"
              variant={"ghost"}
            >
              <Image src={"icons/dash.svg"} alt="icon" width={24} height={24} />
              Dashboard
            </Button>
            <Button
              className="text-[#90A3BF] hover:text-white hover:bg-b1 rounded-lg  w-[230px] h-14 justify-start"
              variant={"ghost"}
            >
              <Image src={"icons/rent.svg"} alt="icon" width={24} height={24} />
              Car Rent
            </Button>
            <Button
              className="text-[#90A3BF] hover:text-white hover:bg-b1 rounded-lg  w-[230px] h-14 justify-start"
              variant={"ghost"}
            >
              <Image
                src={"icons/insight.svg"}
                alt="icon"
                width={24}
                height={24}
              />
              Insight
            </Button>
            <Button
              className="text-[#90A3BF] hover:text-white hover:bg-b1 rounded-lg w-[230px] h-14 justify-start"
              variant={"ghost"}
            >
              <Image
                src={"icons/burse.svg"}
                alt="icon"
                width={24}
                height={24}
              />
              Reimburse
            </Button>
            <Button
              className="text-[#90A3BF] hover:text-white hover:bg-b1 rounded-lg w-[230px] h-14 justify-start"
              variant={"ghost"}
            >
              <Image
                src={"icons/inbox.svg"}
                alt="icon"
                width={24}
                height={24}
              />
              Inbox
            </Button>
            <Button
              className="text-[#90A3BF] hover:text-white hover:bg-b1 rounded-lg w-[230px] h-14 justify-start"
              variant={"ghost"}
            >
              <Image
                src={"icons/calender.svg"}
                alt="icon"
                width={24}
                height={24}
              />
              Calender
            </Button>
          </div>
        </div>

        <div className="space-y-7">
          <p className="text-[#94A7CB]/40 text-xs font-semibold">PREFERENCES</p>
          <div className="grid gap-1">
            <Button
              className="text-[#90A3BF] hover:text-white hover:bg-b1 rounded-lg w-[230px] h-14 justify-start"
              variant={"ghost"}
            >
              <Image
                src={"icons/settings3.svg"}
                alt="icon"
                width={24}
                height={24}
              />
              Settings
            </Button>
            <Button
              className="text-[#90A3BF] hover:text-white hover:bg-b1 rounded-lg  w-[230px] h-14 justify-start"
              variant={"ghost"}
            >
              <Image src={"icons/help.svg"} alt="icon" width={24} height={24} />
              Help & Center
            </Button>
            <div className="text-[#90A3BF] flex items-center gap-3 ml-3 rounded-lg  w-[230px] h-14 justify-start">
              <Image src={"icons/mode.svg"} alt="icon" width={24} height={24} />
              Dark Mode
              <Image
                src={"icons/switch2.svg"}
                alt="switch"
                width={68}
                height={34}
              />
            </div>
          </div>
        </div>

        <div>
          <Button variant={"ghost"} className="text-[#90A3BF]">
            <Image
              src={"icons/logout.svg"}
              alt="log out"
              width={24}
              height={24}
            />
            Log Out
          </Button>
        </div>
      </div>

      {/* Right side */}
      <div className="flex gap-8 p-8">

        {/* Card 1 */}
        <div className="bg-white w-[534px] rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-xl">Details Rental</h3>
          <Image
            src={"cars/location.svg"}
            alt="location"
            width={486}
            height={272}
          />
          <div className="flex gap-4">
            <Image
              src={"cars/detail1.svg"}
              alt="car"
              width={132}
              height={72}
              className="object-cover max-h-[72px] rounded-lg flex-shrink-0"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <h2 className="font-bold text-2xl">Nissan GT - R</h2>
                <p className="font-medium text-sm text-[#3D5278]">Sport Car</p>
              </div>
              <p className="font-medium text-sm text-[#3D5278] text-start">
                #9761
              </p>
            </div>
          </div>

          <div className="space-y-4 py-4">
            <div className="flex items-center gap-3">
              <p className="bg-b1 w-2 h-2 rounded-full outline outline-b2/30"></p>
              <p className="font-semibold">Pick-Up</p>
            </div>
            <div className={`flex gap-6`}>
              <div>
                <Select2 item={Select1} />
              </div>
              <div>
                <Separator orientation="vertical" />
              </div>
              <div>
                <Select2 item={Select3} />
              </div>
              <div>
                <Separator orientation="vertical" />
              </div>
              <div>
                <Select2 item={Select4} />
              </div>
            </div>
          </div>

          <div className="space-y-4 py-4">
            <div className="flex items-center gap-3">
              <p className="bg-b1 w-2 h-2 rounded-full outline outline-b2/30"></p>
              <p className="font-semibold">Drop Off</p>
            </div>
            <div className={`flex gap-6`}>
              <div>
                <Select2 item={Select1} />
              </div>
              <div>
                <Separator orientation="vertical" />
              </div>
              <div>
                <Select2 item={Select3} />
              </div>
              <div>
                <Separator orientation="vertical" />
              </div>
              <div>
                <Select2 item={Select4} />
              </div>
            </div>
          </div>
          <Separator className="my-10" />
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">Total Rental Price</h3>
              <p className="font-medium text-sm text-[#90A3BF]">
                Overall price and includes rental discount
              </p>
            </div>
            <h2 className="font-bold text-[32px]">$80.00</h2>
          </div>
        </div>

        <div className="space-y-8">

          {/* Card 2 */}
          <div className="bg-white p-6 space-y-8 w-[524px] h-[324px] rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">Top 5 Car Rental </h3>
              <Button variant={"ghost"}>
                <Image
                  src={"icons/dots.svg"}
                  alt="dots"
                  width={24}
                  height={24}
                />
              </Button>
            </div>
            <div className="flex gap-6">
              <div className="relative flex-shrink-0">
                <div className="flex flex-col items-center gap-2 absolute left-[70px] top-20">
                  <h2 className="font-bold text-2xl">72,030</h2>
                  <p className="font-medium text-sm text-[#90A3BF]">
                    Rental Car
                  </p>
                </div>
                <Image
                  src={"pay/circle.svg"}
                  alt="circle"
                  width={220}
                  height={220}
                />
              </div>

              <div className="flex flex-col gap-7 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="w-3 h-3 bg-[#0D3559] rounded-full"></p>
                    <p className="text-[#90A3BF] font-semibold text-sm">
                      Sport Car
                    </p>
                  </div>
                  <p className=" font-semibold text-sm">17,439</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="w-3 h-3 bg-[#175D9C] rounded-full"></p>
                    <p className="text-[#90A3BF] font-semibold text-sm">SUV</p>
                  </div>
                  <p className=" font-semibold text-sm">9,478</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="w-3 h-3 bg-[#2185DE] rounded-full"></p>
                    <p className="text-[#90A3BF] font-semibold text-sm">
                      Coupe
                    </p>
                  </div>
                  <p className=" font-semibold text-sm">18,197</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="w-3 h-3 bg-[#63A9E8] rounded-full"></p>
                    <p className="text-[#90A3BF] font-semibold text-sm">
                      Hatchback
                    </p>
                  </div>
                  <p className=" font-semibold text-sm">12,510</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="w-3 h-3 bg-[#A6CEF2] rounded-full"></p>
                    <p className="text-[#90A3BF] font-semibold text-sm">MPV</p>
                  </div>
                  <p className=" font-semibold text-sm">14,406</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 space-y-8 rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">Recent Transaction</h3>
              <Link href={"#"} className="font-medium text-xs text-b1">
                View All
              </Link>
            </div>
            <div className="space-y-7">
              <div className="flex items-center gap-[25px]">
                <Image src={"cars/ad2.svg"} alt="car" width={114} height={36} className="object-cover"/>
                <div className="flex justify-between w-full">
                  <div className="space-y-2">
                    <p className="font-bold text-base">Nissan GT - R</p>
                    <p className="font-medium text-xs text-[#90A3BF]">Sport Car</p>
                  </div>
                  <div className="text-end space-y-2">
                    <p className="font-medium text-xs text-[#90A3BF]">20 July</p>
                    <p className="font-bold text-base">$80.00</p>
                  </div>
                </div>
              </div>
              <Separator/>
              <div className="flex items-center gap-[25px]">
                <Image src={"cars/ad1.svg"} alt="car" width={114} height={36} className="object-cover"/>
                <div className="flex justify-between w-full">
                  <div className="space-y-2">
                    <p className="font-bold text-base">Koegnigsegg</p>
                    <p className="font-medium text-xs text-[#90A3BF]">Sport Car</p>
                  </div>
                  <div className="text-end space-y-2">
                    <p className="font-medium text-xs text-[#90A3BF]">19 July</p>
                    <p className="font-bold text-base">$99.00</p>
                  </div>
                </div>
              </div>
              <Separator/>
              <div className="flex items-center gap-[25px]">
                <Image src={"cars/car3.svg"} alt="car" width={114} height={36} className="object-cover"/>
                <div className="flex justify-between w-full">
                  <div className="space-y-2">
                    <p className="font-bold text-base">Rolls - Royce</p>
                    <p className="font-medium text-xs text-[#90A3BF]">Sport Car</p>
                  </div>
                  <div className="text-end space-y-2">
                    <p className="font-medium text-xs text-[#90A3BF]">18 July</p>
                    <p className="font-bold text-base">$96.00</p>
                  </div>
                </div>
              </div>
              <Separator/>
              <div className="flex items-center gap-[25px]">
                <Image src={"cars/car7.svg"} alt="car" width={114} height={36} className="object-cover"/>
                <div className="flex justify-between w-full">
                  <div className="space-y-2">
                    <p className="font-bold text-base">CR - V</p>
                    <p className="font-medium text-xs text-[#90A3BF]">SUV</p>
                  </div>
                  <div className="text-end space-y-2">
                    <p className="font-medium text-xs text-[#90A3BF]">17 July</p>
                    <p className="font-bold text-base">$80.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
