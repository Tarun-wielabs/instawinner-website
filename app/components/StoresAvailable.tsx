import Image from "next/image";
import { stores } from "../util/staticData";

export default function StoresAvailable() {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-auto flex flex-col gap-10 justify-center items-center py-16 md:px-10 px-5">
      <span className="lg:display-medium md:headline-large headline-medium lg:leading-[52px] text-center w-full text-white">
        4,000+ stores available
      </span>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 place-content-evenly w-full md:gap-10 gap-5">
        {stores.map((obj, index) => {
          return (
            <div key={index} className="flex gap-2 justify-center items-center">
              <Image
                src={obj.icon}
                alt="icon"
                className="lg:w-12 md:w-9 w-6 h-auto"
              />
              <span className="lg:headline-medium md:headline-small title-medium lg:leading-[44px] text-red-50">
                {obj.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
