import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./HeroStyle.css";

import DataDiri from "../assets/FotoDiri.jpg";

function Hero() {
  return (
    <div
      className="box-border w-full p-10 lg:p-20 xl:p-0 max-w-5xl mx-auto h-screen bg-[#E5E5E5] flex flex-col md:flex-row"
      id="Home"
    >
      <div className="relative w-full h-full md:w-1/2 lg:w-3/5 TypingWrapper">
        <div className="flex flex-col justify-center h-full">
          <TypeAnimation
            sequence={[
              "Hi! I'm Edwin Fedora Lolo\nWeb Developer",
              1000,
              "Hi! I'm Edwin Fedora Lolo\nMobile Developer",
              1000,
              "Hi! I'm Edwin Fedora Lolo\nSoftware Developer",
              1000,
            ]}
            wrapper="span"
            speed={65}
            className="z-10 mb-5 text-3xl Typing"
            repeat={Infinity}
          />
          <h4
            className="text-[#282828] break-words"
            style={{ fontFamily: "Neue Normal, sans-serif" }}
          >
            I am an undergraduate student majoring in Informatics with a strong
            passion for application development, web development, and software
            engineering.
          </h4>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full md:w-1/2 lg:w-2/5 FotoDiriContainer">
        {/* Gambar */}
        <div>
          <img
            src={DataDiri}
            alt="FotoDiri"
            className="w-full border-4 border-white rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
