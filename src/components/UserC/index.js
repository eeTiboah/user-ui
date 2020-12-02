import React from 'react'
import UserComponent from '../UserComponent';

const UserC =({data, z, name})=>{
    return (
        <UserComponent data={data} z={z} name={name} />
    )
}

export default UserC