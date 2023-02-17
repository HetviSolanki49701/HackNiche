import React from 'react'
import qr from '../assets/qr.png'
const Donate = () => {
  return (
    <div className='w-full bg-[url("assets/blobBg.svg")] bg-no-repeat bg-cover min-h-screen h-full flex items-center px-32 space-x-2 justify-around'>
        <div className='flex items-center bg-teal-100/40 p-16 rounded-2xl'>
        <div className=''>
            <div className='text-7xl font-extrabold py-8'>Donate Money</div>
            <p className='text-2xl font-medium w-9/12'>Every Rupee that you donate goes towards helping the veterans and their family.</p>
            <p className='text-2xl font-medium w-9/12'>Donate Now!</p>
        </div>
        <img src={qr} alt="" className='h-96'/>
        </div>
    </div>
  )
}

export default Donate