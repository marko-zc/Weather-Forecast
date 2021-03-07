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

    fetch("https://api.weatherapi.com/v1/forecast.json?key=75a62926a7bb4dc0bb8100310212402&q=" + this.state.location.data.city + "&days=10&aqi=yes&alerts=yes")          .then(response => response.json())
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
              <Link to="/weather/current">Current</Link>
            </li>
            <li>
              <Link to="/weather/tomorrow">Tomorrow</Link>
            </li>
            <li>
              <Link to="/weather/hourly">Hourly</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/weather/current" exact>
            <Current currentData={this.state.currentWeather} />
          </Route>
          <Route path="/weather/tomorrow">
            <Tomorrow forecast={this.state.forecast} />
         </Route>
         <Route path="/weather/hourly">
            <Hourly forecast={this.state.forecast} />
         </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
