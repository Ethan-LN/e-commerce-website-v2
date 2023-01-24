import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { ApiSlides } from "../API/SliderApi";
import { useState } from "react";
import "./Slider.css";

function Slider() {
  // useState hooks
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);
  // style
  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";
  // next slide function
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  // previous slide function
  const prvSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  return (
    <div className="parentDiv h-[300px] sm:h-[540px] bg-white flex items-center justify-between mobile:hidden">
      {/* leftarrow div */}
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={prvSlide} />
      </div>
      {/* slide div */}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              className={
                `wrapper flex w-[100%] h-[250px] sm:h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ` +
                slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%] object-cover">
                  <img src={slide.src} alt="slide__image" />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-md text-white sm:text-[55px]">{slide.content.h2}</h2>
                  <p className="text-sm text-white sm:text-[30px]">{slide.content.p}</p>
                  <button className="btn mt-7">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* rightarrow div */}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Slider;
