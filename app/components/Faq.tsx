import { titilliumWebSemiBold } from "../util/fonts";
import { list } from "../util/staticData";
import Qna from "./_faq/Qna";

export default function Faq() {
  return (
    <div
      id="faq"
      className={`md:px-10 px-5 py-10 h-auto w-full flex flex-col justify-evenly items-center md:gap-5 gap-1`}
    >
      <span
        className={`lg:leading-[52px] lg:display-medium md:headline-medium headline-small text-gray-950 text-center`}
      >
        Frequently Asked Questions
      </span>
      <span
        className={`${titilliumWebSemiBold.className} lg:leading-[28px] lg:title-large md:title-medium title-small text-gray-500 text-center`}
      >
        Everything you need to know about the product and billing.
      </span>
      <div className="flex flex-col md:gap-5 gap-3 mt-3 w-full justify-center items-center ">
        <Qna list={list} />
      </div>
    </div>
  );
}
