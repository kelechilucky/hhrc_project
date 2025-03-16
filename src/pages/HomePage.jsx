import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Header from "../components/header";
import HomeHero from "../components/HomeHero";

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 w-full h-full"
      >
        <SwiperSlide>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background1.jpg')" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background2.jpg')" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background3.jpg')" }}
          />
        </SwiperSlide>
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HomeHero />
      </div>
    </div>
  );
};

export default HomePage;
