import { titilliumWebBlack } from "../util/fonts";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButtoon";

export default function DownloadNow() {
  return (
    <div className="w-[80%] h-auto min-h-[50vh] flex flex-col justify-center gap-5 p-10 ">
      <span className="display-medium leading-[52px] text-black">
        Join us today, Download <br />
        the{" "}
        <span
          className={`${titilliumWebBlack.className} text-white leading-[64px] display-mdium tracking-tight`}
        >
          InstaWinner
        </span>{" "}
        mobile app now!
      </span>
      <div className="flex gap-5">
        <AppStoreButton scheme="light" />
        <PlayStoreButton scheme="light" />
      </div>
    </div>
  );
}
