import axios from "axios"
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Categories() {
    const [categories, setCategories] = useState([])
    const getCategories = async () => {
        try {
            const response = await axios(`${BASE_URL}/categories`)
            // console.log(response.data)
            setCategories(response.data)
        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        getCategories()
    }, [])


    if (categories.length === 0) {
        return <p>LOADING...</p>
    }

    return (
        <div>
            <ul>
                {categories.map((c) => {
                    return (
                        <li className="flex gap-3 my-3" key={c.id}>
                            <p>{c.name}</p> <Link to={`/categories/${c.id}`}><FaInfoCircle /></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories