import axios from "axios";
import React, { useState } from "react";
import quiz_img from "../assets/quiz_timeline.png";

const Quiz = () => { 
  const [text, setText] = useState("");
  const getSentiment = async () => {
    console.log(text);
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/sentiment?text=" + text,
      {
        headers: {
          "X-Api-Key": "fxjAWUdGTc+WnoShD0a4xw==8U474DYfD0iQUeQl",
        },
      }
    );
    console.log(response.data.sentiment);
  };
  return (
    <div className="min-h-screen w-screen">
      <div className="w-[70px] min-h-screen bg-[#2b343b] absolute top-[56.5rem] left-0"></div>
      <div className="w-[10px] min-h-screen bg-[#6dc9b8] absolute top-[56.5rem] left-15"></div>
      <div className="p-10 bg-[#2b343b] text-white text-5xl pl-16 font-bold">
        Take A Quiz
      </div>
      <div className="w-full mx-auto flex justify-center my-8  ">
        <img src={quiz_img} />
      </div>
      <div className="pl-36">
        <div className="text-4xl font-semibold text-slate-900">
          Over the last 2 weeks, how often have you been bothered by any of the{" "}
          <br /> following problems?
        </div>
        <div className="text-xl font-normal text-slate-400 my-3 mb-8">
          Please note, all fields are required.
        </div>
        <div className="my-16">
          <div className="text-2xl text-slate-700">
            1. Little interest or pleasure in doing things
          </div>
          <div className="flex my-3">
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg ">
              NOT AT ALL
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              SEVERAL DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              MORE THAN HALF THE DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NEARLY EVERY DAY
            </button>
          </div>
        </div>
        <div className="my-16">
          <div className="text-2xl text-slate-700">
            2. Feeling down, depressed, or hopeless
          </div>
          <div className="flex my-3">
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NOT AT ALL
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              SEVERAL DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              MORE THAN HALF THE DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NEARLY EVERY DAY
            </button>
          </div>
        </div>
        <div className="my-16">
          <div className="text-2xl text-slate-700">
            3. Trouble falling or staying asleep, or sleeping too much
          </div>
          <div className="flex my-3">
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NOT AT ALL
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              SEVERAL DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              MORE THAN HALF THE DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NEARLY EVERY DAY
            </button>
          </div>
        </div>
        <div className="my-16">
          <div className="text-2xl text-slate-700">
            4. Feeling tired or having little energy
          </div>
          <div className="flex my-3">
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NOT AT ALL
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              SEVERAL DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              MORE THAN HALF THE DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NEARLY EVERY DAY
            </button>
          </div>
        </div>
        <div className="my-16">
          <div className="text-2xl text-slate-700">
            5. Poor appetite or overeating
          </div>
          <div className="flex my-3">
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NOT AT ALL
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              SEVERAL DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              MORE THAN HALF THE DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NEARLY EVERY DAY
            </button>
          </div>
        </div>
        <div className="my-16">
          <div className="text-2xl text-slate-700">
            6. Feeling bad about yourself - or that you are a failure or have
            let yourself or your family down
          </div>
          <div className="flex my-3">
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NOT AT ALL
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              SEVERAL DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              MORE THAN HALF THE DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NEARLY EVERY DAY
            </button>
          </div>
        </div>
        <div className="my-16">
          <div className="text-2xl text-slate-700">
            7. Trouble concentrating on things, such as reading the newspaper or
            watching television
          </div>
          <div className="flex my-3">
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NOT AT ALL
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              SEVERAL DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              MORE THAN HALF THE DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NEARLY EVERY DAY
            </button>
          </div>
        </div>
        <div className="my-16">
          <div className="text-2xl text-slate-700">
            8. Moving or speaking so slowly that other people could have noticed
          </div>
          <div className="flex my-3">
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NOT AT ALL
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              SEVERAL DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              MORE THAN HALF THE DAYS
            </button>
            <button className="p-3 px-7 bg-slate-200 text-slate-800 mr-5 hover:bg-slate-300 rounded-md text-lg">
              NEARLY EVERY DAY
            </button>
          </div>
        </div>
        <div className="my-16">
          <div className="text-2xl text-slate-700">
            Lastly, tell us something more about how you have been feeling in
            your own words.
          </div>
          <textarea
            className="p-3 outline my-3 w-[54%]"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />{" "}
          <br />
          <button
            className="p-3 mt-3 px-7 bg-slate-300 text-slate-800 mr-5 hover:bg-slate-400 rounded-md text-lg"
            onClick={getSentiment}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
