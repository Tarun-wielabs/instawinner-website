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
      } shadow-2xl flex items-center justify-center gap-2 rounded-xl px-5 py-2`}
    >
      <Image src={playStore} alt="apple" className="h-8 w-8 " />
      <div className="flex flex-col justify-center items-start">
        <span
          className={`${mulish.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tight leading-[15px] label-small`}
        >
          Get it on
        </span>
        <span
          className={`${mulish.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tighter leading-[32px] headline-small`}
        >
          Play Store
        </span>
      </div>
    </Link>
  );
}
