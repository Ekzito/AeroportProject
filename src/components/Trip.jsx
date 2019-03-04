import React from 'react';
import './Trip.css';

function Trip(props) {
    return(
        <div className={props.status !== 'Рейс задержан' ? 'Trip' : 'Trip Trip--detained'}>
            <div className='Trip__flex-container'>
                <p className='trip__property trip__property--number'>{props.number}</p>
                <p className='trip__property trip__property--timeOfDeparture'>{props.timeOfDeparture}</p>
                <p className='trip__property trip__property--to'>{props.to}</p>
            </div>
            <div className='Trip__flex-container'>
                <p className='trip__property trip__property--terminal'>{props.terminal}</p>
                <p className='trip__property trip__property--airline'>{props.airline}</p>
                <p className='trip__property trip__property--status'>{props.status}</p>
            </div>
        </div>
    )
}



export default Trip;