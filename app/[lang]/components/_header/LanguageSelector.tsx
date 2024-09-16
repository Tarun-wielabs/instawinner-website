"use client";

import { useRouter } from "next/navigation";
import { Locale } from "@/i18n.config";
import { mulish } from "@/util/fonts";

export default function LanguageSelector({ lang }: { lang: Locale }) {
  const router = useRouter();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const selectedLang = isChecked ? "en" : "es";
    router.replace(`/${selectedLang}`);
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`${mulish.className} body-medium font-black`}>ES</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={handleLanguageChange}
          checked={lang === "en"}
          className="sr-only peer"
        />

        <div
          className={`w-9 h-5 bg-[#8A449A] hover:bg-[#8A449A] peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#F7413D] hover:peer-checked:bg-[#F7413D]`}
        />
      </label>
      <span className={`${mulish.className} body-medium font-black`}>EN</span>
    </div>
  );
}
