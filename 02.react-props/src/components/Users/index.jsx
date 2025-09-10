import React from 'react'
import UserItem from '../UserItem'

const Users = ({users}) => {
    console.log(users)
  return (
    <div>
        <ul>
            {users.map((user)=>{
                return  <UserItem key={user.id} user={user} hello={"bye"}/>
            })}
        </ul>
    </div>
  )
}

export default Users
