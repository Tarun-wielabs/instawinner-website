import { titilliumWebSemiBold } from "../util/fonts";
import { list } from "../util/staticData";
import Qna from "./_faq/Qna";

export default function Faq() {
  return (
    <div
      id="faq"
      className={`p-10  h-auto w-full flex flex-col justify-evenly items-center gap-5`}
    >
      <span
        className={`leading-[52px] display-medium text-gray-950 text-center`}
      >
        Frequently Asked Questions
      </span>
      <span
        className={`${titilliumWebSemiBold.className} leading-[28px] title-large text-gray-500 text-center`}
      >
        Everything you need to know about the product and billing.
      </span>
      <div className="flex flex-col gap-5 mt-3 w-full justify-center items-center bg-[url('/Shadow.png')] bg-no-repeat bg-contain">
        <Qna list={list} />
      </div>
    </div>
  );
}
