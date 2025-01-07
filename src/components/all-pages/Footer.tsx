import React from "react";
import Wrapper from "../special/Wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="md:bg-white">
      <Wrapper>
        {/* upper footer */}
        <div className="md:border-b pb-10 lap:justify-self-center">
          <div className="flex flex-col md:flex-row md:justify-between lap:justify-normal gap-[48px] lap:gap-[452px] pt-20">
            <div className="max-w-[292px] space-y-4">
              <h3 className="font-jakarta font-bold text-b1 text-[32px]">
                MORENT
              </h3>
              <p className="font-jakarta font-medium text-xs md:text-base opacity-60 ">
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>

            {/* links */}
            <div className="grid grid-cols-2 md:flex font-jakarta gap-20">

              <div className="space-y-10">
                <h4 className="font-semibold text-xl">About</h4>
                <ul className="font-medium text-base opacity-60 space-y-5">
                  <li><Link href={"/"} className="hover:text-b2">How it works</Link></li>
                  <li><Link href={"/"} className="hover:text-b2">Featured</Link></li>
                  <li><Link href={"/"} className="hover:text-b2">Partnership</Link></li>
                  <li className="whitespace-nowrap hover:text-b2"><Link href={"/"}>Business Relation</Link></li>
                </ul>
              </div>

              <div className="space-y-10">
                <h4 className="font-semibold text-xl">Community</h4>
                <ul className="font-medium text-base opacity-60 space-y-5">
                <li><Link href={"/"} className="hover:text-b2">Events</Link></li>
                <li><Link href={"/"} className="hover:text-b2">Blog</Link></li>
                <li><Link href={"/"} className="hover:text-b2">Podcast</Link></li>
                <li><Link href={"/"} className="hover:text-b2">Invite a friend</Link></li>
                </ul>
              </div>

              <div className="space-y-10">
                <h4 className="font-semibold text-xl">Socials</h4>
                <ul className="font-medium text-base opacity-60 space-y-5">
                <li><Link href={"/"} className="hover:text-b2">Discord</Link></li>
                <li><Link href={"/"} className="hover:text-b2">Instagram</Link></li>
                <li><Link href={"/"} className="hover:text-b2">Twitter</Link></li>
                <li><Link href={"/"} className="hover:text-b2">Facebook</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* lower footer */}
        <div className="font-jakarta font-semibold text-xs md:text-base flex flex-col-reverse md:flex-row justify-between py-9 gap-8 md:gap-0">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="flex justify-between md:gap-[60px]">
            <Link href={"/"} className="hover:text-b2">Privacy & Policy</Link>
            <Link href={"/"} className="hover:text-b2">Terms & Condition</Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
