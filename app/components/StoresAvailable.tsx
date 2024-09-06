import Image from "next/image";
import { stores } from "../util/staticData";

export default function StoresAvailable() {
  return (
    <div className="w-[80%] h-auto min-h-[50vh] flex flex-col gap-10 justify-center items-center p-10 ">
      <span className="display-medium leading-[52px] text-center w-full text-white">
        4,000+ stores available
      </span>
      <div className="grid grid-cols-5 place-content-evenly w-full gap-10 ">
        {stores.map((obj, index) => {
          return (
            <div key={index} className="flex gap-2 items-center">
              <Image src={obj.icon} alt="icon" />
              <span className="display-small leading-[44px] text-red-50">
                {obj.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
