import React from 'react';
import './style.css';

class Hourly extends React.Component
{

    constructor (props) {
      super(props);
    }
  
    render()
    {
      const {error, isLoaded, data} = this.props.forecast;

      const renderHourly = (data) =>
        data.forecast.forecastday.map(
          (day) => day.hour
            .filter(
              hourlyData => hourlyData.time_epoch*1000 >= (Date.now()-3600000)
            ).map((hourlyData, i) => {
                const time = new Date(hourlyData.time_epoch*1000)
              return <ul key={i} className="container">
                <li><span className="date">{time.getDate() + ".0" + (time.getMonth() + 1) + "."}</span> <br /> {time.getHours() + ':00'}</li>
                <li><img src={hourlyData.condition.icon} /></li>
                <li>{hourlyData.condition.text}</li>
                <li className="temp">{hourlyData.temp_c}°C</li>
              </ul>
            }
          )
        ); 

      if(error){
        return <div>Error: {error.message}</div>
      } else if(!isLoaded){
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            {renderHourly(data)}
          </div>
        );
      }
        
    }
}

export default Hourly;
