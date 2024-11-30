import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import { Pagination, Keyboard, Mousewheel } from "swiper/modules";
import "./Font.css";

// import Image
import UTSsem2lab from "../assets/UTS_LAB_Sem2.png";
import UTSsem2 from "../assets/UTS_LEC_Sem2.png";
import UASsem2lab from "..//assets/UAS_Sem2_1.png";

import UTSsem3lab from "../assets/UTS_LAB_Sem3.png";
import UASsem3 from "../assets/UAS_Sem3.png";

import FokusUltimagz from "../assets/fokus_ultimagz.png";
import UFest from "../assets/UMNFestival.png";

// React-Native APP
import GmailHome from "../assets/CrossPlat/Gmail_Home_1.png";
import GmailMeet from "../assets/CrossPlat/Gmail_Meet.png";
import GmailSidebar from "../assets/CrossPlat/Gmail_Sidebar.png";

import UnixHome from "../assets/CrossPlat/Unix_Home_1.png";
import UnixHistory from "../assets/CrossPlat/Unix_History.png";
import UnixDetail from "../assets/CrossPlat/Unix_Detail.png";
import UnixPayment from "../assets/CrossPlat/Unix_Payment.png";
import UnixPin from "../assets/CrossPlat/Unix_Pin.png";
import UnixPulsa from "../assets/CrossPlat/Unix_Pulsa.png";

const reviews = [
  {
    name: "01 Fokus Ultimagz",
    image: FokusUltimagz,
    link: "/project/fokus-ultimagz",
  },
  {
    name: "02 UMN Festival",
    image: UFest,
    link: "/project/umn-festival",
  },
  {
    name: "03 Kopi Popi",
    image: UASsem3,
    link: "/project/kopi-popi",
  },
  {
    name: "04 Gmail Clone",
    image: GmailHome,
    link: "/project/gmail-clone",
  },
  {
    name: "05 Unix App",
    image: UnixHome,
    link: "/project/unix-app",
  },
  {
    name: "06 Flix Flow",
    image: UASsem2lab,
    link: "/project/flix-flow",
  },
  {
    name: "07 Miner",
    image: UTSsem2lab,
    link: "/project/miner",
  },
  {
    name: "08 Pet Simulator",
    image: UTSsem2,
    link: "/project/pet-simulator",
  },
  {
    name: "09 To Do List",
    image: UTSsem3lab,
    link: "/project/to-do-list",
  },
];

function Project() {
  return (
    <div
      className="box-border w-full h-fit p-10 md:px-20 md:py-10 bg-[#E5E5E5]"
      id="Project"
    >
      <h1
        style={{ fontFamily: "Neue Normal, sans-serif" }}
        className="text-5xl"
      >
        Project
      </h1>
      <div className="w-full mt-6 border-b-[3px] border-[#000000]"></div>

      <div className="box-border h-full pt-10">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          // navigation={true}
          keyboard={{ enabled: true }}
          mousewheel={{ invert: true }}
          modules={[Pagination, Keyboard, Mousewheel]}
          className="h-full mySwiper"
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="h-full px-3 py-2 rounded-md">
              <a href="#" target="_blank" className="flex flex-col">
                <div className="flex flex-col h-full p-3">
                  <h1
                    className="mb-3 text-[#282828] text-md"
                    style={{ fontFamily: "Neue Normal, sans-serif" }}
                  >
                    {review.name}
                  </h1>
                  {/* <p>{review.text}</p> */}
                  <img src={review.image} alt="UTSsem2lab" className="w-auto" />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
