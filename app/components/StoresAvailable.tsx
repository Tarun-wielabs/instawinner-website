import Image from "next/image";
import { stores1, stores2 } from "../util/staticData";
import Marquee from "react-fast-marquee";

export default function StoresAvailable() {
  return (
    <div className=" w-full h-auto flex flex-col gap-10 justify-center items-center py-16 md:px-10 px-5">
      <span className="lg:display-medium display-small lg:leading-[52px] text-center w-full text-white">
        4,000+ <br className="md:hidden block" /> stores available
      </span>
      <Marquee autoFill>
        <div className="flex w-full md:gap-10 gap-5">
          {stores1.map((obj, index) => {
            return (
              <div
                key={index}
                className={` ${
                  index === 0 && "md:ml-10 ml-5"
                } flex gap-2 justify-center items-center`}
              >
                <Image
                  src={obj.icon}
                  alt="icon"
                  className="lg:w-12 md:w-9 w-6 h-auto"
                />
                <span className="lg:headline-medium md:headline-small title-medium lg:leading-[44px] text-red-50">
                  {obj.text}
                </span>
              </div>
            );
          })}
        </div>
      </Marquee>
      <Marquee autoFill direction="right">
        <div className="flex w-full md:gap-10 gap-5">
          {stores2.map((obj, index) => {
            return (
              <div
                key={index}
                className={` ${
                  index === 0 && "md:ml-10 ml-5"
                } flex gap-2 justify-center items-center`}
              >
                <Image
                  src={obj.icon}
                  alt="icon"
                  className="lg:w-12 md:w-9 w-6 h-auto"
                />
                <span className="lg:headline-medium md:headline-small title-medium lg:leading-[44px] text-red-50">
                  {obj.text}
                </span>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
}
