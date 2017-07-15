import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Foundation from 'foundation-sites';
import $ from 'jquery';

class ErrorModal extends Component {

    componentDidMount() {
        const modal = new window.Foundation.Reveal($('#error-modal'));
        modal.open();
    }

    render() {
        const { title, message } = this.props;
        return (
            <div id="error-modal" className="reveal tiny" data-reveal>
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="close" data-reveal="" aria-label="Close modal" type="button">
                        Okay <span role="img" aria-label="crying face">😢</span>
                    </button>
                </p>
            </div>
        );
    }
}

ErrorModal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
};

ErrorModal.defaultProps = {
    title: "Error",
};

export default ErrorModal;