import Image from "next/image";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  logo,
  xIcon,
} from "../util/images";

export default function LastSection() {
  return (
    <div className="w-full py-10 md:px-10 px-5 flex flex-col lg:gap-10 gap-5 justify-center items-center bg-[#F3EEC6]">
      <Image src={logo} alt="instaWinner" className="h-[100px] w-[100px]" />
      <span
        className={`lg:leading-[52px] lg:display-medium md:healine-medium headline-small text-gray-950 text-center`}
      >
        It&apos;s easy to <span className="text-[#F7413D]">get started</span>
      </span>
      <span
        className={`lg:leading-[32px] lg:headline-small md:title-medium title-small text-gray-950 text-center`}
      >
        And it&apos;s free - download on both
      </span>
      <div className="flex items-center md:gap-5 gap-3 flex-wrap">
        <AppStoreButton scheme="dark" />
        <PlayStoreButton scheme="dark" />
      </div>
      <div className="flex md:gap-5 gap-3 items-center md:mt-0 mt-5">
        <Image src={facebookIcon} alt="facebook" />
        <Image src={instagramIcon} alt="instagram" />
        <Image src={linkedinIcon} alt="linkedin" />
        <Image src={xIcon} alt="x" />
      </div>
    </div>
  );
}
