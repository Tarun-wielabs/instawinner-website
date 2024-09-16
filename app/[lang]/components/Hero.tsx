import Image from "next/image";
import { surprisedWoman } from "@/util/images";
import { titilliumWebBlack, titilliumWebSemiBold } from "@/util/fonts";

type heroProps = {
  hero: {
    "heading-colored": string;
    "heading-normal": string;
    body: string;
  };
};

export default function Hero({ hero }: heroProps) {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-autos flex md:flex-row flex-col-reverse md:justify-between items-center relative md:px-10 px-5 py-10 gap-10">
      <div className="flex flex-col lg:gap-5 gap-3">
        <span
          className={`${titilliumWebBlack.className} lg:display-large display-medium  lg:leading-[64px] leading-tight text-black`}
        >
          <span className="uppercase text-[#F7413D]">
            {hero["heading-colored"]}
          </span>{" "}
          {hero["heading-normal"]}
        </span>
        <span
          className={`${titilliumWebSemiBold.className} lg:title-large title-medium  text-black lg:leading-[28px]`}
        >
          {hero.body}
        </span>
      </div>
      <div className="flex items-end h-full w-auto">
        <div className="2xl:w-[500px] lg:w-[300px] md:w-[250px] sm:w-[350px] w-[250px] 2xl:h-[500px] lg:h-[300px] md:h-[250px] aspect-square h-auto flex justify-center items-center bg-[radial-gradient(50%_50%_at_50%_50%,#B182BB_0%,#8A449A_100%)] rounded-full">
          <Image
            src={surprisedWoman}
            alt="stock image"
            className="scale-125 h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
