import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
//import Foundation from 'foundation-sites';
import $ from 'jquery';

class ErrorModal extends Component {

    componentDidMount() {
        const { title, message } = this.props;

        const modalMarkup = (
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

        const $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        const modal = new window.Foundation.Reveal($('#error-modal'));
        modal.open();
    }

    render() {
        return <div />;
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