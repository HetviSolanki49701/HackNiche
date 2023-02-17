import axios from "axios";
import React, { useEffect, useState } from "react";
import AddJob from "../components/AddJob";
import JobCard from "../components/JobCard/JobCard";
// import bgimg from '../assets/blobBg.svg'
const PostJobs = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    async function getJobs() {
      try {
        const res = await axios.get("http://localhost:5000/getjobs", {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
        setJobs(res.data.job);
      } catch (err) {
        console.log(err);
      }
    }
    getJobs();
  }, []);

  return (
    <div className="bg-[url('assets/blobBg.svg')] bg-no-repeat bg-cover w-screen">
      {jobs && (
        <div className="mx-8">
          <div className="text-center text-4xl py-8 font-bold ">Post Jobs</div>
          <div className="text-2xl mx-4 py-8 font-semibold ">
            Your Posted Jobs
          </div>
          <div className="grid grid-cols-3 gap-5">
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
              <div>No jobs posted yet</div>
            )}
          </div>
          <AddJob />
        </div>
      )}
    </div>
  );
};

export default PostJobs;
