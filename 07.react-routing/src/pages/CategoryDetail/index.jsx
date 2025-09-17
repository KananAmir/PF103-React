import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../constants";
import { useState } from "react";
import { useEffect } from "react";

function CategoryDetail() {
    const [category, setCategory] = useState(null)

    const { id } = useParams()
    const navigate = useNavigate()

    console.log(id);



    const getCategory = async () => {
        try {
            const response = await axios(`${BASE_URL}/categories/${id}`)
            setCategory(response.data)
        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        getCategory()
    }, [id])



    if (!category) {
        return (<p>LOADING...</p>)
    }

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.name}</h2>
            <p className="text-gray-600 mb-6">{category.description}</p>
            <button
                onClick={()=>{
                    navigate(-1)
                }}
                className="px-4 py-2 bg-blue-600 text-blue-400 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
            >
                Go Back
            </button>
        </div>

    )
}

export default CategoryDetail