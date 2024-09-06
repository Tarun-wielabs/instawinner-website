"use client";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import { mulish, titilliumWebSemiBold } from "@/app/util/fonts";
import { reviewImage1 } from "@/app/util/images";

export default function Cards() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      cardsEffect={{
        rotate: false,
        slideShadows: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCards, Navigation]}
      className="w-[700px]"
      initialSlide={2}
    >
      <SwiperSlide
        className="rounded-2xl bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 px-10 py-5"
        style={{ width: "100%", height: "auto" }}
      >
        <div className="flex flex-col items-center gap-2">
          <Image src={reviewImage1} alt="reviewer" />
          <span
            className={`${titilliumWebSemiBold.className} text-grap-950 headline-medium leading-[36px] text-center`}
          >
            Hannah Schmitt
          </span>
          <span
            className={`${titilliumWebSemiBold.className} text-grap-500 title-large leading-[28px] text-center`}
          >
            Lead designer
          </span>
          <span
            className={`${mulish.className} text-grap-800 body-large leading-[24px] tracking-tight text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Cursus
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="rounded-2xl bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 px-10 py-5"
        style={{ width: "100%", height: "auto" }}
      >
        <div className="flex flex-col items-center gap-2">
          <Image src={reviewImage1} alt="reviewer" />
          <span
            className={`${titilliumWebSemiBold.className} text-grap-950 headline-medium leading-[36px] text-center`}
          >
            Hannah Schmitt
          </span>
          <span
            className={`${titilliumWebSemiBold.className} text-grap-500 title-large leading-[28px] text-center`}
          >
            Lead designer
          </span>
          <span
            className={`${mulish.className} text-grap-800 body-large leading-[24px] tracking-tight text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Cursus
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="rounded-2xl bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 px-10 py-5"
        style={{ width: "100%", height: "auto" }}
      >
        <div className="flex flex-col items-center gap-2">
          <Image src={reviewImage1} alt="reviewer" />
          <span
            className={`${titilliumWebSemiBold.className} text-grap-950 headline-medium leading-[36px] text-center`}
          >
            Hannah Schmitt
          </span>
          <span
            className={`${titilliumWebSemiBold.className} text-grap-500 title-large leading-[28px] text-center`}
          >
            Lead designer
          </span>
          <span
            className={`${mulish.className} text-grap-800 body-large leading-[24px] tracking-tight text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Cursus
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="rounded-2xl bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 px-10 py-5"
        style={{ width: "100%", height: "auto" }}
      >
        <div className="flex flex-col items-center gap-2">
          <Image src={reviewImage1} alt="reviewer" />
          <span
            className={`${titilliumWebSemiBold.className} text-grap-950 headline-medium leading-[36px] text-center`}
          >
            Hannah Schmitt
          </span>
          <span
            className={`${titilliumWebSemiBold.className} text-grap-500 title-large leading-[28px] text-center`}
          >
            Lead designer
          </span>
          <span
            className={`${mulish.className} text-grap-800 body-large leading-[24px] tracking-tight text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Cursus
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="rounded-2xl bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 px-10 py-5"
        style={{ width: "100%", height: "auto" }}
      >
        <div className="flex flex-col items-center gap-2">
          <Image src={reviewImage1} alt="reviewer" />
          <span
            className={`${titilliumWebSemiBold.className} text-grap-950 headline-medium leading-[36px] text-center`}
          >
            Hannah Schmitt
          </span>
          <span
            className={`${titilliumWebSemiBold.className} text-grap-500 title-large leading-[28px] text-center`}
          >
            Lead designer
          </span>
          <span
            className={`${mulish.className} text-grap-800 body-large leading-[24px] tracking-tight text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
            nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
            felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Cursus
          </span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
