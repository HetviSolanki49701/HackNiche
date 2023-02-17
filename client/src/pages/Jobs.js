import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard/JobCard";
// import bgimg from '../assets/blobBg.svg'
const Jobs = () => {
  const [applied, setApplied] = useState(null);
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    async function getApplied() {
      try {
        const res = await axios.get("http://localhost:5000/appliedjobs", {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
        setApplied(res.data.job);
      } catch (err) {
        console.log(err);
      }
    }
    async function getNonApplied() {
      try {
        const res = await axios.get("http://localhost:5000/notappliedjobs", {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
        setJobs(res.data.job);
      } catch (err) {
        console.log(err);
      }
    }
    getApplied();
    getNonApplied();
  }, []);

  return (
    <div className="bg-[url('assets/blobBg.svg')] bg-no-repeat bg-cover w-screen">
      {jobs && (
        <div className="mx-8">
          <div className="text-center text-4xl py-8 font-bold ">Jobs</div>
          <div className="text-2xl mx-4 py-8 font-semibold ">Applied Jobs</div>
          <div className="grid grid-cols-3 justify-around gap-4">
            {applied[0] ? (
              applied.map((element, idx) => {
                return (
                  <JobCard
                    key={idx}
                    company="Innerve"
                    role={element.title}
                    salary={element.salary}
                    location={element.location}
                    desc={element.description}
                  />
                );
              })
            ) : (
              <div className="text-lg mx-4 py-8 font-medium ">
                No jobs applied!
              </div>
            )}
          </div>
          <div className="text-2xl mx-4 py-8 font-semibold ">
            Available Jobs
          </div>
          <div className="grid grid-cols-3 justify-around gap-4">
            {jobs[0] ? (
              jobs.map((element, idx) => {
                return (
                  <JobCard
                    key={idx}
                    company="Innerve"
                    role={element.title}
                    salary={element.salary}
                    location={element.location}
                    desc={element.description}
                  />
                );
              })
            ) : (
              <div className="text-lg mx-4 py-8 font-medium ">
                No jobs available!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
