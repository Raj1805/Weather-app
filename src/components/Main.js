import React, {useState} from "react";
import "./css/style.css";
import Dayforecast from "./Dayforecast";


const Main = () => {
// api did not work but I tried the coding
//const [city, setCity ] = useState(null); 
const [search, setSearch] = useState("Mumbai");


// useEffect( () => {
//     const fetchApi = async () => {
//         const url=`http://api.openweathermap.org/data/2.5/weather?q=&${search}appid={0767357105cb56b926476bab14cbc90d}`
//         const response = await fetch(url)
//         const resJson = await response.json();
//         console.log(response);
//         setCity(resJson);
    
//     };
//     fetchApi();
// },[search] )

    return (
        <>
          <div className="inputData">
              <input
              type="search"
              value={search}
              className="inputField"
              onChange={ (event) => { setSearch(event.target.value)} } /> 
          </div>
            <div className="info">
              <h5 className="location"><i className="fas fa-map-marker-alt"></i>Mumbai</h5>
              <p className="real-time">updated as of 11:27PM</p>
              <div className="temperature">
                <img src="/images/cloudy.png" className="weather-img" alt="weather-img"/>
                <p className="temp">25.5<i className="far fa-circle"></i><span className="unit">C</span></p>
                <p className="temp-desc">Light Rain</p>
              </div>
            </div>
            <div className="display-flex extra-info">
                <div className="feels-like">
                    <div><i className="fas fa-thermometer-three-quarters"></i></div>
                    <div className="extra-info-desc"><p>FEELS LIKE</p><div>30</div></div>
                </div>
                <div className="wind display-flex">
                    <div><i className="fas fa-wind"></i></div>
                    <div className="extra-info-desc"><p>WIND</p><div>30</div></div>
                </div>
                <div className="wind display-flex">
                    <div><i className="fas fa-thermometer-three-quarters"></i></div>
                    <div className="extra-info-desc"><p>FEELS LIKE</p><div>30</div></div>
                </div>
            </div>
            <div className="display-flex extra-info">
                <div className="feels-like">
                    <div><i className="fas fa-thermometer-three-quarters"></i></div>
                    <div className="extra-info-desc"><p>FEELS LIKE</p><div>30</div></div>
                </div>
                <div className="wind display-flex">
                    <div><i className="fas fa-wind"></i></div>
                    <div className="extra-info-desc"><p>WIND</p><div>30</div></div>
                </div>
                <div className="wind display-flex">
                    <div><i className="fas fa-thermometer-three-quarters"></i></div>
                    <div className="extra-info-desc"><p>FEELS LIKE</p><div>30</div></div>
                </div>
            </div>

            <div className="forecast">
                <h3>10 day forecast</h3>
                <div className="display-flex">
                  <Dayforecast/>
                  <Dayforecast/>
                  <Dayforecast/>
                  <Dayforecast/>
                  <Dayforecast/>
                  <Dayforecast/>
                </div>
            </div>
            
            <h3 className="tempmin_max"> Min : 5.25Cel  |  Max : 5.5 Cel</h3>
        </>
    )
}

export default Main;
