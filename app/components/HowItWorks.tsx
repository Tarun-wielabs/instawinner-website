import Image from "next/image";
import { titilliumWebSemiBold } from "../util/fonts";
import { howItWorks } from "../util/staticData";
import { app1, app2 } from "../util/images";

export default function HowItWorks() {
  return (
    <div className="w-[80%] h-auto flex flex-col justify-evenly gap-10 items-center p-10">
      <div className="flex flex-col items-center gap-5">
        <span className="display-medium text-center leading-[52px] text-gray-950">
          How it Works
        </span>
        <span
          className={`${titilliumWebSemiBold.className} text-gray-500 leading-[28px] title-large w-[80%] text-center`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </span>
      </div>
      <div className="flex items-baseline gap-2">
        <Image src={app1} alt="appImage1" />
        <Image src={app2} alt="appImage2" />
      </div>
      <div className="flex flex-wrap justify-center gap-10  content-center">
        {howItWorks.map((obj, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 w-[380px]"
            >
              <div className="h-12 w-12 rounded-full flex justify-center items-center bg-[#FFE2E1] ">
                <Image src={obj.icon} alt="icon" />
              </div>
              <span
                className={`${titilliumWebSemiBold.className} text-gray-950 leading-[28px] title-large text-center`}
              >
                {obj.heading}
              </span>
              <span
                className={`${titilliumWebSemiBold.className} text-gray-500 leading-[24px] body-large tracking-tight text-center`}
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
