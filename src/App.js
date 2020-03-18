import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChoiceButtons from "./components/ChoiceButtons";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bgImg: null,
      weather: null,
      temperature: "",
      isLoading: true,
      locationName: ""
    };
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.getWeather(latitude, longitude);
    });
  };

  
  async getWeather(latitude, longitude) {
    const API_KEY = "b275f7119d133735fa15ea68778f530b";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      locationName: data.name,
      // put in more here
    });
  };
  
  
  render() {

    return (
      <div className="container-fluid text-white my-auto">
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 display-4 my-2 py-3 text-success">
              Awesome Weather App
            </h1>
            <h2 className="col-12">Location Name</h2>
            <h3 className="col-12 text-danger">Temperature</h3>
            <h3 className="col-12">Weather Description</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
