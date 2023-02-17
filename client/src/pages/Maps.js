import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = { lat: 19.09, lng: 72.85 };

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: "AIzaSyD9VI4OdMbtz9zNyDdGWL-Q9dM_qv_hW_4",
    libraries: ["places"],
  });

  const [dirRes, setDirRes] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destRef = useRef();

  var count = 0;
  const navigate = useNavigate();

  function goToLogin() {
    count++;
    // if(count==3){
    //     navigate('/login')
    // }
  }

  async function calculate() {
    // eslint-disable-next-line no-undef
    const directService = new google.maps.DirectionsService();
    const results = await directService.route({
      origin: originRef.current.value,
      destination: destRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirRes(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  if (isLoaded)
    return (
      <div className="h-screen w-screen" onClick={goToLogin}>
        <div className="absolute w-5/12 my-5 ml-[30rem] bg-slate-100 p-7 rounded-md">
          <div className="flex">
            <Autocomplete>
              <input className="outline outline-2 p-2 rounded-md" type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>
            <Autocomplete>
              <input className="outline outline-2 mx-5 p-2 rounded-md" type="text" placeholder="Destination" ref={destRef} />
            </Autocomplete>
            <button className="bg-slate-500 px-5 py-2 ml-6 text-white rounded-md" onClick={calculate}>Show Route</button>
          </div>
          <div className="mt-4 text-lg flex">
            <div className="mr-36">Distance: {distance}</div>
            <div className="">Duration: {duration}</div>                      
          </div>
        </div>
        <div className="bg-slate-500 h-full w-full">
          {/* <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            <Marker position={center} />
            {dirRes && <DirectionsRenderer directions={dirRes} />}
          </GoogleMap> */}
        </div>
      </div>
    );
};

export default Maps;
