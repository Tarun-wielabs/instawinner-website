import Image from "next/image";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButtoon";
import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  logo,
  xIcon,
} from "../util/images";

export default function LastSection() {
  return (
    <div className="w-full p-10 flex flex-col gap-10 justify-center items-center bg-[#F3EEC6]">
      <Image src={logo} alt="instaWinner" className="h-[100px] w-[100px]" />
      <span
        className={`leading-[52px] display-medium text-gray-950 text-center`}
      >
        It&apos;s easy to <span className="text-[#F7413D]">get started</span>
      </span>
      <span
        className={`leading-[32px] headline-small text-gray-950 text-center`}
      >
        And it&apos;s free - download on both
      </span>
      <div className="flex items-center gap-5">
        <AppStoreButton scheme="dark" />
        <PlayStoreButton scheme="dark" />
      </div>
      <div className="flex gap-5 items-center">
        <Image src={facebookIcon} alt="facebook" />
        <Image src={instagramIcon} alt="instagram" />
        <Image src={linkedinIcon} alt="linkedin" />
        <Image src={xIcon} alt="x" />
      </div>
    </div>
  );
}
