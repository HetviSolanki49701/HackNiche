import React from "react";
// import house1 from '../../assets/house1.jpg'
const CardHoverBlur = () => {
  return (
    <div className="">
      <div class="relative overflow-hidden bg-no-repeat bg-cover shadow-md rounded-lg bg-white/80">
        <img
          //   src={house1}
          className=" hover:scale-110 transition duration-300 ease-in-out "
          alt="Louvre"
        />
        <div className="p-5">
          <div className="text-3xl font-bold">DC Villa</div>
          <div className="text-xl font-semibold">Kolkata</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            veniam, fugiat consequatur temporibus eveniet quasi laboriosam
            quaerat quas amet, similique obcaecati ratione.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHoverBlur;
