import React from "react";
import AddJob from "../components/AddJob";
import JobCard from "../components/JobCard/JobCard";
// import bgimg from '../assets/blobBg.svg'
const PostJobs = () => {
  return (
    <div className="bg-[url('assets/blobBg.svg')] bg-no-repeat bg-cover">
      <div className="mx-8">
        <div className="text-center text-4xl py-8 font-bold ">Post Jobs</div>
        <div className="grid grid-cols-3 gap-5 mx-auto">
          <JobCard
            company="Innerve"
            role="Trainer"
            salary="20,000"
            location="Kolkata"
          />
          <JobCard
            company="Innerve"
            role="Trainer"
            salary="20,000"
            location="Kolkata"
          />
          <JobCard
            company="Innerve"
            role="Trainer"
            salary="20,000"
            location="Kolkata"
          />
          <JobCard
            company="Innerve"
            role="Trainer"
            salary="20,000"
            location="Kolkata"
          />
          <JobCard
            company="Innerve"
            role="Trainer"
            salary="20,000"
            location="Kolkata"
          />
        </div>
        <AddJob />
      </div>
    </div>
  );
};

export default PostJobs;
