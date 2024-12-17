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
  pay?: boolean;
  dash?: boolean;
}

const Select2 = ({ item }: { item: ISelect }) => {
  return (
    <div
      className={`${item.pay && "space-y-4 w-full"} ${
        item.dash && "w-full"
      } w-[76px] lap:w-auto`}
    >
      <Label
        htmlFor={`${item.label}`}
        className={`font-bold text-base ${
          item.pay && "font-semibold text-base"
        }`}
      >
        {item.label}
      </Label>
      <Select>
        <SelectTrigger
          className={`${
            item.pay
              ? "font-medium text-sm text-[#90A3BF] border-none shadow-none py-7 px-8 bg-[#F6F7F9]"
              : ""
          } ${
            item.dash
              ? "font-medium text-sm text-[#90A3BF] border-none shadow-none bg-[#F6F7F9] p-7 lg:bg-background lg:p-0 lg:opacity-100"
              : ""
          } w-full border-none shadow-none focus:ring-0 text-xs opacity-60 `}
        >
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
