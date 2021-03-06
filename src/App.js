import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Current from './Pages/Current';
import Tomorrow from './Pages/Tomorrow';
import Hourly from './Pages/Hourly';
import './App.css'


class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      currentWeather: {
        error: null,
        isLoaded: false,
        data: null
      },
      forecast: {
        error: null,
        isLoaded: false,
        data: null
      }
    }
  }

  componentDidMount()
  {
    fetch("https://api.weatherapi.com/v1/current.json?key=75a62926a7bb4dc0bb8100310212402&q=Zagreb&aqi=no")
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            currentWeather: {
            isLoaded: true,
            data,
            error: data.error
            }
          });
        },
        (error) => {
          this.setState({
            currentWeather: {
            isLoaded: true,
            error
            }
          });
        }
      ) 


      fetch("https://api.weatherapi.com/v1/forecast.json?key=75a62926a7bb4dc0bb8100310212402&q=Zagreb&days=10&aqi=yes&alerts=yes")
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            forecast: {
            isLoaded: true,
            data,
            error: data.error
            }
          });
        },
        (error) => {
          this.setState({
            forecast: {
            isLoaded: true,
            error
            }
          });
        }
      ) 
  }

  render()
  {
    return (
      <div>
        <nav>
          <ul className="buttonList">
            <li>
              <Link to="/">Current</Link>
            </li>
            <li>
              <Link to="/tomorrow">Tomorrow</Link>
            </li>
            <li>
              <Link to="/hourly">Hourly</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Current currentData={this.state.currentWeather} />
          </Route>
          <Route path="/tomorrow">
            <Tomorrow forecast={this.state.forecast} />
         </Route>
         <Route path="/hourly">
            <Hourly forecast={this.state.forecast} />
         </Route>
        </Switch>
      </div>
    );
  }

}

export default App;
