import Image from "next/image";
import { logo } from "@/util/images";
import { titilliumWebBlack, titilliumWebSemiBold } from "@/util/fonts";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import { Locale } from "@/i18n.config";
import LanguageSelector from "./_header/LanguageSelector";
// import Hamburger from "./_header/Hamburger";

type headerProps = {
  header: {
    "title-normal": string;
    "title-colored": string;
    download: string;
  };
  lang: Locale;
};

export default function Header({ header, lang }: headerProps) {
  return (
    <header
      id="header"
      className="xl:w-[80%] w-full sm:py-5 py-3 lg:px-10 px-8 flex justify-between items-center"
    >
      <div className="flex lg:gap-5 md:gap-3 gap-1 items-center">
        <Image
          src={logo}
          alt="instawinner"
          className="md:h-[90px] h-[70px] md:w-[90px] w-[70px]"
        />
        <span
          className={`${titilliumWebSemiBold.className} sm:block hidden leading-[54px] text-gray-950  md:display-medium display-small `}
        >
          {header["title-normal"]}
          <span className={`${titilliumWebBlack.className} text-[#F7413D]`}>
            {header["title-colored"]}
          </span>
        </span>
      </div>
      <div className="flex items-center gap-10">
        <LanguageSelector lang={lang} />{" "}
        <div className="lg:flex hidden flex-col justify-center items-center">
          <span className=" headline-small lg:leading-[48px]">
            {header.download}
          </span>
          <div className="flex items-center gap-5">
            <AppStoreButton scheme="dark" />
            <PlayStoreButton scheme="dark" />
          </div>
        </div>
      </div>

      {/* <Hamburger /> */}
    </header>
  );
}
