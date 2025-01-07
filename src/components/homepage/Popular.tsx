import React from "react";
import Wrapper from "../special/Wrapper";
import Card from "../special/Card";
import Link from "next/link";

interface IHero{
    hidden?: boolean
    scroll?: boolean
}

const Popular = ({hidden, scroll}:IHero) => {

    type TCar = {
        car: string,
        desc: string,
        carImg: string,
        fuel: number,
        auto: string,
        people: number,
        price: string
    }

    const cars:TCar[] = [
        {car:"Koenigsegg", desc:"Sport", carImg:"cars/ad1.svg", fuel:90, auto:"Manual", people:2, price:"99.00"},
        {car:"Nissan GT - R", desc:"Sport", carImg:"cars/ad2.svg", fuel:80, auto:"Manual", people:2, price:"80.00"},
        {car:"Rolls - Royce", desc:"Sedan", carImg:"cars/car3.svg", fuel:70, auto:"Manual", people:4, price:"96.00"},
        {car:"Nissan GT - R", desc:"Sport", carImg:"cars/ad2.svg", fuel:80, auto:"Manual", people:2, price:"80.00"},
        ]

  return (
    <Wrapper>

      {/* Main div */}
      <div className="space-y-5 w-screen lap:w-full">

        {/* Card top */}
        <div className="font-jakarta font-semibold text-base flex justify-between items-center px-5">
          <p className="text-[#90A3BF]">Popular Car</p>
          <Link href={"/category"} className="text-b1">View All</Link>
        </div>

        {/* Popular cars Card */}                                           
        <div className={`flex overflow-x-auto gap-[19px] lap:gap-8  ${hidden && " lap:grid lap:grid-cols-3"} ${scroll && "hidden lap:hidden"}`}>
        {
            cars.map((car,i)=>{
                return(
                    <Card key={i} item={car}/>
                )
            })
        }
        </div>

        {/* Copy of above, displays if scroll is true */}
         <div className={`${scroll ? "grid sm:grid-cols-2 lap:flex overflow-x-auto gap-8 w-full" :"hidden" }`}>
        {
            cars.map((car,i)=>{
                return(
                    <Card key={i} item={car}/>
                )
            })
        }
        </div>
      </div>
    </Wrapper>
  );
};

export default Popular;
