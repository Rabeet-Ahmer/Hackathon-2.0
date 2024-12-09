import React from "react";
import Wrapper from "../special/Wrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import { Calendar } from "../ui/calendar";
import { Separator } from "../ui/separator";
import Select2 from "../special/Select2";

interface IHero{
    hidden?: boolean
}

const Hero = ({hidden}:IHero) => {
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
    item1: "Karachi",
    item2: "Lahore",
    item3: "Islamabad",
  };
  const Select3: TSelect = {
    label: "Date",
    placeholder: "Select your date",
    item1: <Calendar />,
  };
  const Select4: TSelect = {
    label: "Time",
    placeholder: "Select your time",
    item1: "Morning",
    item2: "Evening",
    item3: "Night",
  };

  return (
    <div>
      <Wrapper>
        <div className="grid grid-cols-2 font-jakarta gap-8">
          <div className={`${hidden && "hidden"} bg-b2 text-white space-y-5 p-6 min-w-[327px] min-h-[232px] md:w-[640px] md:h-[360px] relative rounded-lg `}>
            <div className="w-[240px] lap:max-w-[284px] space-y-4">
              <h1 className="font-semibold text-base whitespace-nowrap md:text-[32px]">
                The Best Platform for Car Rental
              </h1>
              <p className="font-medium text-xs md:text-base">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
            </div>
            <Button className="bg-b1">Rental Car</Button>
            <div className="absolute w-[196px] md:w-auto md:left-36 md:bottom-5">
              <Image src={"cars/ad1.svg"} alt="cars" width={406} height={116} />
            </div>
          </div>
          <div className={`hidden lap:block bg-b1 text-white space-y-5 p-6 w-[640px] h-[360px] relative rounded-lg ${hidden && "hidden lap:hidden"}`}>
            <div className="max-w-[284px] space-y-4">
              <h1 className="font-semibold text-[32px]">
                Easy way to rent a car at a low price
              </h1>
              <p className="font-medium text-base">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
            </div>
            <Button className="bg-b2">Rental Car</Button>
            <div className="absolute bottom-5 right-24">
              <Image src={"cars/ad2.svg"} alt="cars" width={340} height={108} />
            </div>
          </div>

          <div className="lap:flex col-span-2 items-center space-y-8 lap:space-y-0 lap:gap-11 relative "> 

           <div className={`bg-white w-[327px] lap:w-[582px] rounded-lg ${hidden && "w-[486px] lap:w-[486px]"}`}>
              <div className="space-y-4 px-4 lap:px-12 py-4">
                <div className="flex items-center gap-3">
                  <p className="bg-b1 w-2 h-2 rounded-full outline outline-b2/30"></p>
                  <p className="font-semibold">Pick-Up</p>
                </div>
                <div className={`flex gap-4 lap:gap-6 ${hidden && "gap-[8px]"}`}>
                  <div>
                    <Select2 item={Select1} />
                  </div>
                  <div>
                    <Separator orientation="vertical" />
                  </div>
                  <div>
                   <Select2 item={Select3}/>
                  </div>
                  <div>
                    <Separator orientation="vertical" />
                  </div>
                  <div>
                  <Select2 item={Select4}/>
                  </div>
                </div>
              </div>
            </div>

            <Button className={`bg-b1 w-[60px] h-[60px] absolute top-[90px] left-32 lap:relative lap:top-0 lap:left-0 ${hidden && "absolute z-10 lap:absolute lap:z-10 lap:left-[478px] lap:top-8"}`} variant={"destructive"}>
              <Image
                src={"icons/switch.svg"}
                alt="icon"
                width={24}
                height={24}
              />
            </Button>

            <div className={`bg-white w-[327px] lap:w-[582px] rounded-lg ${hidden && "w-[486px] lap:w-[486px]"}`}>
              <div className="space-y-4 px-4 lap:px-12 py-4">
                <div className="flex items-center gap-3">
                  <p className="bg-b2 w-2 h-2 rounded-full outline outline-b2/30"></p>
                  <p className="font-semibold">Drop-Off</p>
                </div>
                <div className={`flex gap-4 lap:gap-6 ${hidden && "gap-[8px]"}`}>
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
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
