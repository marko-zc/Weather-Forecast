import React from 'react';

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
          (day) => day.hour.map((hourlyData) =>
          <ul>
            <li>{hourlyData.time_epoch}</li>
            <li><img src={hourlyData.condition.icon} />}</li>
            <li>{hourlyData.condition.text}</li>
            <li>{hourlyData.temp_c}</li>
          </ul>
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
