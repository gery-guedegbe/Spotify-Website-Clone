import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef, useState } from "react";
import { albumsData } from "../assets/frontend-assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const [bgColor, setBgColor] = useState("#121212");

  useEffect(() => {
    const path = location.pathname;
    const isAlbum = path.includes("album");
    const albumId = isAlbum ? path.split("/").pop() : "";

    if (isAlbum) {
      const album = albumsData.find((alb) => alb.id === Number(albumId));
      setBgColor(album ? album.bgColor : "#121212");
    } else {
      setBgColor("#121212");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    }
  }, [bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] lg:w-[75%] lg:ml-0 m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        {/* Redirection vers / pour les routes non définies */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Display;
