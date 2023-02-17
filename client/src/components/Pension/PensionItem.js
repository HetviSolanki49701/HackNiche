import React from 'react'
import { useNavigate } from "react-router-dom";

const PensionItem = (props) => {

    const navigate = useNavigate()

    const handleClick= ()=>{
        // localStorage.setItem('id', props.id)
        // navigate ('/expandeddoubtexpert')
    }

    let value = "" 
    if(props.solved){
      value = "Applied"
    }else{
      value = "Apply Now"
    }
    let style=""

    if(props.solved){
      style = "text-center bg-green-600 text-ourblack rounded-full font-medium p-2"
    }else{
      style = "text-center bg-ourorange text-ourblack rounded-full font-medium p-2"
    }

  return (
    <tr class="bg-ourgray text-ourdblue border-t-4 border-white ">
                <td class="text-lg font-semibold m-2 truncate p-2 w-[65%] text-ourdblue">
                    {props.scheme}
                </td>
                <td class="py-4 px-6 text-ourdblue">
                    {props.desc}
                </td>
                <td class="py-4 px-6 text-ourdblue">
                  <div className={style}>
                    {value}
                  </div>
                </td>
                <td class="py-4 px-6">
                    <button className="text-md m-2 p-2 justify-self-end bg-ourblue text-sm text-white rounded-full font-medium" onClick={handleClick}>{props.apply}</button> 
                </td>
            </tr>
  )
}

export default PensionItem

