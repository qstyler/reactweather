import React from 'react';
import {
    BrowserRouter as Router, Route
} from 'react-router-dom';
import Main from './components/Main';


export default _ => (
    <Router>
        <Route path="/" component={Main} />
    </Router>
);
