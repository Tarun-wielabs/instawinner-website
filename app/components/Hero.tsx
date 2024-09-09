import Image from "next/image";
import { surprisedWoman } from "../util/images";
import { mulish, titilliumWebBlack } from "../util/fonts";

export default function Hero() {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-auto flex md:flex-row flex-col-reverse justify-between items-center relative p-10 gap-10">
      <div className="flex flex-col lg:gap-5 gap-3">
        <span
          className={`${titilliumWebBlack.className} xl:display-large lg:display-medium display-small md:text-start text-center lg:leading-[64px] leading-tight text-black`}
        >
          {" "}
          <span className="uppercase text-[#F7413D]">win</span> Instant
          Promotions
        </span>
        <span
          className={`${mulish.className} lg:body-large sm:body-medium body-small md:text-start text-center 2xl:w-[500px] lg:w-[400px] w-full font-normal text-[#6D6D6D] leading-[24px] -tracking-tight`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </span>
      </div>
      <div className="flex items-end h-full w-auto ">
        <div className="2xl:w-[500px] lg:w-[300px] w-[250px] 2xl:h-[500px] lg:h-[300px] h-[250px] flex justify-center items-center from-[#F7413D] to-[#FF7F7C] bg-gradient-to-b rounded-full">
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
