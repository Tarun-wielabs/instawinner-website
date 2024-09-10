import { mulish, titilliumWebSemiBold } from "@/app/util/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type InfoSectionProps = {
  title: string;
  body: string;
  open: boolean;
  index: number;
  setOpen: Dispatch<SetStateAction<number>>;
};

function InfoSection({ title, body, open, index, setOpen }: InfoSectionProps) {
  return (
    <div
      onClick={() => setOpen((i) => (index === i ? -1 : index))}
      className="cursor-pointer flex flex-col xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[90%] w-full bg-white rounded-lg "
    >
      <div
        className={`${
          !open && "border-b border-b-gray-300"
        } flex justify-between items-center w-full md:p-5 p-3 gap-2 transition-all`}
      >
        <span
          className={`${titilliumWebSemiBold.className} text-gray-950 lg:leading-[28px] lg:title-large title-medium`}
        >
          {title}
        </span>
        <button
          className={` flex justify-center items-center  transition-all lg:h-[24px] h-[20px] lg:w-[24px] w-[20px]`}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <path
                d="M8 14H16M22 14C22 19.5228 17.5228 24 12 24C6.47715 24 2 19.5228 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14Z"
                stroke="#071A34"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#F7413D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <AnimatePresence initial={true} mode="popLayout">
        {open && (
          <motion.div
            initial={{ opacity: 0, translateY: "-10%" }}
            animate={{ opacity: 1, translateY: "0" }}
            exit={{ opacity: 0, translateY: "-10%" }}
            transition={{ duration: 0.1 }}
            className={`${mulish.className} lg:body-large body-medium lg:leading-[24px] text-gray-500 w-full md:p-5 p-3 border-b border-b-gray-300 pt-0 tracking-tight`}
          >
            {body}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InfoSection;
