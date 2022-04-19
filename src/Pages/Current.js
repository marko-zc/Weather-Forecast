import React from 'react';
import './style.css';

class Current extends React.Component
{

    constructor (props) {
      super(props);
    }
  
    render()
    {
      const {error, isLoaded, data} = this.props.currentData;
      if(error){
        return <div>Error: {error.message}</div>
      } else if(!isLoaded){
        return <div>Loading...</div>;
      } else {
        return (
          <div className="content">
            <div className="location">{data.location.name}, {data.location.country}</div>
            <ul className="container">
                <li><img src={data.current.condition.icon}/></li>
                <li className="condition">{data.current.condition.text}</li>
                <li className="temp">{data.current.temp_c}°C</li>
                <li>feels like: <span className="temp">{data.current.feelslike_c}°C</span></li>
            </ul>
            <ul className="additional">
              <li>Clouds: {data.current.cloud}%</li>
              <li>Humidity: {data.current.humidity}%</li>
              <li>Wind: {data.current.wind_kph} km/h ({data.current.wind_dir})</li>
              <li>Pressure: {data.current.pressure_mb}mb</li>
              <li>Precipitation: {data.current.precip_mm}mm</li>
              <li>UV index: {data.current.uv}</li>
            </ul>
          </div>
        );
      }
        
    }
}

export default Current;
