import React from 'react'
import CardHover from '../components/CardHover/CardHover'
import ppf from '../assets/ppf.png'
import atal from '../assets/atal.svg'
import nsc from '../assets/nsc.webp'
const Schemes = () => {
  return (
    <div className='w-full bg-gradient-to-b from-[#F9FBDF] via-[#E0F0E6]  to-[#CFECF0] min-h-screen h-full'>
        <div className='text-center text-4xl py-8 font-bold '>Register</div>
    <div className='flex justify-around'>
        <CardHover img={ppf} heading="PPF"/>
        <CardHover img={atal} heading="Atal Yojana"/>
    </div>
    </div>
  )
}

export default Schemes