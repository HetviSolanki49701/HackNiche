import React from 'react'

const JobCard = (props) => {
    return (
        <div className='m-2'>
            <div className="w-full h-11/12 p-5 rounded-2xl bg-[#ffffff] shadow-primary-sd ">
                <div className="flex justify-between">
                    <div className="text-[#808080] text-left text-sm px-2">
                        {props.company}
                    </div>
                </div>
                <div className="text-left font-normal text-black text-lg px-1">
                    {props.role}
                </div>
                <div className="text-left font-normal text-purple text-xs px-1">
                    Stipend: {props.salary}
                </div>
                <div className="text-left font-thin text-black text-xs mx-1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sequi quas quos aperiam, repudiandae voluptas, accusamus similique quaerat.
                </div>
                <div className="flex justify-between">
                    <div className="bg-[#dfcef7] w-16 h-1/5 rounded-lg mt-5 mx-1 px-1 border border-purple">
                        <div className="text-purple text-sm font-normal text-center ">
                            {props.location}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default JobCard