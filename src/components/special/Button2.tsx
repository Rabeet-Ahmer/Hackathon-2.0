"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface IButton {
  text: string;
  path?: string;
}

const Button2 = ({ text, path }:IButton) => {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => {
          router.push(`${path}`);
        }}
        variant={"destructive"}
        className="px-5 py-[10px] h-11 bg-b1 font-jakarta font-semibold text-base"
      >
        {text}
      </Button>
    </div>
  );
};

export default Button2;
