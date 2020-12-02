import React from 'react'
import './Variance.css'
import Countdown from 'react-countdown';

const Variance=({time, day, value, name})=>{
    const Complete=()=>(<span>Expired</span>)

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Complete />;
        } else {
          return <span>{hours}:{minutes}:{seconds}</span>;
        }
      };

    return (
        <div className="variance_display">
            <h2>{name}</h2>
            <p>Day difference is {day}</p>
            <p>Value difference is {value}</p>
            <Countdown
                date={Date.now() + time} 
                renderer={renderer}
            />
        </div>
    )
}

export default Variance