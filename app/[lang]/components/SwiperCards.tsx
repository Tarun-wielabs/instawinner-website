import Image from "next/image";
import Cards from "./_Swiper/Cards";
import { backIcon, forwardIcon } from "@/util/images";
import { titilliumWebBold } from "@/util/fonts";

type swiperCardsProps = {
  swiperCards: {
    heading: string;
    reviews: {
      name: string;
      "below-name": string;
      body: string;
    }[];
  };
};

export default function SwiperCards({ swiperCards }: swiperCardsProps) {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-auto flex flex-col lg:gap-16 md:gap-10 gap-5 justify-center items-center md:px-10 py-10 ">
      <div className="flex flex-col items-center lg:gap-5 gap-3 md:px-0 px-5">
        <span
          className={`${titilliumWebBold.className} lg:display-medium display-small text-center lg:leading-[52px] text-gray-950`}
        >
          {swiperCards.heading}
        </span>
      </div>
      <div className="relative flex justify-center items-center md:px-10 px-5 py-10  gap-5 lg:mt-0 mt-5 w-full ">
        <div className="xl:scale-100 scale-75 w-[565px] h-[520px] absolute lg:left-[50%] md:left-[20%] left-[0%] -top-[10%] -z-[1] to-[#F7413D] from-[#FE7977] bg-gradient-to-b clip-blob" />
        <button className="md:flex hidden swiper-button-prev bg-whsite h-12 w-12 justify-center items-center rounded-full shadow-lg">
          <Image src={backIcon} alt="back" />
        </button>
        <Cards reviews={swiperCards.reviews} />
        <button className="md:flex hidden swiper-button-next bg-white h-12 w-12 justify-center items-center rounded-full shadow-lg">
          <Image src={forwardIcon} alt="forward" />
        </button>
      </div>
    </div>
  );
}
