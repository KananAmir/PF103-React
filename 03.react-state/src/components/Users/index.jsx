import React from 'react'
import { useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)

    // const users = [
    //     {
    //         id: "1",
    //         username: "lorem",
    //         email: "lorem@gmail.com",
    //         age: 44
    //     },
    //     {
    //         id: "2",
    //         username: "lorem",
    //         email: "lorem@gmail.com",
    //         age: 44
    //     }
    // ]


    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(username);
        console.log(email);
        console.log(age);
        
        const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            age: age
        }

        setUsers([...users, newUser])

        
    }


    const handleDelete = (userId)=>{
        // console.log(userId);

        const updateUsers = users.filter((q)=>q.id != userId)

        // console.log(updateUsers);

        setUsers(updateUsers)
        
    }

    return (
        <div>
            <h2>Users</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" id="username" placeholder='username' onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder='email' onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div>
                    <input type="number" name="age" id="age" placeholder='age' onChange={(e)=>{
                        setAge(e.target.valueAsNumber)
                    }}/>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>

            <hr />
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>email</th>
                        <th>age</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (<tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td><button onClick={()=>{handleDelete(user.id)}}>delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Users
