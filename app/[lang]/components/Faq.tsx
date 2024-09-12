import { titilliumWebSemiBold } from "@/util/fonts";
import Qna from "./_faq/Qna";

type faqProps = {
  faq: {
    heading: string;
    "sub-heading": string;
    qna: {
      title: string;
      body: string;
    }[];
  };
};

export default function Faq({ faq }: faqProps) {
  return (
    <div
      id="faq"
      className={`md:px-10 px-5 py-10 h-auto w-full flex flex-col justify-evenly items-center md:gap-5 gap-3`}
    >
      <span
        className={`lg:leading-[52px] lg:display-medium display-small text-gray-950 text-center`}
      >
        {faq.heading}
      </span>
      <span
        className={`${titilliumWebSemiBold.className} lg:leading-[28px] lg:title-large title-medium  text-gray-500 text-center`}
      >
        {faq["sub-heading"]}
      </span>
      <div className="flex flex-col md:gap-5 gap-3 mt-3 w-full justify-center items-center ">
        <Qna list={faq.qna} />
      </div>
    </div>
  );
}
