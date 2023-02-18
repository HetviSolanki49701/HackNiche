import React from "react";
import GlassmorphismCard from "../components/GlassmorphismCard/GlassmorphismCard";
const Videos = () => {
  return (
    <div className='bg-[url("assets/blobBg.svg")] bg-no-repeat bg-cover min-h-screen h-full w-screen'>
      {/* <div className="text-4xl font-bold text-center pt-8 pb-4">
        Educational Videos
      </div> */}
      <div className="p-10 bg-[#2b343b] text-white text-5xl pl-16 font-bold">
        Educational Videos
      </div>
      <GlassmorphismCard />
    </div>
  );
};

export default Videos;
