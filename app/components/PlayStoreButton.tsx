import Image from "next/image";
import Link from "next/link";
import { playStore } from "../util/images";
import { rubik } from "../util/fonts";

type buttonProps = {
  scheme: "dark" | "light";
};

export default function PlayStoreButton({ scheme }: buttonProps) {
  return (
    <Link
      href=""
      className={`${
        scheme === "dark" ? "bg-black text-white" : "bg-white text-black "
      } shadow-2xl flex items-center justify-center gap-2 rounded-xl px-4 py-2`}
    >
      <Image src={playStore} alt="apple" className=" h-6 w-6 " />
      <div className="flex flex-col justify-center items-start">
        <span
          className={`${rubik.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } label-small leading-none`}
        >
          Get it on
        </span>
        <span
          className={`${rubik.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          }  title-large lg:leading-[25px] leading-none tracking-tight`}
        >
          Play Store
        </span>
      </div>
    </Link>
  );
}
