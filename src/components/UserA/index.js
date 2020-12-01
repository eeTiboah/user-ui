import React, {useState} from 'react'
import moment from 'moment'
import './UserA.css'
import UserB from '../UserB'
import UserC from '../UserC'
import UserD from '../UserD'


const UserA = ()=>{

    const [data, setData] = useState({
        x: 20,
        y: 10,
        date: "2020-11-26",
        time: "10:30",
        selectedFruit: "Mango"
    })

    const [day, setDay] = useState('Thursday')
    const [numberOfDays, setNumberOfDays] = useState(1)
    const [timeDiff, setTimeDiff]= useState("00:00:00")

    // const [valDiff, setValDiff]
    // const parCallback=(ev)=>{
    //     console.log(ev)
    // }

    let today = new Date();
    let pcTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const handleDate = e => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
        const day = new Date(e.target.value)
        const dayName = days[day.getDay()]
        setData({...data, date: e.target.value})
        setDay(dayName)
        const numDays = Math.abs(Math.round((today-day)/(1000*60*60*24)));
        setNumberOfDays(numDays)


        console.log(`User A ${numberOfDays}`)
    }

    const handleTime = e=>{
        let selectedTime = new Date(`${data.date} ${e.target.value}`)
        let time = selectedTime.getHours() + ":" + selectedTime.getMinutes() + ":" + selectedTime.getSeconds();
        setData({...data, time: e.target.value})
        const difference = moment(time, "HH:mm:ss").diff(moment(pcTime, "HH:mm:ss"))
        const diff = moment.utc(difference).format("HH:mm:ss");
        setTimeDiff(diff)
    }

    const handleY=e=>{
        setData({...data, y: e.target.value})
    }

    console.log(`Time difference A is ${timeDiff}`)

    return (
        <div className="user_A">
            <div className="form_userA">
                    <h1>User A</h1>
                <div className="form_data__userA">
                    <div className="form_data__x">
                        <label htmlFor="xvalue">X value</label>
                        <input type="number" value={data.x} id="xvalue" onChange={(e)=>setData({...data, x: e.target.value})} />
                    </div>
                    <div className="form_data__y">
                        <label htmlFor="yvalue">Y value</label>
                        <input type="number" value={data.y} id="xvalue" onChange={(e)=>handleY(e)} />
                    </div>
                    <div className="form_data__dateA">
                        <label htmlFor="date">Date A</label>
                        {/* <input type="date" value={data.date} id="date" onChange={(e)=>setData({...data, date: e.target.value})} /> */}
                        <input type="date" value={data.date} id="date" onChange={(e)=>handleDate(e)} />
                    </div>
                    <div className="form_data__timeA">
                        <label htmlFor="time">Time A</label>
                        <input type="time" step="1" value={data.time} id="time" onChange={(e)=>handleTime(e)} />
                    </div>
                    <div className="form_data__fruitA">
                        <label htmlFor="fruit">Fruit</label>
                        <select id="fruit" className="select_class" value={data.selectedFruit} onChange={e=>setData({...data, selectedFruit: e.target.value})}>
                            <option defaultValue disabled hidden style={{display: 'none'}} value=''>Select Fruit</option>
                            <option value="Pawpaw">Pawpaw</option>
                            <option value="Mango">Mango</option>
                            <option value="Orange">Orange</option>
                            <option value="Pineapple">Pineapple</option>
                            <option value="Apple">Apple</option>
                        </select>
                        
                    </div>

                </div>
            </div>

            <div className="form_B">
                <UserB name="User B" data={data} dayA={day} z={5} />
                <UserC name="User C" data={data} dayA={day} z={15} />
                <UserD name="User D" data={data} dayA={day} z={3} />
            </div>
        </div>
    )
}

export default UserA