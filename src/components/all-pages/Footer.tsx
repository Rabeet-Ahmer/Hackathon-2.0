import React from "react";
import Wrapper from "../special/Wrapper";

const Footer = () => {
  return (
    <footer className="md:bg-white">
      <Wrapper>
        {/* upper footer */}
        <div className="md:border-b pb-10">
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
                  <li>How it works</li>
                  <li>Featured</li>
                  <li>Partnership</li>
                  <li className="whitespace-nowrap">Business Relation</li>
                </ul>
              </div>
              <div className="space-y-10">
                <h4 className="font-semibold text-xl">Community</h4>
                <ul className="font-medium text-base opacity-60 space-y-5">
                  <li>Events</li>
                  <li>Blog</li>
                  <li>Podcast</li>
                  <li>Invite a friend</li>
                </ul>
              </div>
              <div className="space-y-10">
                <h4 className="font-semibold text-xl">Socials</h4>
                <ul className="font-medium text-base opacity-60 space-y-5">
                  <li>Discord</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* lower footer */}
        <div className="font-jakarta font-semibold text-xs md:text-base flex flex-col-reverse md:flex-row justify-between py-9 gap-8 md:gap-0">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="flex justify-between md:gap-[60px]">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
