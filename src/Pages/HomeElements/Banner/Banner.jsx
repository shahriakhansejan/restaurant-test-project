import bannerImg from "../../../assets/Banner/bg.png";
import OfferImg from "../../../assets/Banner/Offer.png";
import VectorImg from "../../../assets/Banner/Vector.png";

const Banner = () => {
  return (
    <div
      className="bg-[#BD1F17] px-5"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="max-w-7xl mx-auto pt-32 md:pt-44 pb-36 md:pb-52 flex gap-2 flex-col md:flex-row items-center">
        <div className="z-10 ml-2">
          <div className="">
            <h1 className="bebasNeue text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-white md:p-6 bg-transparent md:bg-gradient-to-r from-[#BD1F17] to-[#BD1F17]/35">
              TASTE THE AUTHENTIC
              <br />
              SAUDI CUISINE
            </h1>
          </div>
          <p className="text-white text-base lg:text-xl xl:text-2xl mt-4 md:mt-1 roboto">
            Among the best Saudi chefs in the world, serving
            <br />
            you something beyond flavor.
          </p>
          <button className="btn btn-warning rounded-none text-lg mt-7 font-bold roboto">
            Explore Menu
          </button>
        </div>

        <div className="w-full md:w-1/2 static md:absolute right-0">
          <img className="" src={OfferImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
