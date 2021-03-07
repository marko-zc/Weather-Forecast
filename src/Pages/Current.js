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
          <div>
            <ul className="container">
                <li><img src={data.current.condition.icon}/></li>
                <li>{data.current.condition.text}</li>
                <li className="temp">{data.current.temp_c}°C</li>
                <li>feels like: <span className="temp">{data.current.feelslike_c}°C</span></li>
            </ul>
          </div>
        );
      }
        
    }
}

export default Current;
