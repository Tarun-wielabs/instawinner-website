import React from "react";
import { mulish } from "../util/fonts";

export default function Footer() {
  return (
    <footer className="w-full p-10 bg-gray-950 flex justify-between items-center gap-5">
      <span
        className={`${mulish.className} text-gray-50 leading-[20px] body-medium tracking-tight`}
      >
        © 2024 InstaWinner. All Rights Reserved
      </span>
      <div className="flex items-center justify-center gap-5">
        <span
          className={`${mulish.className} body-large text-gray-50 tracking-tight leading-[24px]`}
        >
          Terms & Conditions
        </span>
        <span
          className={`${mulish.className} body-large text-gray-50 tracking-tight leading-[24px]`}
        >
          Policies
        </span>
      </div>
    </footer>
  );
}
