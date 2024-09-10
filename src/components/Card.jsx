import React from "react";
import { useWeather } from "../context/Weather";

const Cardd=()=>{
    const weather=useWeather();
    return(
        <div class="Cardd">
            <img src={weather?.data?.current?.condition?.icon}></img>
            <h2>{weather.data?.current?.temp_c} .C</h2>
            <h5>{weather.data?.location?.name},{weather.data?.location?.region},{weather.data?.location?.country}</h5>
            <h5>Humidity :{weather.data?.current?.humidity}</h5>
            <h5>Feels like :{weather.data?.current?.feelslike_c}</h5>
            <h5>Overcast:{weather.data?.current?.condition?.text}</h5>
        </div>
    )
}
export default Cardd;