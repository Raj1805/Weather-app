import React from 'react'

function Dayforecast() {
    return (
        <div>
            <div className="day-width">
                <h3>Today</h3>
                <div className="day-forecast">
                    <img src="/images/cloudy.png" className="forecast-img" alt="weather-img"/>
                    <p className="forecast-temp">25.5<i className="far fa-circle forecast-degree"></i><span className="forecast-unit">C</span></p>
                </div>
                <div className="extra-forecast">
                    <div>260<i className="far fa-circle forecast-degree"></i></div>
                    <div>30<i className="far fa-circle forecast-degree"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Dayforecast
    