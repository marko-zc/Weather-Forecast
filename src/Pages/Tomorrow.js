import React from 'react';
import './style.css';

class Tomorrow extends React.Component
{

    constructor (props) {
      super(props);
    }
  
    render()
    {
      const {error, isLoaded, data} = this.props.forecast;
      if(error){
        return <div>Error: {error.message}</div>
      } else if(!isLoaded){
        return <div>Loading...</div>;
      } else {
        return (
          <div className="content">
            <div className='location'>{data.location.name}, {data.location.country}</div>
            <ul className="container">
                <li><img src={data.forecast.forecastday[1].day.condition.icon}/></li>
                <li className="condition">{data.forecast.forecastday[1].day.condition.text}</li>
                <li>min: <span className="temp">{data.forecast.forecastday[1].day.mintemp_c}°C</span></li>
                <li>max: <span className="temp">{data.forecast.forecastday[1].day.maxtemp_c}°C</span></li>
            </ul>
            <ul className="additional">
              <li>Average humidity: {data.forecast.forecastday[1].day.avghumidity}%</li>
              <li>Maximum wind: {data.forecast.forecastday[1].day.maxwind_kph} km/h</li>
              <li>Chance of rain: {data.forecast.forecastday[1].day.daily_chance_of_rain}%</li>
              <li>Chance of snow: {data.forecast.forecastday[1].day.daily_chance_of_snow}%</li>
              <li>Precipitation: {data.forecast.forecastday[1].day.totalprecip_mm}mm</li>
              <li>UV index: {data.forecast.forecastday[1].day.uv}</li>
            </ul>
          </div>
        );
      }
        
    }
}

export default Tomorrow;
