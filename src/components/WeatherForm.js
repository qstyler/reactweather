import React, { Component } from 'react';

class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        const locationRef = this.refs.location;
        const location = locationRef.value.trim();

        if (location !== '') {
            locationRef.value = '';
            this.props.onSearch(location);
        }
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <p>
                    <input type="text" ref="location" />
                </p>
                <p>
                    <button className="button expanded">Get weather</button>
                </p>
            </form>
        );
    }
}

export default WeatherForm;