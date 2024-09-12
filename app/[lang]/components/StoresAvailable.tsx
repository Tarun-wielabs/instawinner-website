import Image from "next/image";
import { stores1Icons, stores2Icons } from "@/util/images";
import Marquee from "react-fast-marquee";

type storesAvailableProps = {
  storesAvailable: {
    "heading-count": string;
    "heading-text": string;
    stores1: {
      name: string;
    }[];
    stores2: {
      name: string;
    }[];
  };
};

export default function StoresAvailable({
  storesAvailable,
}: storesAvailableProps) {
  return (
    <div className=" w-full h-auto flex flex-col gap-10 justify-center items-center py-16 md:px-10 px-5">
      <span className="lg:display-medium display-small lg:leading-[52px] text-center w-full text-white">
        {storesAvailable["heading-count"]} <br className="md:hidden block" />{" "}
        {storesAvailable["heading-text"]}
      </span>
      <Marquee autoFill>
        <div className="flex w-full md:gap-10 gap-5">
          {storesAvailable.stores1.map((obj, index) => {
            return (
              <div
                key={index}
                className={` ${
                  index === 0 && "md:ml-10 ml-5"
                } flex gap-2 justify-center items-center`}
              >
                <Image
                  src={stores1Icons[index]}
                  alt="icon"
                  className="lg:w-12 md:w-9 w-6 h-auto"
                />
                <span className="lg:headline-medium md:headline-small title-medium lg:leading-[44px] text-red-50">
                  {obj.name}
                </span>
              </div>
            );
          })}
        </div>
      </Marquee>
      <Marquee autoFill direction="right">
        <div className="flex w-full md:gap-10 gap-5">
          {storesAvailable.stores2.map((obj, index) => {
            return (
              <div
                key={index}
                className={` ${
                  index === 0 && "md:ml-10 ml-5"
                } flex gap-2 justify-center items-center`}
              >
                <Image
                  src={stores2Icons[index]}
                  alt="icon"
                  className="lg:w-12 md:w-9 w-6 h-auto"
                />
                <span className="lg:headline-medium md:headline-small title-medium lg:leading-[44px] text-red-50">
                  {obj.name}
                </span>
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
}
