import React, { Component } from 'react';
import './Trip.css';

function Trip(props) {
    return(
        <div className='Trip trip__container'>
            <p className='trip__number'>{props.number}</p>
            <p className='trip__timeOfDeparture'>{props.timeOfDeparture}</p>
            <p className='trip__to'>{props.to}</p>
            <p className='trip__terminal'>{props.terminal}</p>
            <p className='trip__airline'>{props.airline}</p>
            <p className='trip__status'>{props.status}</p>
        </div>
    )
}

export default Trip;