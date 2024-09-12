import Image from "next/image";
import { cube, smilingGuy } from "@/util/images";
import {
  mulish,
  titilliumWebRegular,
  titilliumWebSemiBold,
} from "@/util/fonts";

type aboutProps = {
  about: {
    title: string;
    heading: string;
    "sub-heading": string;
    section1: {
      heading: string;
      body: string;
    };
    section2: {
      heading: string;
      body: string;
    };
    "button-text": string;
  };
};

export default function About({ about }: aboutProps) {
  return (
    <div className="xl:w-[80%] md:w-[90%] w-full lg:flex-row flex-col-reverse h-auto gap-10 flex justify-between items-center relative md:px-10 px-5 py-10">
      <div className="flex flex-col md:gap-5 gap-3 lg:w-1/2 w-full">
        <span
          className={` ${titilliumWebSemiBold.className} lg:title-large text-medium lg:leading-[28px] text-gray-950`}
        >
          {about.title}
        </span>
        <span
          className={` ${titilliumWebRegular.className} lg:display-medium display-small lg:leading-[52px] text-gray-950`}
        >
          {about.heading}
        </span>
        <span
          className={` ${mulish.className} font-normal lg:body-large body-medium lg:leading-[28px] text-gray-500`}
        >
          {about["sub-heading"]}
        </span>
        <div className="flex sm:flex-row flex-col gap-5 justify-between md:mt-0 mt-5 ">
          <div className="flex flex-col md:gap-5 gap-3 sm:w-5/12">
            <Image src={cube} alt="cube" />
            <span
              className={`${titilliumWebSemiBold.className} lg:title-large title-medium lg:leading-[28px] text-gray-950`}
            >
              {about.section1.heading}
            </span>
            <span
              className={` ${mulish.className} font-normal lg:body-large body-medium lg:leading-[28px] text-gray-500`}
            >
              {about.section1.body}
            </span>
          </div>
          <div className="flex flex-col md:gap-5 gap-3 sm:w-5/12">
            <Image src={cube} alt="cube" />
            <span
              className={`${titilliumWebSemiBold.className} lg:title-large title-medium lg:leading-[28px] text-gray-950`}
            >
              {about.section2.heading}
            </span>
            <span
              className={` ${mulish.className} font-normal lg:body-large body-medium  lg:leading-[28px] text-gray-500`}
            >
              {about.section2.body}
            </span>
          </div>
        </div>
        <button
          className={`md:mt-0 mt-5 border w-fit border-[#F7413D] text-[#F7413D] bg-transparent px-[24px] py-[12px] capitalize ${mulish.className} font-semibold label-large lg:leading-[20px] tracking-tight`}
        >
          {about["button-text"]}
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
