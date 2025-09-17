import React from 'react'
import { useState } from 'react'
import UsersTable from '../UsersTable'
import UserForm from '../UserForm'

const Users = () => {
    const [users, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    const handleDelete = (userId) => {
        // console.log(userId);
        const updateUsers = users.filter((q) => q.id != userId)
        // console.log(updateUsers);

        setUsers(updateUsers)

        console.log(updateUsers);

    }


    const filteredUsers = users.filter((user) => user.username.toLowerCase().includes(searchQuery))

    return (
        <div>
            <h2>Users</h2>
            <UserForm setUsers={setUsers} users={users} />

            <hr />
            <input type="search" placeholder='search..'
                value={searchQuery}
                onChange={(e) => {
                    const value = e.target.value.toLowerCase().trim()
                    setSearchQuery(value)
                }} />
            <hr />
            {/* <UsersTable users={users} onDelete={handleDelete}/> */}
            <UsersTable users={filteredUsers} onDelete={handleDelete} />
        </div>
    )
}

export default Users
