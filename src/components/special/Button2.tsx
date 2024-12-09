import React from "react";
import { Button } from "../ui/button";

const Button2 = ({ text }: { text: string }) => {
  return (
    <div>
      <Button variant={"destructive"} className="px-5 py-[10px] h-11 bg-b1 font-jakarta font-semibold text-base">{text}</Button>
    </div>
  );
};

export default Button2;
