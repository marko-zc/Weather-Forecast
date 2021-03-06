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
          <div>
            <ul className="container">
                <li><img src={data.forecast.forecastday[1].day.condition.icon}/></li>
                <li>{data.forecast.forecastday[1].day.condition.text}</li>
                <li className="temp">min: {data.forecast.forecastday[1].day.mintemp_c}°C</li>
                <li className="temp">max: {data.forecast.forecastday[1].day.maxtemp_c}°C</li>
            </ul>
          </div>
        );
      }
        
    }
}

export default Tomorrow;
