import React, { useState } from "react";
import astrixLogo from "../../../public/Assets/images/LandingPage/Astrix Logo.png";
import img1 from "../../../public/Assets/images/LandingPage/image 143.png";
import img2 from "../../../public/Assets/images/LandingPage/image 141.png";
import img3 from "../../../public/Assets/images/LandingPage/image 144.png";
import img4 from "../../../public/Assets/images/LandingPage/image 145.png";
import img5 from "../../../public/Assets/images/LandingPage/image 147.png";
import img6 from "../../../public/Assets/images/LandingPage/Frame 1261154662.png";
import img7 from "../../../public/Assets/images/LandingPage/image 139.png";
import img8 from "../../../public/Assets/images/LandingPage/image 137.png";

function LandingPage() {
  const [shrink, setShrink] = useState(true);

  return (
    <div className="bg-[#fff4df] h-screen p-12 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 top-12 left-12 absolute">
        <img width={"80%"} src={astrixLogo.src} />
      </div>
      <div className="gap-10 flex flex-col pt-10 overflow-hidden">
        <div className="text-black font-bold text-4xl flex gap-2 items-center relative">
          WE <img className="h-12" src={img1.src} />
          <span
            className={`bg-[#fff4df] absolute h-12 pl-2 ${
              shrink ? "right-0" : "right-20"
            }`}
          >
            {" "}
            ORGANIZE THE
          </span>
        </div>
        <div className="text-black font-bold text-4xl flex gap-2 items-center relative">
          CONNECTION <img className="h-12" src={img2.src} />{" "}
          <span
            className={`bg-[#fff4df] w-32 absolute h-12 pl-2 ${
              shrink ? "right-[-7rem]" : "right-0"
            }`}
          >
            {""}
          </span>
        </div>
        <div className="text-black font-bold text-4xl flex gap-2 items-center relative">
          <img className="h-12" src={img3.src} />
          <span
            className={`bg-[#fff4df] flex gap-2 w-32 h-12 pl-2 absolute ${
              shrink ? "right-[22rem]" : "right-[19rem]"
            }`}
          >
            {" "}
            BETWEEN <img className="h-12" src={img4.src} /> MUSIC
          </span>
        </div>
        <div className="text-black font-bold text-4xl flex gap-2 items-center relative">
          ARTIST <img className="h-12" src={img5.src} />{" "}
          <span
            className={`bg-[#fff4df] flex gap-2 w-50 absolute h-12 pl-2 ${
              shrink ? "right-[-5rem]" : "right-[0rem]"
            }`}
          >
            CULTURE
            <img className="h-12" src={img6.src} />
          </span>
        </div>
        <div className="text-black font-bold text-4xl flex gap-2 items-center">
          {" "}
          <img className="h-12" src={img7.src} />
          <span
            className={`bg-[#fff4df] flex gap-2 w-50 absolute h-12 pl-2 ${
              shrink ? "right-[32rem]" : "right-[29rem]"
            }`}
          >
            {" "}
            ART <img className="h-12" src={img8.src} /> &COLLECTIONS
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          setShrink(!shrink);
        }}
        className="bg-black"
      >
        Animate
      </button>
    </div>
  );
}

export default LandingPage;
