import React from "react";
import CardHover from "../components/CardHover/CardHover";
import ppf from "../assets/ppf.png";
import atal from "../assets/atal.svg";
// import nsc from '../assets/nsc.webp'
const Schemes = () => {
  return (
    <div className='w-full bg-[url("assets/blobBg.svg")] bg-no-repeat bg-cover min-h-screen h-full'>
      {/* <div className="text-center text-4xl py-8 font-bold ">Schemes</div> */}
      <div className="p-10 bg-[#2b343b] text-white text-5xl pl-16 font-bold">Schemes
      </div>
      <div className="flex justify-around mt-10">
        <CardHover img={ppf} heading="PPF" />
        <CardHover
          img={atal}
          link={"https://www.npscra.nsdl.co.in/scheme-details.php"}
          heading="Atal Yojana"
        />
      </div>
    </div>
  );
};

export default Schemes;
