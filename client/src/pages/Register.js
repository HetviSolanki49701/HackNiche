import React from 'react'
import add from '../assets/add_.png'
const Register = () => {
    return (
        <div className='h-screen bg-gradient-to-b from-[#F9FBDF] via-[#E0F0E6]  to-[#CFECF0]'>
            <div className='text-center text-4xl py-8 font-bold '>Register</div>
            <div className='bg-[#f0faf4] w-[60%] rounded-lg m-auto text-center px-40 py-20 text-lg border-dashed border-sky-700 border-4 mb-8'>
                <img src={add} alt="Add Image" className='h-36 m-auto py-4' />
                <div className='text-[#0369A1] font-semibold'>
                    Upload an Image
                </div>
            </div>
        </div>
    )
}

export default Register