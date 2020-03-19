import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import ChoiceButtons from "./components/ChoiceButtons";

// const CHOICES = {
//   hochiminh: {
//     name: "hochiminh",
//     url: "./img/hochiminh.png"
//   },
//   paper: {
//     name: "paper",
//     url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
//   },
//   rock: {
//     name: "rock",
//     url:
//       "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
//   }
// };

class App extends Component {

  

  constructor(props){
    super(props)
    this.state = {
      temperature: "",
      locationName: "",
      isLoading: true
    }
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.getWeather(latitude, longitude);
    });
  };

  
  async getWeather(latitude, longitude) {
    const api_key = "b275f7119d133735fa15ea68778f530b";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`
    let response = await fetch(url);
    let data = await response.json();
    console.log('api result:', data);
    this.setState({
      locationName: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      isLoading: false
    });
    console.log('locationName:', this.state.locationName,
    'temperature:', data.main.temp, 'description:', data.weather[0].description);
  }

  
  
  render(){
    return  (
      <div className="container-fluid my-auto text-white">
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 display-4 my-2 py-3 text-success">
              Weather
            </h1>
            <h2 className="col-12">{this.state.locationName}</h2>
            <h3 className="col-12 text-danger">{this.state.temperature}&#8451;</h3>
            <h3 className="col-12">{this.state.description}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

