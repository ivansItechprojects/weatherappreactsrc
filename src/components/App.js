import React from "react";
import Preloder from "./Preloder";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            base: {},
            main: {},
            coord: {},
            wind: {},
            sys: {},
            data: false,
            cont: {},
            listDataFromChild: null,
            units: "F"
        };
    }

    componentDidMount() {
        this.getLocationAndWeather();
    }

    getLocationAndWeather() {
        let th = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = "lat=" + position.coords.latitude;
                var lon = "lon=" + position.coords.longitude;
                var url = `https://fcc-weather-api.glitch.me/api/current?${lat}&${lon}`;
                fetch(url)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (json) {
                        th.setState({ data: true, cont: json });
                    });
            });
        } else {
            alert("Geolocation is not supported by this browser. !!!");
        }
    }
    render() {
        if (this.state.data) {
            return (
                <div className="appContent">
                    <Preloder />
                    <div className="appContentText">
                        <h1 className="weatherAppHeading">Weather App<span className="fas fa-cloud"></span><span className="far fa-sun"></span></h1>
                        <div>
                            <div className="mainData">
                                <div>
                                <strong>Local city: </strong>
                            
                                    {this.state.cont.name}, {this.state.cont.sys.country}   <img src={this.state.cont.weather[0].icon} /> 
                                    <br/>
                                   <strong> Temperature: <span className="temperature"> {this.state.cont.main.temp}  </span> {String.fromCharCode(176) + "C"}</strong>
                                </div>
                                    
                                        
                            <strong>Coordinates:</strong>
                             
                                Latitude: {this.state.cont.coord.lat}
                                <br />
                                Longitude: {this.state.cont.coord.lon}
                            </div>
                            <div className="CloudData">
                                <strong>Clarity:</strong>
                                <p>{this.state.cont.visibility}</p>
                                <strong>Clouds:</strong>
                                <p>{this.state.cont.weather[0].main}</p>
                                <strong>Description:</strong>
                                <p>{this.state.cont.weather[0].description}</p>
                            </div>
                            <div>
                                <div className="glowne">
                                    <div>
                                        <strong>Weather data:</strong>
                                        <br />
                                        <span>
                                            {this.state.cont.main.humidity} humidity / wilgotność
                                            powietrza <span>g/m3</span>{" "}
                                        </span>
                                        <br />
                                        <span>
                                            {this.state.cont.main.pressure} pressure / ciśnienie{" "}
                                            <span> hPa </span>
                                        </span>
                                        <br />
                                        <div>
                                            <span>
                                                {this.state.cont.main.temp_max} tempreture maks/
                      temperatura maks{" "}
                                                <span>{String.fromCharCode(176) + "C"}</span>
                                            </span>
                                            <br />
                                            <span>
                                                {this.state.cont.main.temp_min} temperatura minimalna /
                      temperatura minimalna{" "}
                                                <span>{String.fromCharCode(176) + "C"}</span>
                                            </span>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="wiatr">
                                    <strong>Wind: </strong>
                                    <ul>
                                        <li>{this.state.cont.wind.speed} m/s</li>
                                    </ul>
                                    <div />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div />;
        }
    }
}

export default App;
