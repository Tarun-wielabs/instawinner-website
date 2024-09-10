import Image from "next/image";
import { cube, smilingGuy } from "../util/images";
import { mulish, titilliumWebSemiBold } from "../util/fonts";

export default function About() {
  return (
    <div className="xl:w-[80%] md:w-[90%] w-full lg:flex-row flex-col-reverse h-auto gap-10 flex justify-between lg:items-center relative md:px-10 px-5 py-10">
      <div className="flex flex-col md:gap-5 lg:w-1/2 w-full">
        <span
          className={` ${titilliumWebSemiBold.className} lg:title-large text-medium lg:leading-[28px] text-gray-950`}
        >
          About
        </span>
        <span
          className={` ${titilliumWebSemiBold.className} lg:display-medium display-small lg:leading-[52px] text-gray-950`}
        >
          Lorem ipsum dolor sit amet, consectetur{" "}
        </span>
        <span
          className={` ${mulish.className} font-normal lg:body-large body-medium lg:leading-[28px] text-gray-500`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </span>
        <div className="flex sm:flex-row flex-col gap-5 justify-between md:mt-0 mt-5 ">
          <div className="flex flex-col md:gap-5 gap-2 sm:w-5/12">
            <Image src={cube} alt="cube" />
            <span
              className={`${titilliumWebSemiBold.className} lg:title-large title-medium lg:leading-[28px] text-gray-950`}
            >
              Lorem ipsum
            </span>
            <span
              className={` ${mulish.className} font-normal lg:body-large body-medium lg:leading-[28px] text-gray-500`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing{" "}
            </span>
          </div>
          <div className="flex flex-col md:gap-5 gap-2 sm:w-5/12">
            <Image src={cube} alt="cube" />
            <span
              className={`${titilliumWebSemiBold.className} lg:title-large title-medium lg:leading-[28px] text-gray-950`}
            >
              Lorem ipsum
            </span>
            <span
              className={` ${mulish.className} font-normal lg:body-large body-medium  lg:leading-[28px] text-gray-500`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing{" "}
            </span>
          </div>
        </div>
        <button
          className={`md:mt-0 mt-5 border w-fit border-[#F7413D] text-[#F7413D] bg-transparent px-[24px] py-[12px] capitalize ${mulish.className} font-semibold label-large lg:leading-[20px] tracking-tight`}
        >
          download now
        </button>
      </div>
      <Image
        src={smilingGuy}
        alt="smiling guy"
        className="max-w-[700px] md:w-[40%] sm:w-[60%] w-[80%] h-auto"
      />
    </div>
  );
}
