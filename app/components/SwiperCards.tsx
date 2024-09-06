import Image from "next/image";
import { titilliumWebSemiBold } from "../util/fonts";
import Cards from "./_Swiper/Cards";
import { backIcon, forwardIcon } from "../util/images";

export default function SwiperCards() {
  return (
    <div className="w-[80%] h-auto min-h-[90vh] flex flex-col gap-16 justify-evenly items-center p-10 ">
      <div className="flex flex-col items-center gap-5">
        <span className="display-medium text-center leading-[52px] text-gray-950">
          Lorem ipsum dolor sit amet, consectetur
        </span>
        <span
          className={`${titilliumWebSemiBold.className} text-gray-500 leading-[28px] title-large w-[80%] text-center`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </span>
      </div>
      <div className="relative flex justify-center items-center p-10 gap-20">
        <div className="w-[565px] h-[520px] absolute left-[40%] -top-[10%] -z-[1] to-[#F7413D] from-[#FE7977] bg-gradient-to-b clip-blob" />
        <button className="swiper-button-prev bg-white h-12 w-12 flex justify-center items-center rounded-full shadow-lg">
          <Image src={backIcon} alt="back" />
        </button>
        <Cards />
        <button className="swiper-button-next bg-white h-12 w-12 flex justify-center items-center rounded-full shadow-lg">
          <Image src={forwardIcon} alt="forward" />
        </button>
      </div>
    </div>
  );
}
