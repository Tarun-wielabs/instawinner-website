import Image from "next/image";
import Link from "next/link";
import { appleBlack, appleWhite } from "../util/images";
import { rubik } from "../util/fonts";

type buttonProps = {
  scheme: "dark" | "light";
};

export default function AppStoreButton({ scheme }: buttonProps) {
  return (
    <Link
      href=""
      className={`${
        scheme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } shadow-xl flex items-center justify-center gap-2 rounded-xl px-4 py-2`}
    >
      <Image
        src={scheme === "dark" ? appleWhite : appleBlack}
        alt="apple"
        className=" h-6 w-6 "
      />
      <div className="flex flex-col justify-center items-start">
        <span
          className={`${rubik.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tight leading-none label-small`}
        >
          Download on
        </span>
        <span
          className={`${rubik.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tight lg:leading-[25px] leading-none title-large`}
        >
          App Store
        </span>
      </div>
    </Link>
  );
}
