import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ISelect {
  label: string;
  placeholder: string;
  item1: string | React.ReactNode;
  item2?: string;
  item3?: string;
  pay?: boolean
}

const Select2 = ({ item }: { item: ISelect }) => {
  return (
    // <div className={`${item.pay && "space-y-4"} w-[76px] lap:w-auto`}>
    <div className={`${item.pay ? "space-y-4":"w-[76px] lap:w-auto"}`}>
      <Label htmlFor={`${item.label}`} className={`font-bold text-base ${item.pay && "font-semibold text-base"}`}>
        {item.label}
      </Label>
      <Select>
        <SelectTrigger className={`${item.pay ? "font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-[#F6F7F9] ": "w-[126px] border-none shadow-none focus:ring-0 text-xs p-0 opacity-60 sm:w-[76px] lap:w-auto"} `}>
          <SelectValue placeholder={item.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">{item.item1}</SelectItem>
          <SelectItem value="0">{item.item2}</SelectItem>
          <SelectItem value="0">{item.item3}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Select2;
