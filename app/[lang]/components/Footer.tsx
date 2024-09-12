import React from "react";
import { mulish } from "@/util/fonts";

export default function Footer() {
  return (
    <footer className="w-full sm:flex-row flex-col md:px-10 px-5 md:py-10 py-5 bg-gray-950 flex justify-between items-center gap-5">
      <span
        className={`${mulish.className} text-gray-50 lg:leading-[20px] md:body-medium body-small tracking-tight`}
      >
        © 2024 InstaWin. All Rights Reserved
      </span>
      <div className="flex items-center justify-center gap-5">
        <span
          className={`${mulish.className} lg:body-large md:body-medium body-small text-gray-50 tracking-tight lg:leading-[24px]`}
        >
          Terms & Conditions
        </span>
        <span
          className={`${mulish.className} lg:body-large md:body-medium body-small text-gray-50 tracking-tight lg:leading-[24px]`}
        >
          Policies
        </span>
      </div>
    </footer>
  );
}
