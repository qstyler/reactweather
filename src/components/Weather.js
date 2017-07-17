import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';
import ErrorModal from './ErrorModal';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: undefined,
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(location) {
        const _this = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
        });
        setTimeout(() => {
            openWeatherMap
                .getTemperature(location)
                .then((response) => {
                    _this.setState({
                        location: response.name,
                        temp: response.temp,
                    })
                })
                .catch((error) => {
                    _this.setState({
                        errorMessage: error.message,
                    });
                })
                .then(() => {
                    _this.setState({
                        isLoading: false,
                    });
                });
        }, 500);
    };

    render() {

        const { temp, location, isLoading } = this.state;

        const renderMessage = () => {
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
                <h1 className="text-center page-title">Get weather</h1>
                {renderMessage()}
                <WeatherForm onSearch={this.handleSearch} />
                {this.renderError()}
            </div>
        );
    }

    renderError() {
        if (typeof this.state.errorMessage === 'string') {
            return (
                <ErrorModal message={this.state.errorMessage} />
            );
        }
    }

    static renderLoader = () => (
        <p className="text-center">Loading...</p>
    );

    static renderEnterLocation = () => (
        <p className="text-center">Please ener location</p>
    );
}


export default Weather;