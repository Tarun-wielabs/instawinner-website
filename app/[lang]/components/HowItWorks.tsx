import Image from "next/image";
import { mulish, titilliumWebSemiBold } from "@/util/fonts";
import { app1, app2, howItWorksIcons } from "@/util/images";

type howItWorksProps = {
  howItWorks: {
    heading: string;
    content: {
      heading: string;
      body: string;
    }[];
  };
};

export default function HowItWorks({ howItWorks }: howItWorksProps) {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-auto flex flex-col justify-evenly lg:gap-16 gap-8 items-center md:px-10 px-5 py-16 ">
      <div className="flex flex-col items-center lg:gap-5 gap-2 md:w-[60%] w-full">
        <span className="lg:display-medium display-small text-center lg:leading-[52px] text-gray-950">
          {howItWorks.heading}
        </span>
      </div>
      <div className="flex items-center ">
        <Image
          src={app1}
          alt="appImage1"
          className="max-w-[50%] translate-x-[12%] "
        />
        <Image
          src={app2}
          alt="appImage2"
          className="max-w-[50%] -translate-x-[12%] -z-[1]"
        />
      </div>
      <div className="flex flex-wrap justify-center md:gap-10 gap-5 content-center">
        {howItWorks.content.map((obj, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 md:w-[380px] sm:w-[280px] w-[240px]"
            >
              <div className="h-12 w-12 rounded-full flex justify-center items-center bg-[#FFE2E1] ">
                <Image src={howItWorksIcons[index]} alt="icon" />
              </div>
              <span
                className={`${titilliumWebSemiBold.className} text-gray-950 lg:leading-[28px] lg:title-large title-medium text-center`}
              >
                {obj.heading}
              </span>
              <span
                className={`${mulish.className}  text-gray-500 lg:leading-[28px] lg:body-large body-medium tracking-tight text-center`}
              >
                {obj.body}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
