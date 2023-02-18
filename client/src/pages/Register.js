import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tesseract from "tesseract.js";
import add from "../assets/add_.png";


const Register = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  function filesubmit(e) {
    setFile(e.target.files[0]);
  }

  useEffect(() => {}, [data]);

  function goTo(e){
    e.preventDefault();
    navigate("/login")
  }

  async function processImage() {
    // console.log(file);
    await Tesseract.recognize(file, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      const txt = text.split("\n");
      txt.pop();
      //   console.log(txt);
      setData(txt);
    });
  }
  return (
    <div className='h-screen bg-[url("assets/blobBg.svg")] bg-no-repeat bg-cover w-full'>
      <div className="p-10 bg-[#2b343b] text-white text-5xl pl-16 font-bold">
      Register
      </div>
      <label htmlFor="dropzone">
        <div className="cursor-pointer bg-[#f0faf4] w-[60%] rounded-lg m-auto text-center px-40 py-20 text-lg border-dashed border-sky-700 border-4 mb-8 mt-10">
          <img src={add} alt="Add Image" className="h-36 m-auto py-4" />
          <div className="text-[#0369A1] font-semibold">Upload an Image</div>
          <input type="file" name="dropzone" id="dropzone" className="hidden" onChange={filesubmit} />
        </div>
      </label>
      <button onClick={processImage} className="w-[15%] ml-[40rem] outline mx-auto py-2 px-7 bg-white text-slate-800 hover:bg-slate-50 rounded-md text-lg ">
              Register
            </button>
      {data &&
              data.map((med) => {
                med = med[0].toUpperCase() + med.substring(1);
                return (
                  <div className="text-white rounded-lg my-3 mt-8">
                    <p className="p-2 text-xl text-center font-semibold  text-primary-black">
                      {med}
                    </p>
                    <p className="text-xl text-center font-semibold  text-primary-black">
                      Email: avish@gmail.com
                    </p>
                    <button className="w-[15%] ml-[40rem] outline mx-auto py-2 mt-1 px-7 bg-white text-slate-800 hover:bg-slate-50 rounded-md text-lg " onClick={goTo}>Login</button>
                  </div>
                );
              })}
    </div>
  );
};

export default Register;
