import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => (

    <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are few examples</p>
        <ul>
            <li>
                <NavLink to="/?location=Amsterdam, Nederland">Amsterdam, Nederland</NavLink>
            </li>
            <li>
                <NavLink to="/?location=Rio, Brazil">Rio, Brazil</NavLink>
            </li>
        </ul>
    </div>
);