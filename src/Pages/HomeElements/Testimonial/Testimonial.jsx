import { FaSquareFull } from "react-icons/fa";
import testimonialImg from "../../../assets/testimonial/testimonial.png";

const Testimonial = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${testimonialImg})`,
        backgroundPosition: "center",
      }}
    >
      <div className=" max-w-7xl roboto py-28 mx-auto">
        <div className="ml-8">
            <h2 className="text-red-600 font-bold text-xl flex items-center gap-2"><FaSquareFull className="text-xs"/> Book Now</h2>
            <h1 className="text-4xl md:text-6xl font-bold bebasNeue text-white my-4">BOOK YOUR TABLE</h1>
            <p className="text-white w-full  md:w-1/2">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
        </div>
        <div className="card">
          <form className="card-body text-white w-full lg:w-1/2">
            <span className="flex flex-col md:flex-row gap-3">
              <div className="form-control w-full">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="input border border-white rounded-none bg-white/5"
                  required
                />
              </div>
              <div className="form-control w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input border border-white rounded-none bg-white/5"
                  required
                />
              </div>
            </span>
            <span className="flex flex-col md:flex-row my-2 gap-3">
              <div className="form-control w-full">
                {/* <input
                  type="date"
                  placeholder="Reservation Date"
                  className="input border border-white rounded-none bg-white/5"
                  required
                /> */}
                <input className="input border border-white bg-white/5 rounded-none" placeholder="Reservation Date" type="date" id="date" name="date"></input>
              </div>
              <div className="form-control w-full">
                <input
                  type="number"
                  placeholder="Total People"
                  className="input border border-white rounded-none bg-white/5"
                  required
                />
              </div>
            </span>
            <textarea
              className="textarea  border border-white rounded-none bg-white/5"
              placeholder="Message"
            ></textarea>

            <div className="mt-6">
              <button className="btn btn-warning rounded-none">BOOK NOW</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
