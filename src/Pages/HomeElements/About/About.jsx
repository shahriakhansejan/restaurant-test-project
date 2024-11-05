import aboutImg from "../../../assets/About/Frame.png";
import Tabs from "./Tabs";
import contentImg from "../../../assets/About/content.png";
import { FiBox } from "react-icons/fi";
import { FaAward } from "react-icons/fa";
import { RiRedPacketLine } from "react-icons/ri";
import bellTop from "../../../assets/About/top-view-bell.png"

const About = () => {
  return (
    <div className="bg-white py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2">
            <span className="absolute bg-white p-3 mt-5 ml-5 rounded-xl">
              <img className="w-16 md:w-full" src={contentImg} alt="" />
            </span>
            <span><img className="w-screen" src={aboutImg} alt="" /></span>
          </div>
          <div className="w-full lg:w-1/2">
            <Tabs></Tabs>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-16">
          <div className="flex gap-3 items-center">
            <FiBox className="text-7xl text-red-600 bg-white shadow-md p-4 rounded-full" />
            <span>
              <h4 className="text-2xl lg:text-3xl font-bold bebasNeue">FAST DELIVERY</h4>
              <p className="text-base lg:text-xl roboto">Within 30 minutes</p>
            </span>
          </div>
          <div className="flex gap-3 items-center">
          <FaAward className="text-7xl text-red-600 bg-white shadow-md p-4 rounded-full" />
            <span>
              <h4 className="text-2xl lg:text-3xl font-bold bebasNeue uppercase">absolute dining</h4>
              <p className="text-base lg:text-xl roboto">Best buffet restaurant</p>
            </span>
          </div>
          <div className="flex gap-3 items-center">
          <RiRedPacketLine className="text-7xl text-red-600 bg-white shadow-md p-4 rounded-full" />
            <span>
              <h4 className="text-2xl lg:text-3xl font-bold bebasNeue">PICKUP DELIVERY</h4>
              <p className="text-base lg:text-xl roboto">Grab your food order</p>
            </span>
          </div>
          
        </div>
      
      </div>
      <div className="hidden 2xl:flex justify-end -mt-96"><img src={bellTop} alt="" /></div>
    </div>
  );
};

export default About;
