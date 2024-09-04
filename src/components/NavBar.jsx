import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend-assets/assets";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex items-center justify-between font-semibold">
        <div className=" flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 p-2 bg-black rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="Arrow Left Icon"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 p-2 bg-black rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="Arrow Right Icon"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white hidden md:block text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            G
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <p className="px-4 py-1 bg-white text-black rounded-2xl cursor-pointer">
          All
        </p>
        <p className="px-4 py-1 bg-black rounded-2xl cursor-pointer">Music</p>
        <p className="px-4 py-1 bg-black rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default NavBar;
