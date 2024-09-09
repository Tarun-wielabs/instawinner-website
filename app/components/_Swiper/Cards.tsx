"use client";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import { mulish, titilliumWebSemiBold } from "@/app/util/fonts";
import { reviews } from "@/app/util/staticData";

export default function Cards() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      cardsEffect={{
        rotate: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCards, Navigation]}
      className="xl:w-[650px] lg:w-[500px] md:w-[350px] w-[250px]"
      initialSlide={2}
    >
      {reviews.map((obj, index) => {
        return (
          <SwiperSlide
            key={index}
            className="rounded-2xl bg-gray-100 md:px-10 px-5 py-5"
            style={{ width: "100%", height: "auto" }}
          >
            <div className="flex flex-col items-center gap-2">
              <Image src={obj.pfp} alt="reviewer" />
              <span
                className={`${titilliumWebSemiBold.className} text-gray-950 lg:headline-medium md:headline-small title-medium lg:leading-[36px] text-center`}
              >
                {obj.heading}
              </span>
              <span
                className={`${titilliumWebSemiBold.className} text-gray-500 lg:title-large md:title-medium title-small lg:leading-[28px] text-center`}
              >
                {obj.subHeading}
              </span>
              <span
                className={`${mulish.className} text-gray-800 lg:body-large md:body-medium body-small lg:leading-[24px] tracking-tight text-center`}
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
