import React, { useState } from 'react'
import axios from 'axios';

const WebCam = () => {

  const getMapData = async () => {
    const options = {
        method: 'GET',
        url: 'https://webcamstravel.p.rapidapi.com/webcams/list/nearby=%7Blat%7D,%7Blng%7D,%7Bradius%7D',
        params: {lang: 'en', show: 'webcams:image,location'},
        headers: {
          'X-RapidAPI-Key': '2cd999cfa3mshb323cedde790549p1f7e5bjsn6d216871a66f',
          'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
  }

  return (
    <div className='bg-gray-700 h-screen'>
        hello
        <button type='button' onClick={ getMapData } className="text-white bg-btn-left hover:bg-btn-right font-medium rounded-lg px-7 py-2 mx-5 my-20 text-lg border-b-customDark">Submit</button>
    </div>
  )
}

export default WebCam;