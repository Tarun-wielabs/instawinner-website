import { titilliumWebBlack } from "../util/fonts";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

export default function DownloadNow() {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-auto min-h-[50vh] flex flex-col justify-center gap-5 py-10 md:px-10 px-6">
      <span className="lg:display-medium display-small lg:leading-[52px] text-black">
        Join us today, <br />
        Download the{" "}
        <span
          className={`${titilliumWebBlack.className} text-white lg:leading-[64px] `}
        >
          InstaWinner
        </span>{" "}
        mobile app now!
      </span>
      <div className="flex gap-5 flex-wrap w-fit">
        <AppStoreButton scheme="light" />
        <PlayStoreButton scheme="light" />
      </div>
    </div>
  );
}
