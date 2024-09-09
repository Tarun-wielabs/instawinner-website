import Image from "next/image";
import Link from "next/link";
import { playStore } from "../util/images";
import { mulish } from "../util/fonts";

type buttonProps = {
  scheme: "dark" | "light";
};

export default function PlayStoreButton({ scheme }: buttonProps) {
  return (
    <Link
      href=""
      className={`${
        scheme === "dark"
          ? "bg-black text-white shadow-none"
          : "bg-white text-black shadow-[#0000002A]"
      } shadow-2xl flex items-center justify-center gap-2 rounded-lg  md:px-5 px-3 md:py-2 py-1`}
    >
      <Image src={playStore} alt="apple" className=" md:h-6 h-4 md:w-6 w-4  " />
      <div className="flex flex-col justify-center items-start">
        <span
          className={`${mulish.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tight  label-small`}
        >
          Get it on
        </span>
        <span
          className={`${mulish.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tighter  md:title-medium title-small`}
        >
          Play Store
        </span>
      </div>
    </Link>
  );
}
