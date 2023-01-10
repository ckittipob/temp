"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { IThumbnail } from "types/thumbnail";
import Link from "next/link";



export interface IClusterMapSlideShowProps {
  payload: IThumbnail[];
}

const ClusterMapSlideShow = ({ payload }: IClusterMapSlideShowProps) => {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {payload.map((item) => (
          <SwiperSlide key={item.id} className="!w-fit  flex flex-col !-0 !mr-[24px] group">
            <div>
              <Link
                href={item.link || "/"}
                className="p-0 m-0 cursor-pointer h-[180px] w-[376px] overflow-hidden flex items-center"
              >
                <img
                  className="w-full"
                  src={item.image || "/images/empty.png"}
                />
              </Link>
            </div>

            <div className="text-[30px] mt-[15px] group-hover:text-secondary duration-300">{item.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ClusterMapSlideShow;
