import { GiHamburgerMenu } from "react-icons/gi";
import Handlemenu from "./Handlemenu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="w-full h-[12vh] bg-[#f2f2f2] fixed flex items-center justify-center shadow-lg z-10">
        <div className="w-[85%] h-[60%] flex items-center justify-between">
          <div className="w-[130px] h-full rounded-[3px] text-[#4BB3FD] font-black text-4xl flex items-center self-center justify-start mobile:w-[90px] mobile:h-[35px] tablet:w-[100px] tablet:h-[35px]">
            <img
              className="w-full h-full flex position-contain repeat-no-repeat"
              src="images/Logo.png"
              alt="logo"
            />
          </div>
          <div className="w-[200px] h-full flex justify-between items-center mobile:hidden tablet:hidden">
            <NavLink
              className="text-[13px] text-[#4BB3FD] cursor-pointer"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="text-[13px] text-[#4BB3FD] cursor-pointer"
              to="/about"
            >
              Blog Page
            </NavLink>
            <NavLink
              className="text-[13px] text-[#4BB3FD] cursor-pointer"
              to="/services"
            >
              Services
            </NavLink>
          </div>
          <div className="w-[200px] h-[40px] font-black flex justify-between items-center text-[14px] text-[#4BB3FD] mobile:hidden tablet:hidden">
            <NavLink
              className="w-[90px] h-full flex justify-center items-center rounded-full border-[#027BCE] border-[3px]"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="w-[95px] h-full flex justify-center items-center rounded-full border-[#027BCE] border-[3px]"
              to="/register"
            >
              Register
            </NavLink>
          </div>
          <div
            className="w-[25px] h-[25px] flex justify-center items-center hidden mobile:flex tablet:flex text-[25px] text-[#4BB3FD]"
            onClick={handleMenu}
          >
            <GiHamburgerMenu />
          </div>
          {showMenu && <Handlemenu />}
        </div>
      </div>
    </>
  );
};
export default Header;
