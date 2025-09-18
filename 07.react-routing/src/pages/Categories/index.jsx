// import axios from "axios"
import { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteDataById, getAllData } from "../../services";

function Categories() {

    const [categories, setCategories] = useState([])

    // const getCategories = async () => {
    //     try {
    //         const response = await axios(`${BASE_URL}/categories`)
    //         // console.log(response.data)
    //         setCategories(response.data)
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }


    // useEffect(() => {
    //     getCategories()
    // }, [])



    const handleDelete = async (categoryId) => {
        const response = await deleteDataById("categories", categoryId)
        console.log(response);

        if(response.status === 200){
            setCategories(categories.filter((q)=>q.id !== categoryId))
        }

    }
    const getCategories = async () => {
        try {
            const data = await getAllData("categories")
            // console.log(data);
            setCategories(data)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        // console.log(getAllData("categories"));

        // getAllData("categories").then((data)=>{
        //     console.log(data);
        //     setCategories(data)
        // }).catch((err)=>{
        //     console.log(err);
        // })

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
                            <p className="flex items-center">{c.name}</p>
                            <Link to={`/categories/${c.id}`}><FaInfoCircle /></Link>
                            <button
                                onClick={() => { handleDelete(c.id) }}
                            ><FaTrashAlt className="text-red-600"/>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories