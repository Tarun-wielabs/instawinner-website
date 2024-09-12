"use client";

import { useRouter } from "next/navigation";
import { Locale } from "@/i18n.config";
import { mulish } from "@/util/fonts";

export default function LanguageSelector({ lang }: { lang: Locale }) {
  const router = useRouter();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLang = event.target.value;
    router.replace(`/${selectedLang}`);
  };

  return (
    <select
      value={lang === "en" || !lang ? "en" : "es"}
      className={` bg-white shadow-lg  border border-[#F7413D] text-black rounded-lg focus:ring-0 focus:border-[#F7413D] p-2.5 ${mulish.className} font-bold body-small`}
      onChange={handleLanguageChange}
    >
      <option value="en" className={`${mulish.className} font-bold`}>
        English
      </option>
      <option value="es" className={`${mulish.className} font-bold`}>
        Spanish
      </option>
    </select>
  );
}
