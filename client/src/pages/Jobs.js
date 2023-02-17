import React from 'react'
import JobCard from '../components/JobCard/JobCard'
// import bgimg from '../assets/blobBg.svg'
const Jobs = () => {
  return (
    <div className="bg-[url('assets/blobBg.svg')] bg-no-repeat bg-cover">
    <div className='mx-8'>
        <div className='text-center text-4xl py-8 font-bold '>Jobs</div>
        <div className='grid grid-cols-3 justify-around gap-4'>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
        </div>
        </div>
        </div>
  )
}

export default Jobs