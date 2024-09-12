import Image from "next/image";
import { mulish, titilliumWebBold, titilliumWebSemiBold } from "@/util/fonts";
import { countImage1, countImage2, countImage3 } from "@/util/images";

type countProps = {
  count: {
    text1: string;
    text2: string;
    "label-input": string;
    "input-placeholder": string;
    "button-text": string;
  };
};

export default function Count({ count }: countProps) {
  return (
    <div className="md:w-[90%] w-full flex lg:flex-row flex-col md:gap-10 gap-5 justify-around items-center md:px-10 px-5 pb-10">
      <div className="max-w-[900px] lg:w-1/2 w-full flex items-center flex-wrap lg:justify-center md:gap-5 gap-3">
        <Image
          src={countImage1}
          alt="img1"
          className=" 2xl:w-80 xl:w-52 sm:w-48 w-44 max-w-[45%] h-auto"
        />
        <Image
          src={countImage2}
          alt="img2"
          className="object-top object-contain 2xl:w-80 xl:w-52 sm:w-48 w-44 max-w-[45%] h-auto"
        />

        <Image
          src={countImage3}
          alt="img3"
          className="lg:block hidden 2xl:w-60 xl:w-44 sm:w-40 w-36 max-w-[45%] h-auto"
        />
      </div>
      <div className="flex flex-col justify-evenly lg:gap-10 gap-5 pt-5 lg:w-5/12 w-full">
        <div className="flex 2xl:gap-16 gap-10 items-center">
          <div className="flex flex-col lg:gap-5 w-min">
            <span
              className={`${titilliumWebBold.className} xl:text-[80px] lg:display-large display-medium text-gray-950 xl:leading-[124px] lg:leading-[100px]`}
            >
              02
            </span>
            <span
              className={`${titilliumWebSemiBold.className} lg:headline-medium title-medium lg:leading-[36px] text-[#F7413D]`}
            >
              {count.text1}
            </span>
          </div>
          <div className="flex flex-col lg:gap-5 w-min">
            <span
              className={`${titilliumWebBold.className} xl:text-[80px] lg:display-large display-medium text-gray-950 xl:leading-[124px] lg:leading-[100px]`}
            >
              162
            </span>
            <span
              className={`${titilliumWebSemiBold.className} lg:headline-medium title-medium lg:leading-[36px] text-[#F7413D]`}
            >
              {count.text2}
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:gap-5 gap-3">
          <span className="lg:headline-small title-medium lg:leading-[32px] text-gray-950 ">
            {count["label-input"]}
          </span>
          <div className="flex">
            <input
              type="email"
              name="email"
              id="email"
              className={`bg-gray-100 w-2/3 border-0  px-[26px] py-[20px] placeholder:text-gray-500 ${mulish.className} font-semibold lg:leading-[20px] lg:label-large label-medium`}
              placeholder={count["input-placeholder"]}
            />
            <input
              type="submit"
              value={count["button-text"]}
              className={`uppercase ${mulish.className} cursor-pointer lg:leading-[20px] bg-[#F7413D] lg:p-1 text-gray-50 lg:label-large label-medium w-1/3 shadow-xl`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
