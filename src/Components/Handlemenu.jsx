import { NavLink } from "react-router-dom";
const Handlemenu = () => {
  return (
    <>
      <div className="w-[100%] h-[88vh] z-10 bg-[#f2f2f2] flex items-center justify-center rounded-bl-[10px] fixed right-[0.2px] top-[60px] shadow-xl tablet:w-[100%] mobile:w-[100%]">
        <div className="w-[50%] h-[90%] flex flex-col justify-center items-center gap-4">
          <NavLink
            className="text-[13px] text-[#4BB3FD] cursor-pointer mobile:text-[10px]"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="text-[13px] text-[#4BB3FD] cursor-pointer mobile:text-[10px]"
            to="/about"
          >
            Blog Page
          </NavLink>
          <NavLink
            className="text-[13px] text-[#4BB3FD] cursor-pointer mobile:text-[10px]"
            to="/services"
          >
            Services
          </NavLink>
          <div className="w-full h-[20%] font-black flex flex-col justify-between items-center text-[14px] text-[#4BB3FD] mobile:text-[12px] gap-4">
            <NavLink
              className="w-[100px] h-full flex justify-center items-center rounded-full border-[#027BCE] border-[3px]"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="w-[100px] h-full flex justify-center items-center rounded-full border-[#027BCE] border-[3px]"
              to="/register"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Handlemenu;
