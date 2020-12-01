import React, {useState} from 'react'
import moment from 'moment'
import Variance from '../Variance'

const UserComponent = ({data, dayA, z, name})=>{

    const [userData, setUserData] = useState({
        z:z,
        date: "2020-11-25",
        time: "10:00"
    })
    
    const [day, setDay] = useState("Wednesday")
    const [timeDiff, setTimeDiff]= useState("00:00:00")
    const [numberOfDays, setNumberOfDays] = useState(0)
    const [valueDiff, setValueDiff] = useState(0)


    let today = new Date(data.date);
    console.log(`Today's date is ${today}`)
    let pcTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const handleValue=e=>{
        setUserData({...userData, z: e.target.value})
        const valueDifference = data.y - e.target.value
        setValueDiff(valueDifference)
    }



    const handleDate = e => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
        const day = new Date(e.target.value)
        const dayName = days[day.getDay()]
        setUserData({...userData, date: e.target.value})
        setDay(dayName)
        const numDays = Math.abs(Math.round((today-day)/(1000*60*60*24)));
        setNumberOfDays(numDays)
    }

    const handleTime = e=>{
        let selectedTime = new Date(`${userData.date} ${e.target.value}`)
        let time = selectedTime.getHours() + ":" + selectedTime.getMinutes() + ":" + selectedTime.getSeconds();
        setUserData({...userData, time: e.target.value})
        const difference = moment(time, "HH:mm:ss").diff(moment(pcTime, "HH:mm:ss"))
        const diff = moment.utc(difference).format("HH:mm:ss");
        setTimeDiff(diff)
    }



    // console.log(`Time difference B is ${timeDiff}`)
    
    return (
        <div className="b">
            <div className="form_userB">
                <div className="form_data__userB">
                <div className="form_data__z">
                    <label htmlFor="zvalue">{name} Z value</label>
                    <input type="number" value={userData.z} id="zvalue" onChange={(e)=>handleValue(e)} />
                </div>
                <div className="form_data__dateB">
                        <label htmlFor="date">{name} Date</label>
                        <input type="date" value={userData.date} id="date" onChange={(e)=>handleDate(e)} />
                    </div>
                    <div className="form_data__timeB">
                        <label htmlFor="time">{name} Time</label>
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
                    <p>User A day: {dayA}</p>
                </div>
                <div className="form_data__B">
                    <h3>{name}</h3>
                    <p>Z value: {userData.z}</p>
                    <p>Date: {userData.date}</p>
                    <p>Time: {userData.time}</p>
                    <p>{name} day: {day}</p>
                </div>

                <Variance time={timeDiff} day={numberOfDays} value={valueDiff} />
            </div>
            
        </div>
    )
}

export default UserComponent