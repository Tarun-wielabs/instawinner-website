import Image from "next/image";
import { logo } from "../util/images";
import { titilliumWebSemiBold } from "../util/fonts";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
// import Hamburger from "./_header/Hamburger";

export default function Header() {
  return (
    <header
      id="header"
      className="xl:w-[80%] lg:w-[90%] w-full lg:py-10 sm:py-5 py-3 lg:px-16 md:px-12 px-8 flex justify-between items-center"
    >
      <div className="flex lg:gap-5 md:gap-3 gap-1 items-center">
        <Image
          src={logo}
          alt="instawinner"
          className="lg:w-[48px] md:w-[32px] w-[24px] lg:h-[48px] md:h-[32px] h-[24px] "
        />
        <span
          className={`${titilliumWebSemiBold.className} leading-[54px] text-gray-950 lg:display-small md:headline-medium headline-small `}
        >
          Insta<span className="text-[#F7413D]">winner</span>
        </span>
      </div>
      <div className="md:flex hidden items-center gap-5">
        <AppStoreButton scheme="dark" />
        <PlayStoreButton scheme="dark" />
      </div>
      {/* <Hamburger /> */}
    </header>
  );
}
