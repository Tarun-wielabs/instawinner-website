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

export default function Home() {
  return (
    <div className="w-auto h-auto ">
      <div className=" flex justify-center items-center">
        <Header />
      </div>
      <div className="relative flex justify-center items-center mt-10">
        <div className="md:w-3/4 w-full h-full absolute left-0 top-0 md:rounded-tr-full rounded-tr-[171px] scale-y-110 -z-[1] bg-[#F3EEC6]" />
        <Hero />
      </div>
      <div className=" flex justify-center items-center">
        <Count />
      </div>
      <div className="flex justify-center items-center bg-[#E7E7E7]">
        <About />
      </div>
      <div className="flex justify-center items-center">
        <HowItWorks />
      </div>
      <div className="flex justify-center items-center  to-[#F7413D] from-[#FE7977] bg-gradient-to-b">
        <DownloadNow />
      </div>
      <div className="flex justify-center items-center overflow-hidden">
        <SwiperCards />
      </div>
      <div className="flex justify-center items-center bg-gray-950">
        <StoresAvailable />
      </div>
      <Faq />
      <LastSection />
      <Footer />
    </div>
  );
}
