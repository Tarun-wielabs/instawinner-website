import { getDictionary } from "@/util/dictionary";
import About from "./components/About";
import Count from "./components/Count";
import DownloadNow from "./components/DownloadNow";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LastSection from "./components/LastSection";
import StoresAvailable from "./components/StoresAvailable";
import SwiperCards from "./components/SwiperCards";

import { Locale } from "@/i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const data = await getDictionary(lang);

  return (
    <div className="w-auto h-auto ">
      <div className=" flex justify-center items-center">
        <Header header={data.header} lang={lang} />
      </div>
      <div className="relative flex justify-center items-center mt-10">
        <div className="md:w-3/4 w-full h-full absolute left-0 top-0 md:rounded-tr-full rounded-tr-[171px] scale-y-110 -z-[1] bg-[#66C3CA]" />
        <Hero hero={data.hero} />
      </div>
      <div className=" flex justify-center items-center">
        <Count count={data.count} />
      </div>
      <div className="flex justify-center items-center bg-[#E7E7E7]">
        <About about={data.about} />
      </div>
      <div className="flex justify-center items-center">
        <HowItWorks howItWorks={data["how-it-works"]} />
      </div>
      <div className="flex justify-center items-center  to-[#F7413D] from-[#FE7977] bg-gradient-to-b">
        <DownloadNow downloadNow={data["download-now"]} />
      </div>
      <div className="flex justify-center items-center overflow-hidden">
        <SwiperCards swiperCards={data["swiper-cards"]} />
      </div>
      <div className="flex justify-center items-center bg-gray-950">
        <StoresAvailable storesAvailable={data["stores-available"]} />
      </div>
      <Faq faq={data.faq} />
      <LastSection lastSection={data["last-section"]} />
      <Footer />
    </div>
  );
}
