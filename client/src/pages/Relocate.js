import React from 'react'
import CardHoverBlur from '../components/CardHoverBlur/CardHoverBlur'

const Relocate = () => {
  return (
    <div className="bg-[url('assets/blobBg.svg')] bg-no-repeat bg-cover pb-8">
            <div className='text-center text-4xl py-8 font-bold '>Relocate</div>
        <div className='flex justify-around space-x-10 mx-12'>
        <CardHoverBlur/>
        <CardHoverBlur/>
        <CardHoverBlur/>
        </div>
    </div>
  )
}

export default Relocate