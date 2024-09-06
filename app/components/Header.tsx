import Image from "next/image";
import { logo } from "../util/images";
import { titilliumWebSemiBold } from "../util/fonts";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButtoon from "./PlayStoreButtoon";

export default function Header() {
  return (
    <header className="w-[80%] py-10 px-16 flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <Image src={logo} alt="instawinner" />
        <span
          className={`${titilliumWebSemiBold.className} leading-[54px] text-gray-950 display-small`}
        >
          Insta<span className="text-[#F7413D]">winner</span>
        </span>
      </div>
      <div className="flex items-center gap-5">
        <AppStoreButton scheme="dark" />
        <PlayStoreButtoon scheme="dark" />
      </div>
    </header>
  );
}
