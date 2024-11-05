import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import foodVideo from "../../../assets/reviews/video1.mp4";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSquareFull } from "react-icons/fa";
import craftImg from "../../../assets/reviews/craft.svg"

const Client = () => {
  const [foodReviews, setFoodReviews] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setFoodReviews(data));
  }, []);

  const handleNext = () => {
    if (swiperRef.current) {
      const totalSlides = foodReviews.length;
      const currentIndex = swiperRef.current.realIndex;
      if (currentIndex === totalSlides - 1) {
        swiperRef.current.slideTo(0);
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      const totalSlides = foodReviews.length;
      const currentIndex = swiperRef.current.realIndex;
      if (currentIndex === 0) {
        swiperRef.current.slideTo(totalSlides - 1);
      } else {
        swiperRef.current.slidePrev();
      }
    }
  };

  return (
    <div className="bg-white py-16 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
      <div className="mb-16 flex items-center justify-between">
          <span>
            <h4 className="roboto mb-2 text-red-600 flex items-center gap-2">
              <FaSquareFull className="text-xs" />{" "}
              <span className="tex-xl roboto font-bold ">
                Crispy, Every Bite Taste
              </span>
            </h4>
            <h1 className="text-4xl md:text-6xl font-bold bebasNeue text-[#181818]">
              what some of ours customers say
            </h1>
          </span>
          <span className="hidden md:flex gap-6">
            <button
              className="bg-white p-4 rounded-full shadow-lg text-3xl hover:text-red-600 font-bold"
              onClick={handlePrev}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="bg-white p-4 rounded-full shadow-lg text-3xl hover:text-red-600 font-bold"
              onClick={handleNext}
            >
              <IoIosArrowForward />
            </button>
          </span>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[EffectFlip]}
          effect="flip"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="3"
          flipEffect={{
            slideShadows: true,
          }}
        >
          {foodReviews.map((foodReview) => (
            <SwiperSlide key={foodReview._id}>
              <div className="flex justify-stretch flex-col-reverse lg:flex-row roboto text-[#0A1425]">
                <div className="bg-[#FEBF00] flex flex-col gap-12 justify-between w-full lg:w-5/12 px-8 md:px-16 py-10 md:py-20">
                  <p className="text-xl text-justify">{foodReview.review}</p>
                  <div className="flex justify-between border-b border-[#0A1425] pb-2 items-center">
                    <span>
                      <h3 className="bebasNeue text-lg font-bold">
                        {foodReview.Name}
                      </h3>
                      <h6 className="text-sm text-[#333333]">
                        {foodReview.address}
                      </h6>
                    </span>
                    <span className="">
                      <img
                        className="w-10 rounded-full"
                        src={foodReview.photo}
                        alt=""
                      />
                    </span>
                  </div>
                  <span className="absolute left-0 bottom-10"><img className="w-6 md:w-full" src={craftImg} alt="" /></span>
                </div>

                <div className="w-full lg:w-7/12">
                  <video
                    controls
                    src={foodVideo}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  ></video>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="flex md:hidden justify-center mt-5 gap-6">
          <button
            className="bg-white p-3 rounded-full shadow-lg text-2xl hover:text-red-600 font-bold"
            onClick={handlePrev}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="bg-white p-3 rounded-full shadow-lg text-2xl hover:text-red-600 font-bold"
            onClick={handleNext}
          >
            <IoIosArrowForward />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Client;
