import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import bannerImg from "../../../assets/Banner/Logo.png";
import bannerBg from "../../../assets/Banner/bg.png"

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/clients">Clients</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contract">Contract</NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-30 bg-[#BD1F17]" style={{
        backgroundImage: `url(${bannerBg})`
      }}>
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="w-2/3 flex items-center justify-start">
            <img src={bannerImg} alt="bannerImg" />
            <ul className="gap-10 ml-14 activeNav text-white font-medium hidden lg:flex raleway px-1">
              {navMenu}
            </ul>
          </div>

 
          <div className="w-1/3 flex items-center justify-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <IoMdMenu className="text-3xl text-white" />
              </div>
              <ul
                tabIndex={0}
                className="menu raleway font-medium menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 p-4 shadow"
              >
                {navMenu}
                <li><span className="btn btn-warning btn-sm text-xs mt-2 rounded-none font-bold roboto">BOOK A TABLE</span></li>
              </ul>
            </div>
            <button className="hidden lg:block btn btn-warning rounded-none font-bold roboto">BOOK A TABLE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
