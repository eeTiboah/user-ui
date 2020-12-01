import React from 'react'
import UserComponent from '../UserComponent';

const UserC =({data, dayA, z, name})=>{
    return (
        <UserComponent data={data} dayA={dayA} z={z} name={name} />
    )
}

export default UserC