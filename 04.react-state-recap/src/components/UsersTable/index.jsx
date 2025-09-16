
const UsersTable = ({users, onDelete}) => {
    return (
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
                        <td><button onClick={() => { onDelete(user.id) }}>delete</button></td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default UsersTable
