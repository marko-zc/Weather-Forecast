import React from 'react';

class Hourly extends React.Component
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
          <div>
            <ul>
                <li>{data.forecast.forecastday[0].hour[0].time_epoch}</li>
                <li><img src={data.forecast.forecastday[0].hour[0].condition.icon}/></li>
                <li>{data.forecast.forecastday[0].hour[0].condition.text}</li>
                <li>{data.forecast.forecastday[1].hour[0].temp_c}°C</li>
            </ul>
          </div>
        );
      }
        
    }
}

export default Hourly;
