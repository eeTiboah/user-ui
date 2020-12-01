import React from 'react'

const Variance=({time, day, value})=>{
    return (
        <div>
            <p>Time difference is {time}</p>
            <p>Day difference is {day}</p>
            <p>Value difference is {value}</p>
        </div>
    )
}

export default Variance