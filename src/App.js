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
      location: {
        error: null,
        isLoaded: false,
        data: null
      },
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

  async componentDidMount()
  {
    await fetch("https://json.geoiplookup.io/")
      .then(response => response.json())
      .then (
        (data) => {
          this.setState({
            location: {
              isLoaded: true,
              data,
              error: data.error
            }
          });
        },
        (error) => {
          this.setState({
            location: {
              isLoaded: true,
              error
            }
          });
        }
      )

    fetch("https://api.weatherapi.com/v1/current.json?key=75a62926a7bb4dc0bb8100310212402&q=" + this.state.location.data.city + "&aqi=no")
    .then(response => response.json())
    .then(
        (data) => {
          console.log(data);
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

    fetch("https://api.weatherapi.com/v1/forecast.json?key=75a62926a7bb4dc0bb8100310212402&q=" + this.state.location.data.city + "&days=10&aqi=yes&alerts=yes")
    .then(response => response.json())
      .then(
        (data) => {
          console.log(data);
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
      <div id="main">
        <nav>
          <ul className="buttonList">
            <li>
              <Link className="link" to="/Weather-Forecast">Current</Link>
            </li>
            <li>
              <Link className="link" to="/hourly">Hourly</Link>
            </li>
            <li>
              <Link className="link" to="/tomorrow">Tomorrow</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Weather-Forecast">
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
