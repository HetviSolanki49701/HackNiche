import React from 'react'
import img1 from '../assets/_eduvid.png'
import img2 from '../assets/_school.png'
import img3 from '../assets/_benefits.png'
import img4 from '../assets/_blog.png'
import Tilt from "react-vanilla-tilt";
import { useNavigate } from "react-router-dom";

const _ChildCare = () => {
    const navigate = useNavigate();
    const handleOnClick1=()=>{
        navigate('/videos')
    }
    const handleOnClick2=()=>{
        navigate('/schools')
    }
    const handleOnClick3=()=>{
        navigate('/schemes')
    }
    const handleOnClick4=()=>{
        navigate('/blogs')
    }
  return (
    <div className='bg-[url("assets/blobBg.svg")] bg-no-repeat bg-cover min-h-screen h-full w-screen flex justify-around  items-center px-16'>
        <Tilt className="card h-96" options={{ speed: 400, max: 25 }} onClick={handleOnClick1}>
            <img src={img1} alt="" className='p-8'/>
            <div className='text-center text-3xl font-semibold pb-10'>Educational Videos</div>
        </Tilt>
        <Tilt className="card h-96" options={{ speed: 400, max: 25 }} onClick={handleOnClick2}>
            <img src={img2} alt="" className='p-8'/>
            <div className='text-center text-3xl font-semibold pb-10'>Nearby Schools</div>
        </Tilt>
        <Tilt className="card h-96" options={{ speed: 400, max: 25 }} onClick={handleOnClick4}>
            <img src={img4} alt="" className='p-8'/>
            <div className='text-center text-3xl font-semibold pb-10'>Blogs</div>
        </Tilt>
    </div>
  )
}

export default _ChildCare