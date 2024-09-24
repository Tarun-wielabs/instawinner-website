import Image from "next/image";
import { cube, smilingGuy } from "@/util/images";
import {
  mulish,
  titilliumWebBlack,
  titilliumWebRegular,
  titilliumWebSemiBold,
} from "@/util/fonts";

type aboutProps = {
  about: {
    title: string;
    "heading-normal-1": string;
    "heading-styled-1": {
      one: string;
      two: string;
    };
    "heading-normal-2": string;
    "heading-styled-2": string;
    "sub-heading": string;
    section1: {
      heading: string;
      "body-normal-1": string;
      "body-bold": string;
      "body-normal-2": string;
    };
    section2: {
      heading: string;
      "body-normal-1": string;
      "body-bold": string;
      "body-normal-2": string;
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
          {about["heading-normal-1"]}
          <span className={`${titilliumWebSemiBold.className}`}>
            {about["heading-styled-1"].one}
          </span>
          <span
            className={`${titilliumWebBlack.className} uppercase text-[#F7413D]`}
          >
            {about["heading-styled-1"].two}
          </span>
          {about["heading-normal-2"]}{" "}
          <span
            className={`${titilliumWebBlack.className} uppercase text-[#F7413D]`}
          >
            {about["heading-styled-2"]}
          </span>
          !
        </span>
        <span
          className={` ${mulish.className} font-normal lg:body-large body-medium lg:leading-[28px] text-gray-950`}
        >
          {about["sub-heading"]}
        </span>
        <div className="flex sm:flex-row flex-col gap-5 justify-between mt-5 ">
          <div className="flex flex-col md:gap-5 gap-3 sm:w-5/12">
            <Image src={cube} alt="cube" />
            <span
              className={`${titilliumWebSemiBold.className} lg:title-large title-medium uppercase lg:leading-[28px] text-gray-950`}
            >
              {about.section1.heading}
            </span>
            <span
              className={` ${mulish.className} font-normal lg:body-large body-medium lg:leading-[28px] text-gray-950`}
            >
              {about.section1["body-normal-1"]}{" "}
              <span className="font-bold">{about.section1["body-bold"]}</span>
              {about.section1["body-normal-2"]}
            </span>
          </div>
          <div className="flex flex-col md:gap-5 gap-3 sm:w-5/12">
            <Image src={cube} alt="cube" />
            <span
              className={`${titilliumWebSemiBold.className} lg:title-large title-medium uppercase lg:leading-[28px] text-gray-950`}
            >
              {about.section2.heading}
            </span>
            <span
              className={` ${mulish.className} font-normal lg:body-large body-medium  lg:leading-[28px] text-gray-950`}
            >
              {about.section2["body-normal-1"]}{" "}
              <span className="font-bold">{about.section2["body-bold"]}</span>
              {about.section2["body-normal-2"]}
            </span>
          </div>
        </div>
      </div>
      <Image
        src={smilingGuy}
        alt="smiling guy"
        className="max-w-[700px] md:w-[40%] sm:w-[60%] w-[80%] h-auto drop-shadow-2xl"
      />
    </div>
  );
}
