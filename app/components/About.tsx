import Image from "next/image";
import { cube, smilingGuy } from "../util/images";
import { mulish, titilliumWebSemiBold } from "../util/fonts";

export default function About() {
  return (
    <div className="w-[80%] h-auto gap-10 flex justify-between  items-center relative p-10">
      <div className="flex flex-col gap-5 w-1/2">
        <span
          className={` ${titilliumWebSemiBold.className} title-large leading-[28px] text-gray-950`}
        >
          About
        </span>
        <span
          className={` ${titilliumWebSemiBold.className} display-medium leading-[52px] text-gray-950`}
        >
          Lorem ipsum dolor sit amet, consectetur{" "}
        </span>
        <span
          className={` ${mulish.className} font-normal body-large leading-[28px] text-gray-500`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </span>
        <div className="flex gap-5 justify-between ">
          <div className="flex flex-col gap-5 w-1/2">
            <Image src={cube} alt="cube" />
            <span
              className={`${titilliumWebSemiBold.className} title-large leading-[28px] text-gray-950`}
            >
              Lorem ipsum
            </span>
            <span
              className={` ${mulish.className} font-normal body-large leading-[28px] text-gray-500`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing{" "}
            </span>
          </div>
          <div className="flex flex-col gap-5 w-1/2">
            <Image src={cube} alt="cube" />
            <span
              className={`${titilliumWebSemiBold.className} title-large leading-[28px] text-gray-950`}
            >
              Lorem ipsum
            </span>
            <span
              className={` ${mulish.className} font-normal body-large leading-[28px] text-gray-500`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing{" "}
            </span>
          </div>
        </div>
        <button
          className={`border w-fit border-[#F7413D] text-[#F7413D] bg-transparent px-[24px] py-[12px] capitalize ${mulish.className} font-semibold label-large leading-[20px] tracking-tight`}
        >
          download now
        </button>
      </div>
      <Image src={smilingGuy} alt="smiling guy" className="w-[40%] h-auto" />
    </div>
  );
}
