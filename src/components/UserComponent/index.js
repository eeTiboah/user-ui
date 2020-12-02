import React, {useState} from 'react'
import Countdown from 'react-countdown';
// import DateCountdown from 'react-date-countdown-timer';
import Variance from '../Variance'
import './UserComponent.css'

const UserComponent = ({data, z, name})=>{

    const [userData, setUserData] = useState({
        z:z,
        date: "2020-11-25",
        time: "10:00:59",
        day: "Wednesday",
        timeDiff: 1800000,
        numberOfDays: 0,
        valueDiff: 0,
        dayDate: "2020-11-25"
    })


    let today = new Date(`${data.date} ${data.time}`);
    let hourmilli = (today.getHours()) * 3600 * 1000
    let minutemilli = (today.getMinutes()) * 60 * 1000
    let millis = (today.getSeconds()) * 1000

    let total = hourmilli + minutemilli + millis
    console.log(total)

    const handleValue=e=>{
        const valueDifference = data.y - e.target.value
        setUserData({...userData, z: e.target.value, valueDiff: valueDifference})
    }

    const handleDate = e => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
        const day = new Date(e.target.value)
        const dayName = days[day.getDay()]
        const numDays = Math.abs(Math.round((today-day)/(1000*60*60*24)));
        setUserData({...userData, date: e.target.value, day: dayName, numberOfDays: numDays, dayDate: day})
    }

    const handleTime = e=>{
        let selectedTime = new Date(`${userData.date} ${e.target.value}`)
        const difference = (today.getTime()) - (selectedTime.getTime())
        console.log(difference)
        setUserData({...userData, time: e.target.value, timeDiff: difference})
    }   

    const Complete=()=>(<span>Expired</span>)
    const renderer = ()=> ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Complete />;
        } else {
          return <span>{hours}:{minutes}:{seconds}</span>;
        }
      };
    
    return (
        <div className="b">
            <div className="form_userB">
                <div className="form_data__userB">
                <h2>{name}</h2>
                <br />
                <div className="form_data__z">
                    <label htmlFor="zvalue">Z value</label>
                    <input type="number" value={userData.z} id="zvalue" onChange={(e)=>handleValue(e)} />
                </div>
                <div className="form_data__dateB">
                        <label htmlFor="date">Date</label>
                        <input type="date" value={userData.date} id="date" onChange={(e)=>handleDate(e)} />
                    </div>
                    <div className="form_data__timeB">
                        <label htmlFor="time">Time</label>
                        <input type="time" step="1" value={userData.time} id="time" onChange={(e)=>handleTime(e)} />
                    </div>
                </div>
            </div>

            <div className="form_data">
                    <div className="form_data__A">
                        <h3>User A Data</h3>
                        <p>X value is {data.x}</p>
                        <p>Y value is {data.y}</p>
                        <p>Date is {data.date}</p>
                        <p>Time is {data.time}</p>
                        <p>Fruit is {data.selectedFruit}</p>
                        <p>User A day: {data.day}</p>
                        <Countdown
                            date={Date.now() + data.timeDiff} 
                            renderer={renderer}
                        />
                    </div>
                </div>
                <div className="form_variance">
                    <Variance name={name} time={userData.timeDiff} day={userData.numberOfDays} value={userData.valueDiff} />
                </div>
            
            
        </div>
    )
}

export default UserComponent