import Select2 from "@/components/special/Select2";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const page = () => {
  type TSelect = {
    label: string;
    placeholder: string;
    item1: string | React.ReactNode;
    item2?: string;
    item3?: string;
    pay?: boolean;
  };

  const Select1: TSelect = {
    label: "Locations",
    placeholder: "Select your city",
    item1: "Karachi",
    item2: "Lahore",
    item3: "Islamabad",
    pay: true,
  };
  const Select3: TSelect = {
    label: "Date",
    placeholder: "Select your date",
    item1: <Calendar />,
    pay: true,
  };
  const Select4: TSelect = {
    label: "Time",
    placeholder: "Select your time",
    item1: "Morning",
    item2: "Evening",
    item3: "Night",
    pay: true,
  };

  return (
    <main className="font-jakarta p-8 flex gap-8">
      <div className="space-y-8">
        <div className="bg-white w-[852px] p-6 space-y-8 rounded-lg">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-xl">Billing Info</h3>
              <p className="font-medium text-sm text-[#90A3BF] col-span-2">
                Please enter your billing info
              </p>
            </div>
            <p className="font-medium text-sm text-[#90A3BF] col-span-2">
              Step 1 of 4
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="w-[386px] space-y-4">
              <p className="font-semibold text-base">Name</p>
              <Input
                placeholder="Your name"
                className="font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-[#F6F7F9]"
              />
            </div>
            <div className="w-[386px] space-y-4">
              <p className="font-semibold text-base">Phone Number</p>
              <Input
                placeholder="Phone number"
                className="font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-[#F6F7F9]"
              />
            </div>
            <div className="w-[386px] space-y-4">
              <p className="font-semibold text-base">Address</p>
              <Input
                placeholder="Address"
                className="font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-[#F6F7F9]"
              />
            </div>
            <div className="w-[386px] space-y-4">
              <p className="font-semibold text-base">Town/City</p>
              <Input
                placeholder="Town or city"
                className="font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-[#F6F7F9]"
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-[852px] p-6 space-y-8  rounded-lg">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-xl">Rental Info</h3>
              <p className="font-medium text-sm text-[#90A3BF] col-span-2">
                Please select your rental date
              </p>
            </div>
            <p className="font-medium text-sm text-[#90A3BF] col-span-2">
              Step 2 of 4
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="bg-b1 w-2 h-2 rounded-full outline outline-b2/30"></p>
            <p className="font-semibold">Pick-Up</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Select2 item={Select1} />
            </div>
            <div>
              <Select2 item={Select3} />
            </div>
            <div>
              <Select2 item={Select4} />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="bg-b2 w-2 h-2 rounded-full outline outline-b2/30"></p>
            <p className="font-semibold">Drop-Off</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Select2 item={Select1} />
            </div>
            <div>
              <Select2 item={Select3} />
            </div>
            <div>
              <Select2 item={Select4} />
            </div>
          </div>
        </div>
        <div className="bg-white w-[852px] p-6 space-y-8 rounded-lg">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-xl">Payment Method</h3>
              <p className="font-medium text-sm text-[#90A3BF] col-span-2">
                Please enter your payment method
              </p>
            </div>
            <p className="font-medium text-sm text-[#90A3BF] col-span-2">
              Step 3 of 4
            </p>
          </div>
          <div className="bg-[#F6F7F9] p-6 space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <p className="bg-b1 w-2 h-2 rounded-full outline outline-b2/30"></p>
                <p className="font-semibold">Credit Card</p>
              </div>
              <Image src={"pay/visa.svg"} alt="visa" width={92} height={20} />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="w-[362px] space-y-4">
                <p className="font-semibold text-base">Card Number</p>
                <Input
                  placeholder="Card number"
                  className="font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-white"
                />
              </div>
              <div className="w-[362px] space-y-4">
                <p className="font-semibold text-base">Expiration Date</p>
                <Input
                  placeholder="DD/MM/YY"
                  className="font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-white"
                />
              </div>
              <div className="w-[362px] space-y-4">
                <p className="font-semibold text-base">Card Holder</p>
                <Input
                  placeholder="Card holder"
                  className="font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-white"
                />
              </div>
              <div className="w-[362px] space-y-4">
                <p className="font-semibold text-base">CVC</p>
                <Input
                  placeholder="CVC"
                  className="font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-white"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#F6F7F9] px-8 py-4 rounded-lg">
            <RadioGroup className="flex items-center space-x-2">
              <RadioGroupItem
                value="default"
                className="border-[#90A3BF] bg-white"
              />
              <Label className="font-semibold text-base">PayPal</Label>
            </RadioGroup>
            <Image
              src={"pay/paypal.svg"}
              alt="paypal"
              width={100}
              height={24}
            />
          </div>
          <div className="flex items-center justify-between bg-[#F6F7F9] px-8 py-4 rounded-lg">
            <RadioGroup className="flex items-center space-x-2">
              <RadioGroupItem
                value="default"
                className="border-[#90A3BF] bg-white"
              />
              <Label className="font-semibold text-base">Bitcoin</Label>
            </RadioGroup>
            <Image
              src={"pay/bitcoin.svg"}
              alt="paypal"
              width={94}
              height={20}
            />
          </div>
        </div>
        <div></div>
        <div className="bg-white w-[852px] p-6 space-y-8 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-xl">Confirmation</h3>
              <p className="font-medium text-sm text-[#90A3BF] col-span-2">
                We are getting to the end. Just few clicks and your rental is
                ready!
              </p>
            </div>
            <p className="font-medium text-sm text-[#90A3BF] col-span-2">
              Step 4 of 4
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-5 bg-[#F6F7F9] px-8 py-4">
              <Checkbox className="w-6 h-6 border-[#90A3BF]" />
              <Label className="font-semibold text-base">
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </Label>
            </div>
            <div className="flex items-center space-x-5 bg-[#F6F7F9] px-8 py-4">
              <Checkbox className="w-6 h-6 border-[#90A3BF]" />
              <Label className="font-semibold text-base">
                I agree with our terms and conditions and privacy policy.
              </Label>
            </div>
          </div>
          <Button
            variant={"destructive"}
            className="bg-b1 py-7 px-8 font-bold text-base rounded-lg"
          >
            Rent Now
          </Button>
          <div className="space-y-4">
            <Image src={"pay/shield.svg"} alt="shield" width={32} height={32} />
            <div className="space-y-2">
              <p className="font-semibold text-base">All your data are safe</p>
              <p className="font-medium text-sm text-[#90A3BF]">
                We are using the most advanced security to provide you the best
                experience ever.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-[492px] h-[560px] rounded-lg p-6 space-y-8">
        <div className="space-y-1">
          <h3 className="font-bold text-xl">Rental Summary</h3>
          <p className="text-[#90A3BF] font-medium text-sm">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Image src={"cars/detail1.svg"} alt="car" width={132} height={108} />
          <div>
            <h2 className="font-bold text-[32px]">Nissan GT - R</h2>
            <div className="flex gap-2">
              <Image
                src={"icons/stars.svg"}
                alt="stars"
                width={108}
                height={20}
              />
              <p className="text-[#596780]">440+ Reviewer</p>
            </div>
          </div>
        </div>
        <Separator/>
        <div className="space-y-5">
            <div className="flex justify-between text-base">
                <p className="font-medium text-[#90A3BF]">Subtotal</p>
                <p className="font-semibold">$80.00</p>
            </div>
            <div className="flex justify-between text-base">
                <p className="font-medium text-[#90A3BF]">Tax</p>
                <p className="font-semibold">$0</p>
            </div>
        </div>
        <div className="bg-[#F6F7F9] rounded-lg flex px-8 py-3">
            <Input placeholder="Apply promo code" className="border-none shadow-none font-medium text-sm"/>
            <Button variant={"ghost"} className="font-semibold text-base">Apply Now</Button>
        </div>
        <div className="flex items-center justify-between">
            <div className="space-y-1">
                <h3 className="font-bold text-xl">Total Rental Price</h3>
                <p className="font-medium text-sm text-[#90A3BF]">Overall price and includes rental discount</p>
            </div>
            <p className="font-bold text-[32px]">$80.00</p>
        </div>
      </div>
    </main>
  );
};

export default page;