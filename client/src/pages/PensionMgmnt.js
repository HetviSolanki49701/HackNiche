import React, { useEffect, useState } from "react";
import BarChart from "../components/Pension/BarChart";
import { UserData } from "../components/Pension/Data";
import PieChart from "../components/Pension/PieChart";
import PensionItem from "../components/Pension/PensionItem";
import Chart from "chart.js/auto";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PensionMgmnt = () => {
  const navigate = useNavigate();
  const [pensions, setPensions] = useState([]);
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Pension Schemes Advantages",
        data: UserData.map((data) => data.userLost),
      },
    ],
  });

  useEffect(() => {
    // navigate(0)
    async function getPensions() {
      try {
        const res = await axios.get("http://localhost:5000/pensions", {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
        setPensions(res.data.pension);
      } catch (err) {
        console.log(err);
      }
    }
    getPensions();
  }, []);

  return (
    // <div className="font-bold text-xl">
    <div className="min-h-screen w-screen font-bold text-xl">
      <div className="w-[70px] min-h-screen bg-[#2b343b] absolute top-[35rem] left-0"></div>
      <div className="w-[10px] min-h-screen bg-[#6dc9b8] absolute top-[35rem] left-15"></div>
      <div className="p-10 bg-[#2b343b] text-white text-5xl pl-16 font-bold">
        Pension Management
      </div>
      <div className="flex">
        <div className="flex-col w-1/2">
          <div className="flex flex-col justify-center ml-12">
            <div className="content-center">
              <p className="bg-gray-100 p-3 my-16 w-[550px]">
                Potential Returns from Different Available Schemes:
              </p>
            </div>
            <div className="w-[35rem] h-[25rem]">
              <BarChart chartData={userData} />
            </div>
          </div>
          <div className="flex flex-col justify-center ml-12">
            <div className="content-center">
              <p className="bg-gray-100 p-3 mb-16 w-[550px]">
                Pension Returns from Various Schemes:
              </p>
            </div>
            <div className="w-[50rem] h-[25rem]">
              <PieChart chartData={userData} />
            </div>
          </div>
        </div>
        <div className="mr-10 bg-slate-200 w-full mt-16 h-[120vh]">
          <table class="w-full text-sm text-left  text-gray-400 table-fixed">
            <thead class="text-base bg-gray-700 text-gray-50 font-extralight">
              <tr>
                <th scope="col" class="py-3 px-6 w-[35%] text-left">
                  Available Pensions
                </th>
                <th scope="col" class="py-3 px-6 w-[50%]">
                  Description
                </th>
                <th scope="col" class="py-3 px-6 w-[20%]">
                  Status
                </th>
                <th scope="col" class="py-3 px-6 w-[10%]"></th>
              </tr>
            </thead>
            <tbody>
              {pensions.map((pension) => {
                return (
                  <PensionItem
                    key={pension._id}
                    scheme={pension.title}
                    desc={pension.description}
                    apply={pension.status}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default PensionMgmnt;
