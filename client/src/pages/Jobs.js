import React from 'react'
import JobCard from '../components/JobCard/JobCard'

const Jobs = () => {
  return (
    <div className=''>
        <div className='text-center text-4xl py-8 font-bold '>Jobs</div>
        <div className='grid grid-cols-3 justify-around gap-4'>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
            <JobCard company="Innerve" role="Trainer" salary="20,000" location="Kolkata"/>
        </div>
    </div>
  )
}

export default Jobs