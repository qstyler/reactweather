import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Weather from './Weather';
import About from './About';
import Examples from './Examples';

import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';

export default ({ match }) => (
    <div>
        <Nav match={match} />
        <div className="row">
            <div className="columns medium-6 large-4 small-centered">
                <Route exact path={match.url} component={Weather} />
                <Route path={`${match.url.replace(/\/$/, '')}/about`} component={About} />
                <Route path={`${match.url.replace(/\/$/, '')}/examples`} component={Examples} />
            </div>
        </div>
    </div>
);