import React from 'react'
import img1 from '../assets/_housesearch.png'
import img2 from '../assets/_price.png'
import img3 from '../assets/_ration.png'
import Tilt from "react-vanilla-tilt";
import { useNavigate } from "react-router-dom";

const RelocationPage = () => {
    const navigate = useNavigate();
    const handleOnClick1=()=>{
        navigate('/relocate')
    }
    const handleOnClick2=()=>{
        navigate('/houseprice')
    }
    const handleOnClick3=()=>{
        navigate('/maps')
    }

  return (
    <div className='bg-[url("assets/blobBg.svg")] bg-no-repeat bg-cover min-h-screen h-full w-screen flex justify-around items-center px-16 '>
        <Tilt className="card h-96 " options={{ speed: 400, max: 25 }} onClick={handleOnClick1}>
            <img src={img1} alt="" className='p-8'/>
            <div className='text-center text-3xl font-semibold pb-10'>Search for a house</div>
        </Tilt>
        <Tilt className="card h-96" options={{ speed: 400, max: 25 }} onClick={handleOnClick2}>
            <img src={img2} alt="" className='p-8'/>
            <div className='text-center text-3xl font-semibold pb-10'>House Price Prediction</div>
        </Tilt>
        <Tilt className="card h-96" options={{ speed: 400, max: 25 }} onClick={handleOnClick3}>
            <img src={img3} alt="" className='p-8'/>
            <div className='text-center text-3xl font-semibold pb-10'>Find Distribution Centers</div>
        </Tilt>
    </div>
  )
}

export default RelocationPage

// distribution centers search for a house price prdiction