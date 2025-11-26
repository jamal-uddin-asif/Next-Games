"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import banner1 from "../../assets/fabio-magalhaes-nmTm7knUnqs-unsplash.jpg";
import banner2 from "../../assets/felirbe-x7EkH3S6EjU-unsplash.jpg";
import banner3 from "../../assets/onur-binay-J7Spe1GTCUw-unsplash.jpg";
import banner4 from "../../assets/front-view-ninja-wearing-equipment.jpg";
import banner5 from "../../assets/man-racing-dirt-bike-fantasy-environment.jpg";
import banner6 from "../../assets/man-wearing-vr-glasses-gaming - Copy.jpg";
import Image from "next/image";
import banner from "../../assets/man-racing-dirt-bike-fantasy-environment.jpg";
const slider = [banner2, banner3,  banner5];

const HeroSlider = () => {
  return (
    
    <div className="w-full my-5">


     <div className="h-[300px] relative  ">
              <Image
                className="object-cover rounded-xl"
                alt='Hero Banner'
                src={banner}
                fill
                loading="eager"
              ></Image>
              <div className="inset-0 text-center absolute space-y-2 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-white">
                 Welcome to Next-Level Gaming, Starts Now
                </h1>
                <p className="text-white ">
                  Jump into intense battles and prove your power.
                </p>
              </div>
            </div>

    </div>
  );
};

export default HeroSlider;
