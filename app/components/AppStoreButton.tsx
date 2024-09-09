import Image from "next/image";
import Link from "next/link";
import { appleBlack, appleWhite } from "../util/images";
import { mulish } from "../util/fonts";

type buttonProps = {
  scheme: "dark" | "light";
};

export default function AppStoreButton({ scheme }: buttonProps) {
  return (
    <Link
      href=""
      className={`${
        scheme === "dark"
          ? "bg-black text-white shadow-none"
          : "bg-white text-black shadow-[#0000002A]"
      } shadow-lg flex items-center justify-center gap-2 rounded-lg md:px-5 px-3 md:py-2 py-1`}
    >
      <Image
        src={scheme === "dark" ? appleWhite : appleBlack}
        alt="apple"
        className=" md:h-6 h-4 md:w-6 w-4 "
      />
      <div className="flex flex-col justify-center items-start">
        <span
          className={`${mulish.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tight label-small`}
        >
          Download on
        </span>
        <span
          className={`${mulish.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tighter md:title-medium title-small`}
        >
          App Store
        </span>
      </div>
    </Link>
  );
}
