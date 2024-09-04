import { useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend-assets/assets";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 hidden lg:flex flex-col gap-2 text-white ">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Seacrch Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <di className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>
        <div className="p-4 pl-4 m-2 mt-4 flex flex-col items-start justify-start gap-1 bg-[#242424] rounded font-medium">
          <h1>Create your first playlist</h1>
          <p className="font-light">it&apos;s easy we will help you</p>
          <button className="px-4 py-1.5 mt-4 text-[15px] text-black rounded-full bg-white">
            Create Playlist
          </button>
        </div>
        <div className="p-4 pl-4 m-2 flex flex-col items-start justify-start gap-1 bg-[#242424]rounded font-medium">
          <h1>Let&apos;s find some podcasts to follow</h1>
          <p className="font-light">
            we&apos;ll keep you update on new episodes
          </p>
          <button className="px-4 py-1.5 mt-4 text-[15px] text-black rounded-full bg-white">
            Browse podcasts
          </button>
        </div>
      </di>
    </div>
  );
};

export default SideBar;
