import React from 'react'
import Blog from '../components/Blog/Blog'
import blog3 from '../assets/blog3.png'
import blog2 from '../assets/blog2.jpg'
import blog1 from '../assets/blog1.jpg'
const Blogs = () => {
    return (
        <div className='bg-[url("assets/blobBg.svg")] bg-no-repeat bg-cover min-h-screen h-full'>
        <div className='pb-16'>
            <div className='text-center text-4xl py-8 font-bold '>
                Blogs
            </div>
            <Blog img={blog3} heading="Blog1" />
            <Blog img={blog2} heading="Blog2" />
            <Blog img={blog1} heading="Blog3" />
        </div>
        </div>
    )
}

export default Blogs