import React from "react";
import { useNavigate } from "react-router-dom";

const PensionItem = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // localStorage.setItem('id', props.id)
    // navigate ('/expandeddoubtexpert')
  };

  let value = "";
  if (props.apply === "Not Applied") {
    value = "Apply Now";
  } else {
    value = props.apply;
  }

  return (
    <tr class="bg-ourgray text-ourdblue border-t-4 border-white ">
      <td class="text-lg font-semibold m-2 truncate p-2 w-[65%] text-ourdblue">
        {props.scheme}
      </td>
      <td class="py-4 px-6 text-ourdblue">{props.desc}</td>
      <td class="py-4 px-6 text-ourdblue">{value}</td>
    </tr>
  );
};

export default PensionItem;
