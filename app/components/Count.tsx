import Image from "next/image";
import { mulish, titilliumWebBold, titilliumWebSemiBold } from "../util/fonts";
import { countImage1, countImage2, countImage3 } from "../util/images";

export default function Count() {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full flex lg:flex-row flex-col gap-5 justify-around items-center md:px-10 px-5 pb-10">
      <div className="lg:w-1/2 w-2/3 flex flex-col  items-center justify-center md:gap-5 gap-3">
        <div className="flex w-full gap-10 md:-translate-y-[30px] sm:-translate-y-[20px] -translate-y-[10px]">
          <Image
            src={countImage1}
            alt="img1"
            className="sm:block hidden 2xl:w-80 xl:w-52 w-36 h-auto"
          />
          <Image
            src={countImage2}
            alt="img2"
            className="object-contain 2xl:w-80 xl:w-52 w-36 h-auto"
          />
        </div>

        <Image
          src={countImage3}
          alt="img3"
          className="lg:block hidden 2xl:w-80 xl:w-52 w-36 h-auto"
        />
      </div>
      <div className="flex flex-col justify-evenly lg:gap-10 gap-5 xl:w-1/3 md:w-2/3 w-full">
        <div className="flex 2xl:gap-16 xl:gap-10 gap-5 items-center">
          <div className="flex flex-col lg:gap-5 items-center">
            <span
              className={`${titilliumWebBold.className} xl:text-[80px] lg:display-large md:display-medium display-small text-gray-950 xl:leading-[124px] lg:leading-[100px]`}
            >
              02
            </span>
            <span
              className={`${titilliumWebSemiBold.className} lg:headline-medium md:title-medium title-small lg:leading-[36px] text-[#F7413D]`}
            >
              Stores
            </span>
          </div>
          <div className="flex flex-col lg:gap-5 items-center">
            <span
              className={`${titilliumWebBold.className} xl:text-[80px] lg:display-large md:display-medium display-small text-gray-950 xl:leading-[124px] lg:leading-[100px]`}
            >
              162
            </span>
            <span
              className={`${titilliumWebSemiBold.className} lg:headline-medium md:title-medium title-small lg:leading-[36px] text-[#F7413D]`}
            >
              Promotions
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:gap-5 gap-3">
          <span className="lg:headline-small md:title-medium title-small lg:leading-[32px] text-gray-950 ">
            We are always here to help you
          </span>
          <div className="flex">
            <input
              type="email"
              name="email"
              id="email"
              className={`bg-gray-100 w-2/3 border-0  px-[26px] py-[20px] placeholder:text-gray-500 ${mulish.className} font-semibold lg:leading-[20px] lg:label-large md:label-medium label-small`}
              placeholder="Your email address"
            />
            <input
              type="submit"
              value="let's chat"
              className={`uppercase ${mulish.className} lg:leading-[20px] bg-[#F7413D] text-gray-50 lg:label-large md:label-medium label-small w-1/3 shadow-xl`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
