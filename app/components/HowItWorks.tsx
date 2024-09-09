import Image from "next/image";
import { titilliumWebSemiBold } from "../util/fonts";
import { howItWorks } from "../util/staticData";
import { app1, app2 } from "../util/images";

export default function HowItWorks() {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-auto flex flex-col justify-evenly lg:gap-10 gap-5 items-center md:px-10 px-5 py-10 ">
      <div className="flex flex-col items-center lg:gap-5 gap-2">
        <span className="lg:display-medium md:display-small headline-medium text-center lg:leading-[52px] text-gray-950">
          How it Works
        </span>
        <span
          className={`${titilliumWebSemiBold.className} text-gray-500 leading-[28px] lg:title-large md:title-medium title-small md:w-[80%] w-full text-center`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </span>
      </div>
      <div className="flex items-baseline lg:gap-2 ">
        <Image src={app1} alt="appImage1" />
        <Image src={app2} alt="appImage2" />
      </div>
      <div className="flex flex-wrap justify-center md:gap-10 gap-5 content-center">
        {howItWorks.map((obj, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 md:w-[380px] sm:w-[280px] w-[240px]"
            >
              <div className="h-12 w-12 rounded-full flex justify-center items-center bg-[#FFE2E1] ">
                <Image src={obj.icon} alt="icon" />
              </div>
              <span
                className={`${titilliumWebSemiBold.className} text-gray-950 lg:leading-[28px] lg:title-large md:title-medium title-small text-center`}
              >
                {obj.heading}
              </span>
              <span
                className={`${titilliumWebSemiBold.className} text-gray-500 lg:leading-[24px] lg:body-large md:body-medium body-small tracking-tight text-center`}
              >
                {obj.body}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
