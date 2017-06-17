import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Weather from './Weather';
import About from './About';
import Examples from './Examples';

import 'foundation-sites/dist/css/foundation.min.css';

export default ({ match }) => (
    <div>
        <Nav match={match} />
        <h2>Main component</h2>
        <Route exact path={match.url} component={Weather} />
        <Route path={`${match.url.replace(/\/$/, '')}/about`} component={About} />
        <Route path={`${match.url.replace(/\/$/, '')}/examples`} component={Examples} />
    </div>
);