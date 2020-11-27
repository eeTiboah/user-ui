import React, {useState} from 'react'
import './UserB.css'

const UserB = ({data})=>{

    const [userData, setUserData] = useState({
        z:5,
        date: "2020/11/25",
        time: "10:04"
    })



    return (
        <div className="b">
            <div className="form_userB">
                <div className="form_data__userB">
                <div className="form_data__z">
                    <label htmlFor="zvalue">Z value</label>
                    <input type="number" value={userData.z} id="zvalue" onChange={(e)=>setUserData({...userData, z: e.target.value})} />
                </div>
                <div className="form_data__dateB">
                        <label htmlFor="date">Date B</label>
                        <input type="date" value={userData.date} id="date" onChange={(e)=>setUserData({...userData, date: e.target.value})} />
                    </div>
                    <div className="form_data__timeB">
                        <label htmlFor="time">Time B</label>
                        <input type="time" value={userData.time} id="time" onChange={(e)=>setUserData({...userData, time: e.target.value})} />
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
                </div>
                <div className="form_data__B">
                    <h3>User B Data</h3>
                    <p>Z value: {userData.z}</p>
                    <p>Date: {userData.date}</p>
                    <p>Time: {userData.time}</p>
                </div>
            </div>
            
        </div>
    )
}

export default UserB