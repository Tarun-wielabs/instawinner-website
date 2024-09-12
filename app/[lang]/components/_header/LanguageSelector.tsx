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
      className={`rounded-md shadow-lg border-2 border-[#F7413D]  bg-white text-black focus:border-2 ${mulish.className} font-bold body-small`}
      onChange={handleLanguageChange}
    >
      <option value="en" className={`${mulish.className} font-bold`}>
        English
      </option>
      <option value="es">Spanish</option>
    </select>
  );
}
