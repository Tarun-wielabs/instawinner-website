import { titilliumWebBlack } from "../util/fonts";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

export default function DownloadNow() {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-auto min-h-[50vh] flex flex-col justify-center gap-5 p-10 ">
      <span className="md:display-medium display-small lg:leading-[52px] text-black">
        Join us today, Download <br className="sm:block hidden" />
        the{" "}
        <span
          className={`${titilliumWebBlack.className} text-white lg:leading-[64px] tracking-tight`}
        >
          InstaWinner
        </span>{" "}
        mobile app now!
      </span>
      <div className="flex gap-5 flex-wrap-reverse w-fit">
        <AppStoreButton scheme="light" />
        <PlayStoreButton scheme="light" />
      </div>
    </div>
  );
}
