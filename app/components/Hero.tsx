import Image from "next/image";
import { surprisedWoman } from "../util/images";
import { mulish, titilliumWebBlack } from "../util/fonts";

export default function Hero() {
  return (
    <div className="w-[80%] h-auto flex justify-between items-center relative p-10">
      <div className="flex flex-col gap-5 ">
        <span
          className={`${titilliumWebBlack.className} display-large leading-[64px] text-black`}
        >
          {" "}
          <span className="uppercase text-[#F7413D]">win</span> Instant
          Promotions
        </span>
        <span
          className={`${mulish.className} w-[500px] font-normal text-[#6D6D6D] leading-[24px] -tracking-tight`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </span>
      </div>
      <div className="flex items-end h-full w-auto">
        <div className="w-[500px] h-[500px] flex justify-center items-center from-[#F7413D] to-[#FF7F7C] bg-gradient-to-b rounded-full">
          <Image
            src={surprisedWoman}
            alt="stock image"
            className="scale-125 h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
