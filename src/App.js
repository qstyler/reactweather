import React from 'react';
import {
    BrowserRouter as Router, Route
} from 'react-router-dom';
import Main from './components/Main';

import './styles/App.css'

export default _ => (
    <Router>
        <Route path="/" component={Main} />
    </Router>
);
