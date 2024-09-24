import Image from "next/image";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  logo,
  xIcon,
} from "../../../util/images";
import Link from "next/link";
import { titilliumWebBlack } from "@/util/fonts";

type lastSectionProps = {
  lastSection: {
    "heading-normal": string;
    "heading-styled": string;
    "sub-heading": string;
  };
};

export default function LastSection({ lastSection }: lastSectionProps) {
  return (
    <div className="w-full py-10 md:px-10 px-5 flex flex-col md:gap-5 gap-2 justify-center items-center bg-transparent">
      <Image
        src={logo}
        alt="instaWinner"
        className="md:h-[150px] h-[100px] md:w-[150px] w-[100px]"
      />
      <span
        className={`lg:leading-[52px] lg:display-medium md:healine-medium headline-small text-gray-950 text-center`}
      >
        {lastSection["heading-normal"]}{" "}
        <span
          className={`${titilliumWebBlack.className} text-[#F7413D] font-black`}
        >
          {lastSection["heading-styled"]}
        </span>
      </span>
      <span
        className={`lg:leading-[32px] lg:headline-small md:title-medium title-small text-gray-950 text-center`}
      >
        {lastSection["sub-heading"]}
      </span>
      <div className="flex justify-center items-center md:gap-5 gap-3 flex-wrap">
        <AppStoreButton scheme="dark" />
        <PlayStoreButton scheme="dark" />
      </div>
      <div className="flex md:gap-5 flex-wrap gap-3 items-center mt-5">
        <Link
          href="https://www.facebook.com/profile.php?id=61565743185309"
          target="_blank"
        >
          <Image src={facebookIcon} alt="facebook" />
        </Link>
        <Link href="https://www.instagram.com/instawin.app" target="_blank">
          <Image src={instagramIcon} alt="instagram" />
        </Link>
        <Link href="https://www.linkedin.com/company/instawin/" target="_blank">
          <Image src={linkedinIcon} alt="linkedin" />
        </Link>
        <Link href="https://x.com/IntaWinApp" target="_blank">
          <Image src={xIcon} alt="x" />
        </Link>
      </div>
    </div>
  );
}
