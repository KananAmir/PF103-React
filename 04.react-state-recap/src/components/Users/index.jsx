import React from 'react'
import { useState } from 'react'
import UsersTable from '../UsersTable'
import UserForm from '../UserForm'

const Users = () => {
    const [users, setUsers] = useState([])


    const handleDelete = (userId)=>{
        // console.log(userId);

        const updateUsers = users.filter((q)=>q.id != userId)

        // console.log(updateUsers);

        setUsers(updateUsers)

        console.log(updateUsers);
        
        
    }

    return (
        <div>
            <h2>Users</h2>
           <UserForm setUsers={setUsers} users={users}/>

            <hr />
            <UsersTable users={users} onDelete={handleDelete}/>
        </div>
    )
}

export default Users
