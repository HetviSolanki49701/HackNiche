import React, { useState } from "react";

const GetSentiment = ({ get }) => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function getData(e) {
    e.preventDefault();
    const res = await get();
    setData(res);
    console.log(res);
    setShowModal(true);
  }

  return (
    <div>
      <button
        className="p-3 mt-3 px-7 bg-slate-300 text-slate-800 mr-5 hover:bg-slate-400 rounded-md text-lg"
        type="button"
        onClick={getData}
      >
        Get Sentiment
      </button>
      {showModal ? (
        <div className="font-main">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none p-7 w-[37rem]">
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold font-main">
                    Sentiment Analysis
                  </h3>
                  <button
                    className="text-neutralPrimary background-transparent font-bold text-sm m-1 float-right p-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                {data.score && (
                  <div>
                    <div className="relative p-3 flex-auto">
                      Score: {data.score}
                    </div>
                    <div className="relative p-3 flex-auto">
                      Sentiment: {data.sentiment}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
};

export default GetSentiment;
