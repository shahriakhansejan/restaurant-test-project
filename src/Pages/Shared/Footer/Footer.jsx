import { MdEmail, MdOutlineWatchLater } from "react-icons/md";
import footerBg from "../../../assets/footer/Footer.png";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocation } from "react-icons/io5";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover' }} className="">
      <div className="text-white max-w-7xl mx-auto px-4 py-28">
        <h1 className="text-4xl md:text-6xl font-bold text-center bebasNeue mb-12">
          we ready to have you the best dining experiences
        </h1>
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-4">
          {/* fraction */}
          <aside className="text-center">
            <span className="flex flex-col items-center">
              <MdOutlineWatchLater className="text-4xl text-[#FEBF00]" />
              <h4 className="text-2xl font-bold my-6 bebasNeue">
                Opening Hours
              </h4>
            </span>

            <span className="roboto">
              <h5>Monday - Saterday</h5>
              <h5>9:00am - 11:30pm</h5>
            </span>
          </aside>
          {/* fraction */}
          <aside className="text-center">
            <span className="flex flex-col items-center">
            <LuPhoneCall className="text-4xl text-[#FEBF00]" />
            <h4 className="text-2xl font-bold my-6 bebasNeue">Let's Talk</h4>
            </span>
            <span className="roboto">
              <h5>Phone: +880 123-4567</h5>
              <h5>Fax: +998 255654</h5>
            </span>
          </aside>
          {/* fraction */}
          <aside className="text-center">
            <span className="flex flex-col items-center">
              <MdEmail className="text-4xl text-[#FEBF00]" />
              <h4 className="text-2xl font-bold my-6 bebasNeue">
                Book a Table
              </h4>
            </span>

            <span className="roboto">
              <h5>Email: restaurant@support.com</h5>
              <h5>Support: support@gmail.com</h5>
            </span>
          </aside>
          {/* fraction */}
          <aside className="text-center">
            <span className="flex flex-col items-center">
              <IoLocation className="text-4xl text-[#FEBF00]" />
              <h4 className="text-2xl font-bold my-6 bebasNeue">Our Address</h4>
            </span>

            <span className="roboto">
              <h5>123, New York City</h5>
              <h5>USA</h5>
            </span>
          </aside>
        </footer>
        <div className="text-center mt-28">
          <aside>
            <span className="text-2xl justify-center gap-4 mb-6 flex">
                <a className="border p-3 rounded-full" href=""><FaFacebook/></a>
                <a className="border p-3 rounded-full" href=""><FaSquareXTwitter/></a>
                <a className="border p-3 rounded-full" href=""><FaInstagramSquare/></a>
                <a className="border p-3 rounded-full" href=""><FaLinkedin/></a>
            </span>
            <p className="raleway text-lg">
              @{new Date().getFullYear()} <span className="text-[#FEBF00]">Niomax</span> All right reserved
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
