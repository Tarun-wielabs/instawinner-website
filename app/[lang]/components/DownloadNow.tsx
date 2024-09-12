import { titilliumWebBlack } from "@/util/fonts";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

type downloadNowProps = {
  downloadNow: {
    "text-styled": string;
    "text-normal": string;
  };
};

export default function DownloadNow({ downloadNow }: downloadNowProps) {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-full h-auto min-h-[50vh] flex flex-col justify-center gap-5 py-10 md:px-10 px-6">
      <span className="lg:display-medium display-small lg:leading-[64px] text-black md:w-[60%] w-full">
        <span
          className={`${titilliumWebBlack.className} text-white lg:leading-[64px] `}
        >
          {downloadNow["text-styled"]}
        </span>
        <br />
        {downloadNow["text-normal"]}
      </span>
      <div className="flex gap-5 flex-wrap w-fit">
        <AppStoreButton scheme="light" />
        <PlayStoreButton scheme="light" />
      </div>
    </div>
  );
}
