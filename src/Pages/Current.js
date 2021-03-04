import React from 'react';
import './Current.css';

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
            <ul>
                <li><img src={data.current.condition.icon}/></li>
                <li>{data.current.condition.text}</li>
                <li>{data.current.temp_c}°C</li>
                <li>feels like: {data.current.feelslike_c}°C</li>
            </ul>
          </div>
        );
      }
        
    }
}

export default Current;
