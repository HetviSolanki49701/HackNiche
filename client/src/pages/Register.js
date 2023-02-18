import React, { useEffect, useState } from "react";
import Tesseract from "tesseract.js";
import add from "../assets/add_.png";

const Register = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  function filesubmit(e) {
    setFile(e.target.files[0]);
  }

  useEffect(() => {}, [data]);

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
      <div className="text-center text-4xl py-8 font-bold ">Register</div>
      <div className="bg-[#f0faf4] w-[60%] rounded-lg m-auto text-center px-40 py-20 text-lg border-dashed border-sky-700 border-4 mb-8">
        <img src={add} alt="Add Image" className="h-36 m-auto py-4" />
        <div className="text-[#0369A1] font-semibold">Upload an Image</div>
      </div>
    </div>
  );
};

export default Register;
