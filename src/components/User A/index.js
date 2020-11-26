import React, {useState} from 'react'
import UserB from '../User B'

const UserA = ()=>{

    const [data, setData] = useState({
        x: 0,
        y:0,
        date: "",
        time: "",
        selectedFruit: ""
    })

    return (
        <div className="user_A">
            <div className="form_userA">
                <div className="form_data__userA">
                    <div className="form_data__x">
                        <label htmlFor="xvalue">X value</label>
                        <input type="number" value={data.x} id="xvalue" onChange={(e)=>setData({...data, x: e.target.value})} />
                    </div>
                    <div className="form_data__y">
                        <label htmlFor="yvalue">Y value</label>
                        <input type="number" value={data.y} id="xvalue" onChange={(e)=>setData({...data, y: e.target.value})} />
                    </div>
                    <div className="form_data__dateA">
                        <label htmlFor="date">Date A</label>
                        <input type="date" value={data.date} id="date" onChange={(e)=>setData({...data, date: e.target.value})} />
                    </div>
                    <div className="form_data__timeA">
                        <label htmlFor="time">Time A</label>
                        <input type="time" value={data.time} id="time" onChange={(e)=>setData({...data, time: e.target.value})} />
                    </div>
                    <div className="form_data__fruitA">
                        <label htmlFor="fruit">Fruit</label>
                        <select value={data.selectedFruit} onChange={e=>setData({...data, selectedFruit: e.target.value})} name="fruit" id="cars">
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

            <div>
                <UserB data={data} />
            </div>
        </div>
    )
}

export default UserA