import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(location) {
        const _this = this;
        this.setState({
            isLoading: true
        });
        setTimeout(() => {
            openWeatherMap
                .getTemperature(location)
                .then((response) => {
                    _this.setState({
                        location: response.name,
                        temp: response.temp
                    })
                })
                .catch((error) => {
                    alert(error);
                    console.error(error);
                })
                .then(() => {
                    _this.setState({
                        isLoading: false
                    });
                });
        }, 500);
    };

    render() {

        const { temp, location, isLoading } = this.state;

        const render = () => {
            if (isLoading) {
                return Weather.renderLoader();
            } else if (!location) {
                return Weather.renderEnterLocation()
            } else {
                return <WeatherMessage temp={temp} location={location} />;
            }
        };

        return (
            <div>
                <h1 className="text-center">Get weather</h1>
                {render()}
                <WeatherForm onSearch={this.handleSearch} />
            </div>
        );
    }

    static renderLoader = () => (
        <p className="text-center">Loading...</p>
    );

    static renderEnterLocation = () => (
        <p className="text-center">Please ener location</p>
    );
}


export default Weather;