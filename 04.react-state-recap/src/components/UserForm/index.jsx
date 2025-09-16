import { useState } from 'react'

const UserForm = ({ setUsers, users }) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()

        if(!username || !email || !age) {
            return;
        }
        

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

        resetForm()
        

    }


    function resetForm(){
        setUsername("")
        setEmail("")
        setAge(0)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="username" id="username" placeholder='username' onChange={(e) => {
                    setUsername(e.target.value)
                }}
                value={username}
                />
            </div>
            <div>
                <input type="email" name="email" id="email" placeholder='email' onChange={(e) => {
                    setEmail(e.target.value)
                }} 
                value={email}
                />
            </div>
            <div>
                <input type="number" name="age" id="age" placeholder='age' onChange={(e) => {
                    setAge(e.target.valueAsNumber)
                }} 
                value={age}
                />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    )
}

export default UserForm
