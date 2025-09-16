import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Table from 'react-bootstrap/Table';

const Categories = () => {

    const apiUrl = "https://northwind.vercel.app/api/categories"
    // const [categories, setCategories] = useState(null)
    const [categories, setCategories] = useState([])

    async function getAllCategories() {
        try {
            const response = await axios.get(apiUrl)
            // console.log(response.data);
            setCategories(response.data)
        } catch (error) {
            console.log(error.message);
        }
    }



    // if dependecy array is empty, runs only once when component is mounted
    useEffect(() => {
        getAllCategories()
    }, [])


    if (categories.length === 0) {
        return <p>LOADING...</p>
    }

    return (
        <div>
            <h2>Categories</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            categories.map((c)=>{
                                return (<tr key={c.id}>
                                    <td>{c.id}</td>
                                    <td>{c.name}</td>
                                    <td>{c.description}</td>
                                </tr>)
                            })
                        }            
                </tbody>
           </Table>
        </div>
    )
}

export default Categories
