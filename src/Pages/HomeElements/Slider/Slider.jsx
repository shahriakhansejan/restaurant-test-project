import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FaSquareFull } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sliderImg from "../../../assets/slider/slider.png";

const Slider = () => {
  const swiperRef = useRef(null);
  const [foodItems, setFoodItems] = useState([]);
  // console.log(foodItems);

  useEffect(() => {
    fetch("/food.json")
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, []);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="bg-[#FBF7F2] px-4">
      <div className="absolute left-0 mt-44 hidden xl:block">
        <img src={sliderImg} alt="" />
      </div>
      <div className="max-w-7xl mx-auto py-16 md:py-28">
        <div className="mb-16 flex items-center justify-between">
          <span>
            <h4 className="roboto mb-2 text-red-600 flex items-center gap-2">
              <FaSquareFull className="text-xs" />{" "}
              <span className="tex-xl roboto font-bold ">
                Crispy, Every Bite Taste
              </span>
            </h4>
            <h1 className="text-4xl md:text-6xl font-bold bebasNeue text-[#181818]">
              Popular Food Items
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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
        >
          {foodItems.map((foodItem) => (
            <SwiperSlide key={foodItem._id}>
              <div className="bg-white text-[#0A1425] text-center p-7 rounded">
                <img
                  className="rounded-full w-32 mx-auto"
                  src={foodItem.img}
                  alt="Food"
                />
                <hr className="my-6 mx-24 border-t-4 border-red-500" />
                <h1 className="text-2xl font-bold bebasNeue">
                  {foodItem.name}
                </h1>
                <p className="roboto">{foodItem.des}</p>
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

export default Slider;
