import React from "react";

const Consult = () => {
  return (
    <div className="min-h-screen w-screen font-bold text-xl">
      <div className="p-10 bg-[#2b343b] text-white text-5xl pl-16 font-bold">
        Consult
      </div>
      <iframe
        src="https://nerdjs.whereby.com/mangodb0bed69e3-527f-49f2-86df-1159f89f9663"
        allow="camera; microphone; fullscreen; speaker; display-capture"
        className="w-full h-[86vh] ease-in-out"
      ></iframe>
    </div>
  );
};

export default Consult;
