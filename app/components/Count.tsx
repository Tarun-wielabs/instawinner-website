import Image from "next/image";
import { mulish, titilliumWebBold, titilliumWebSemiBold } from "../util/fonts";
import { countImage1, countImage2, countImage3 } from "../util/images";

export default function Count() {
  return (
    <div className="w-[80%] flex gap-5 justify-center items-center px-10 pb-10">
      <div className="w-1/2 flex flex-col items-center justify-center gap-5">
        <div className="flex gap-10 -translate-y-[10%]">
          <Image src={countImage1} alt="img1" />
          <Image src={countImage2} alt="img2" className="object-contain" />
        </div>

        <Image src={countImage3} alt="img3" />
      </div>
      <div className="flex flex-col justify-evenly gap-10 w-1/3">
        <div className="flex gap-16 items-center">
          <div className="flex flex-col gap-5 items-center">
            <span
              className={`${titilliumWebBold.className} text-[94px] text-gray-950 leading-[124px]`}
            >
              02
            </span>
            <span
              className={`${titilliumWebSemiBold.className} headline-medium leading-[36px] text-[#F7413D]`}
            >
              Stores
            </span>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <span
              className={`${titilliumWebBold.className} text-[94px] text-gray-950 leading-[124px]`}
            >
              162
            </span>
            <span
              className={`${titilliumWebSemiBold.className} headline-medium leading-[36px] text-[#F7413D]`}
            >
              Promotions
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="headline-small leading-[32px] text-gray-950 ">
            We are always here to help you
          </span>
          <div className="flex">
            <input
              type="email"
              name="email"
              id="email"
              className={`bg-gray-100 w-[360px] border-0  px-[26px] py-[20px] placeholder:text-gray-500 ${mulish.className} font-semibold leading-[20px] label-large`}
              placeholder="Your email address"
            />
            <input
              type="submit"
              value="let's chat"
              className={`uppercase ${mulish.className} leading-[20px] bg-[#F7413D] text-gray-50 label-large px-[36px] py-[24px] shadow-xl`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
