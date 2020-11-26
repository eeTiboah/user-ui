import React, {useState} from 'react'

const UserB = ({data})=>{

    const [userData, setUserData] = useState({
        z:0,
        date: "",
        time: ""
    })

    return (
        <div>
            <div className="form_userB">
                <div className="form_data__userB">
                <div className="form_data__z">
                    <label htmlFor="zvalue">Z value</label>
                    <input type="number" value={data.z} id="zvalue" onChange={(e)=>setUserData({...userData, z: e.target.value})} />
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

            <p>X value is {data.x}</p>
            <p>Y value is {data.y}</p>
            <p>Date is {data.date}</p>
            <p>Time is {data.time}</p>
            <p>Fruit is {data.selectedFruit}</p>

            <p>User B z {userData.z}</p>
            <p>User B date {userData.date}</p>
            <p>User B time {userData.time}</p>
        </div>
    )
}

export default UserB