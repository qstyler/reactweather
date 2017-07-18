import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Nav extends Component {


    constructor(...args) {
        super(...args);

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e) {
        e.preventDefault();

        const location = encodeURIComponent(this.refs.location.value.trim());
        if(location.length) {
            this.refs.location.value = '';
            this.props.history.push('/?location=' + location);
        }
    };

    render() {
        const { match } = this.props;
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <NavLink to={match.url} exact activeStyle={{ fontWeight: 'bold' }}>Get Weather</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url.replace(/\/$/, '')}/about`} activeStyle={{ fontWeight: 'bold' }}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url.replace(/\/$/, '')}/examples`} activeStyle={{ fontWeight: 'bold' }}>Examples</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="location" placeholder="Search weather by city" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

Nav.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};

export default withRouter(Nav);