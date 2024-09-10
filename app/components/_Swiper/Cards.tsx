"use client";
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import Image from "next/image";
import { mulish, titilliumWebSemiBold } from "@/app/util/fonts";
import { reviews } from "@/app/util/staticData";

export default function Cards() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      pagination={{
        dynamicBullets: true,
      }}
      cardsEffect={{
        rotate: false,
        slideShadows: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCards, Navigation, Pagination, Autoplay]}
      className="xl:w-[650px] lg:w-[500px] md:w-[380px] w-[75vw] "
      initialSlide={2}
    >
      {reviews.map((obj, index) => {
        return (
          <SwiperSlide
            key={index}
            className="rounded-2xl bg-gray-100 md:px-10 px-5 py-5 shadow-xl mb-10"
            style={{ width: "100%", height: "auto" }}
          >
            <div className="flex flex-col items-center gap-2">
              <Image
                src={obj.pfp}
                alt="reviewer"
                className="md:w-auto w-16 h-auto"
              />
              <span
                className={`${titilliumWebSemiBold.className} text-gray-950 lg:headline-medium headline-small lg:leading-[36px] text-center`}
              >
                {obj.heading}
              </span>
              <span
                className={`${titilliumWebSemiBold.className} text-gray-500 lg:title-large title-medium lg:leading-[28px] text-center`}
              >
                {obj.subHeading}
              </span>
              <span
                className={`${mulish.className} text-gray-800 lg:body-large body-medium lg:leading-[24px] tracking-tight text-center`}
              >
                {obj.body}
              </span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
