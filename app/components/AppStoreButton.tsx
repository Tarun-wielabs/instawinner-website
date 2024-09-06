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
      } shadow-lg flex items-center justify-center gap-2 rounded-xl px-5 py-2`}
    >
      <Image
        src={scheme === "dark" ? appleWhite : appleBlack}
        alt="apple"
        className="h-8 w-8 "
      />
      <div className="flex flex-col justify-center items-start">
        <span
          className={`${mulish.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tight leading-[15px] label-small`}
        >
          Download on the
        </span>
        <span
          className={`${mulish.className} ${
            scheme === "dark" ? "font-bold" : "font-extrabold"
          } tracking-tighter leading-[32px] headline-small`}
        >
          App Store
        </span>
      </div>
    </Link>
  );
}
