import React, { useEffect, useState } from "react";

const HousePrice = () => {
  const [pregnancies, setPregnancies] = useState();
  const [glucose, setGlucose] = useState();
  const [bp, setBp] = useState();
  const [skin, setSkin] = useState();
  const [insulin, setInsulin] = useState();
  const [bmi, setBmi] = useState();
  const [pedigree, setPedigree] = useState();
  const [age, setAge] = useState();
  const [outcome, setOutcome] = useState(false);

  useEffect(() => {}, [outcome]);

  function changePreg(e) {
    setPregnancies(e.target.value);
  }
  function changeGlu(e) {
    setGlucose(e.target.value);
  }
  function changeBp(e) {
    setBp(e.target.value);
  }
  function changeSkin(e) {
    setSkin(e.target.value);
  }
  function changeInsu(e) {
    setInsulin(e.target.value);
  }
  function changeBmi(e) {
    setBmi(e.target.value);
  }
  function changePedigree(e) {
    setPedigree(e.target.value);
  }
  function changeAge(e) {
    setAge(e.target.value);
  }

  const url = "http://localhost:7000";

  function predict() {
    setTimeout(() => {
      setOutcome(true);
    }, 2000);
  }

  //   async function predict(e) {
  //     e.preventDefault();

  //     const data = {
  //       pregnancies,
  //       glucose,
  //       bp,
  //       skin,
  //       insulin,
  //       bmi,
  //       pedigree,
  //       age,
  //     };
  //     try {
  //       const response = await axios.post(
  //         `${url}/predict`,
  //         {},
  //         {
  //           headers: data,
  //         }
  //       );
  //       console.log(response.data);
  //       setOutcome(response.data.prediction);
  //     } catch (error) {
  //       console.log(error.message);
  //       return null;
  //     }
  //   }

  return (
    <div className="w-full overflow-y-hidden">
      <div className="p-10 bg-[#2b343b] text-white text-5xl pl-16 font-bold">
        Get Approximate House Price
      </div>
      <div className="w-full h-full">
        <div id="dropdown" className="w-full">
          <div className="flex my-10">
            <div className="mx-16 flex flex-col justify-between items-start my-5">
              <div className="text-xl text-slate-700">
                1. Enter Your Median Income (in Thousands per month):
              </div>
              <input
                type="number"
                placeholder="Median Income"
                value={pregnancies}
                onChange={changePreg}
                className="p-3 mx-3 my-2 rounded-md outline"
              />
              <div className="text-xl text-slate-700 mt-5">
                2. Enter the house age you are willing to live in (in years):
              </div>
              <input
                type="number"
                placeholder="House Age"
                value={glucose}
                onChange={changeGlu}
                className="p-3 mx-3 my-2 rounded-md outline"
              />
              <div className="text-xl text-slate-700 mt-5">
                3. Enter the Approximate number of Rooms:
              </div>
              <input
                type="number"
                placeholder="Approximate Rooms"
                value={bp}
                onChange={changeBp}
                className="p-3 mx-3 my-2 rounded-md outline"
              />
              <div className="text-xl text-slate-700 mt-5">
                4. Enter the Approximate number of BedRooms:
              </div>
              <input
                type="number"
                placeholder="Approximate Bedrooms"
                value={skin}
                onChange={changeSkin}
                className="p-3 m-3 rounded-md outline"
              />
              </div>
            <div className="mx-16 flex flex-col justify-between items-start my-5">
              <div className="text-xl text-slate-700">
                5. Enter the Populatin level:
              </div>
              <input
                type="text"
                placeholder="High/Medium/Low"
                value={insulin}
                onChange={changeInsu}
                className="p-3 m-3 rounded-md outline"
              />
              <div className="text-xl text-slate-700 mt-5">
                6. Enter the Approximate Latitude:
              </div>
              <input
                type="number"
                placeholder="Latitude"
                value={bmi}
                onChange={changeBmi}
                className="p-3 m-3 rounded-md outline"
              />
              <div className="text-xl text-slate-700 mt-5">
                7. Enter the Approximate Longitude:
              </div>
              <input
                type="number"
                placeholder="Longitude"
                value={pedigree}
                onChange={changePedigree}
                className="p-3 m-3 rounded-md outline"
              />
              <button
                className="p-3 px-7 bg-slate-200 text-slate-800 ml-3 mt-3 hover:bg-slate-300 rounded-md text-base"
                onClick={predict}
                type="submit"
              >
                Calculate Price
              </button>
              {outcome && (
                <p className="text-slate-800 text-lg font-bold ml-3 mt-3">
                  The approximate price for the house in your given locality is: <br />
                  Rs. 20,000 per sq. ft.
                </p>
              )}
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HousePrice;
