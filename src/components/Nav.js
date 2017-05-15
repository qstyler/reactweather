import React from 'react'
import { NavLink } from "react-router-dom";

export default ({ match }) => (
  <ul>
    <li><NavLink to={match.url} exact activeStyle={{ fontWeight: 'bold' }}>Get Weather</NavLink></li>
    <li><NavLink to={`${match.url.replace(/\/$/, '')}/about`} activeStyle={{ fontWeight: 'bold' }}>About</NavLink></li>
    <li><NavLink to={`${match.url.replace(/\/$/, '')}/examples`} activeStyle={{ fontWeight: 'bold' }}>Examples</NavLink></li>
  </ul>
);