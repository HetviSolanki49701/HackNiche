import React from 'react'

const Blog = (props) => {
  return (
    <div className='bg-white shadow-md flex rounded-lg mx-36 my-8'>
        <img src={props.img} alt="" className='w-72 rounded-l-md'/>
        <div className='pl-8 pt-8'>
            <div className='text-2xl font-semibold'>{props.heading}</div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos pariatur nam eaque eveniet similique, illum deserunt veritatis temporibus, dicta sapiente impedit ea, voluptate voluptatum dolorum odio assumenda sunt officiis. Architecto?</div>
        </div>
    </div>
  )
}

export default Blog