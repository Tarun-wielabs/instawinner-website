import Image from "next/image";
import { titilliumWebSemiBold } from "../util/fonts";
import Cards from "./_Swiper/Cards";
import { backIcon, forwardIcon } from "../util/images";

export default function SwiperCards() {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-auto flex flex-col lg:gap-16 md:gap-10 gap-5 justify-center items-center md:px-10 py-10 ">
      <div className="flex flex-col items-center lg:gap-5 gap-3 md:px-0 px-5">
        <span className="lg:display-medium display-small text-center lg:leading-[52px] text-gray-950">
          Lorem ipsum dolor sit amet, consectetur
        </span>
        <span
          className={`${titilliumWebSemiBold.className} text-gray-500 lg:leading-[28px] lg:title-large title-medium md:w-[80%] w-full text-center`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </span>
      </div>
      <div className="relative flex justify-center items-center md:px-10 px-5 py-10  gap-5 lg:mt-0 mt-5 w-full ">
        <div className="xl:scale-100 scale-75 w-[565px] h-[520px] absolute lg:left-[50%] md:left-[20%] left-[0%] -top-[10%] -z-[1] to-[#F7413D] from-[#FE7977] bg-gradient-to-b clip-blob" />
        <button className="md:flex hidden swiper-button-prev bg-white h-12 w-12 justify-center items-center rounded-full shadow-lg">
          <Image src={backIcon} alt="back" />
        </button>
        <Cards />
        <button className="md:flex hidden swiper-button-next bg-white h-12 w-12 justify-center items-center rounded-full shadow-lg">
          <Image src={forwardIcon} alt="forward" />
        </button>
      </div>
    </div>
  );
}
