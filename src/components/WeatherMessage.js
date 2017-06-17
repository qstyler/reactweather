import React from 'react';

export default ({ temp, location }) => (
    <h3 className="text-center">It is {temp}°C in {location}</h3>
);