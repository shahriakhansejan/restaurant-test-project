import { LuPhoneCall } from "react-icons/lu";

const Tabs = () => {
  return (
    <div className="dark1 font-medium">
      <div role="tablist" className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="About"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content">
          <h1 className="text-[#181818] font-bold bebasNeue text-4xl xl:text-6xl my-8">
            Exceptional culinary experience and delicious food
          </h1>
          <p className="text-[#333333] roboto">
            Join us in our warm, inviting space to savor cuisine that celebrates
            authenticity and creativity. Whether it’s a casual meal with
            friends, a special occasion, or simply the desire to enjoy
            remarkable food, we’re here to provide an exceptional dining
            experience, one delicious bite at a time.
          </p>

          <div className="my-8 flex gap-12 items-center">
            <button className="btn btn-sm md:btn-md btn-warning text-xs md:text-base rounded-none font-bold roboto">
              ABOUT MORE
            </button>
            <h4 className="roboto text-base md:text-lg font-bold flex items-center gap-2">
              <LuPhoneCall className="text-red-700 text-lg md:text-xl" /> +88 3426 739 485
            </h4>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Experience"
        />
        <div role="tabpanel" className="tab-content">
          <h1 className="text-[#181818] font-bold bebasNeue text-4xl lg:text-6xl my-8">
            An Unforgettable Dining Experience
          </h1>
          <p className="text-[#333333] roboto">
            Whether you're here for a casual meal or a celebration, we strive to
            create a welcoming atmosphere where every detail—from the ambiance
            to the service—enhances your experience. Join us for a memorable
            meal that will linger in your senses long after the last bite.
          </p>

          <div className="my-8 flex gap-12 items-center">
            <button className="btn btn-sm md:btn-md btn-warning text-xs md:text-base rounded-none font-bold roboto">
              Discover More
            </button>
            <h4 className="roboto text-lg font-bold flex items-center gap-2">
              <LuPhoneCall className="text-red-700 text-xl" /> +88 3426 739 485
            </h4>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Contact"
        />
        <div role="tabpanel" className="tab-content">
          <h1 className="text-[#181818] font-bold bebasNeue text-4xl lg:text-6xl my-8">
            Get in Touch with Ours
          </h1>
          <div className="text-[#333333] roboto">
            We are committed to making your time
            with us as enjoyable and seamless as possible.
            <br />
            <span>
              <h4 className="font-semibold"> Our Location:</h4>
              1234 Culinary Ave <br />
              Gourmet City, FL 56789 <br />
              Phone: +88 3426 739 485 <br />
              Email: contact@restaurantname.com
            </span>
          </div>

          <div className="my-8 flex gap-12 items-center">
            <button className="btn btn-sm md:btn-md btn-warning text-xs md:text-base rounded-none font-bold roboto">
            Reach Out
            </button>
            <h4 className="roboto text-lg font-bold flex items-center gap-2">
              <LuPhoneCall className="text-red-700 text-xl" /> +88 3426 739 485
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
