import React from 'react'
import img1 from '../assets/_consult.png'
import img2 from '../assets/_survey.png'
import Tilt from "react-vanilla-tilt";
import { useNavigate } from "react-router-dom";

const HealthCare = () => {
    const navigate = useNavigate();
    const handleOnClick1=()=>{
        navigate('/consult')
    }
    const handleOnClick2=()=>{
        navigate('/quiz')
    }

  return (
    <div className='bg-[url("assets/blobBg.svg")] bg-no-repeat bg-cover min-h-screen h-full w-screen flex justify-evenly  items-center px-16'>
        <Tilt className="card h-96 " options={{ speed: 400, max: 25 }} onClick={handleOnClick1}>
            <img src={img1} alt="" className='p-8'/>
            <div className='text-center text-3xl font-semibold pb-10'>Counsult a Doctor</div>
        </Tilt>
        <Tilt className="card h-96" options={{ speed: 400, max: 25 }} onClick={handleOnClick2}>
            <img src={img2} alt="" className='p-8'/>
            <div className='text-center text-3xl font-semibold pb-10'>Take a Survey!</div>
        </Tilt>
    </div>
  )
}

export default HealthCare