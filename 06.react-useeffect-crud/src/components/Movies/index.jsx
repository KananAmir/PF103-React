import { useEffect, useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';

function Movies() {

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({
        title: "",
        releaseYear: 0,
        posterSrc: "",
        description: "",
        imdb: 0.0
    })

    const [editStatus, setEditStatus] = useState(false)

    const notify = () => toast('Movie posted successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    const getMovies = async () => {
        try {
            const response = await axios.get("http://localhost:8080/movies")
            // console.log(response.data);
            setMovies(response.data)
        } catch (error) {
            console.log(error.message);
        }
    }


    const handleDeleteMovie = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                try {
                    const response = await axios.delete(`http://localhost:8080/movies/${id}`)
                    if (response.status === 200) {
                        const filteredMovies = movies.filter((movie) => movie.id !== id)
                        setMovies(filteredMovies)
                    }

                } catch (error) {
                    console.log(error.message);
                }

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!movie.title && !movie.description && !movie.imdb && !movie.releaseYear && !movie.posterSrc) {
            toast('All inputs must be filled!', {
                style: {
                    backgroundColor: "black"
                },
                // delay: 2000,
                autoClose: 1000,
            })
            return
        }

        try {
            if (!editStatus) {

                const response = await axios.post("http://localhost:8080/movies", movie)
                if (response.status === 201) {
                    setMovies([...movies, response.data])
                    // getMovies()
                    notify()
                }
            } else {
                const response = await axios.put(`http://localhost:8080/movies/${movie.id}`, movie)
                console.log(response);
                if (response.status === 200) {
                    toast('Movie updated successfully!!')
                    //  getMovies()

                    const idx = movies.findIndex((q) => q.id == movie.id)

                    movies.splice(idx, 1, movie)

                    // setMovies(movies)
                    setMovies([...movies])
                }
            }


            setEditStatus(false)
            resetForm()

        } catch (error) {
            console.log(error.message);
        }
    }
    const resetForm = () => {
        setMovie({
            title: "",
            releaseYear: 0,
            posterSrc: "",
            description: "",
            imdb: 0.0

        })
    }
    useEffect(() => {
        getMovies()
    }, [])


    if (movies.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <div>

            <h1 className="text-3xl font-bold underline">Add Movie</h1>

            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="title" className="block mb-2 font-bold text-gray-600">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Put in your title."
                            className="border border-gray-300 shadow p-3 w-full rounded mb-"
                            onChange={(e) => {
                                setMovie({ ...movie, title: e.target.value })
                            }}
                            value={movie.title}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="releaseYear" className="block mb-2 font-bold text-gray-600">
                            Release Year
                        </label>
                        <input
                            type="number"
                            id="releaseYear"
                            name="releaseYear"
                            placeholder="Put in your releaseYear."
                            className="border border-gray-300 shadow p-3 w-full rounded mb-"
                            onChange={(e) => {
                                setMovie({ ...movie, releaseYear: e.target.value })
                            }}
                            value={movie.releaseYear}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="posterSrc" className="block mb-2 font-bold text-gray-600">
                            Poster
                        </label>
                        <input
                            type="url"
                            id="posterSrc"
                            name="posterSrc"
                            placeholder="Put in your posterSrc."
                            className="border border-gray-300 shadow p-3 w-full rounded mb-"
                            onChange={(e) => {
                                setMovie({ ...movie, posterSrc: e.target.value })
                            }}
                            value={movie.posterSrc}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="description" className="block mb-2 font-bold text-gray-600">
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Put in your description."
                            className="border border-gray-300 shadow p-3 w-full rounded mb-"
                            onChange={(e) => {
                                setMovie({ ...movie, description: e.target.value })
                            }}
                            value={movie.description}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="imdb" className="block mb-2 font-bold text-gray-600">
                            IMDB
                        </label>
                        <input
                            type="number"
                            min={0}
                            max={10}
                            step={0.1}
                            id="imdb"
                            name="imdb"
                            placeholder="Put in your description."
                            className="border border-gray-300 shadow p-3 w-full rounded mb-"
                            onChange={(e) => {
                                setMovie({ ...movie, imdb: e.target.value })
                            }}
                            value={movie.imdb}
                        />
                    </div>

                    <button className="block w-full bg-blue-500 text-blue-700 font-bold p-4 rounded-lg">
                        {!editStatus ? "Add" : "Update"}
                    </button>
                </form>

            </div>

            <h1 className="text-3xl font-bold underline">Movies List</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            TITLE
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            RELEASE YEAR
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            GENRE
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            IMDB
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            DESC
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ACTIONS
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {movies.map((movie) => {
                        return (<tr key={movie.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{movie.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{movie.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{movie.releaseYear}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{movie.genre || <span className="text-red-400">no genre</span>}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{movie.imdb}</td>
                            <td className="px-6 py-4 whitespace-nowrap" title={movie.description}>
                                {movie.description?.slice(0, 30)}...
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                <button className="text-indigo-600 hover:text-indigo-900"
                                    onClick={() => {
                                        setEditStatus(true)
                                        setMovie(movie)
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        })
                                    }}
                                >Edit</button>
                                <button className="ml-2 text-red-600 hover:text-red-900" onClick={() => {
                                    handleDeleteMovie(movie.id)
                                }}>Delete</button>
                            </td>
                        </tr>)
                    })}

                </tbody>
            </table>
            <ToastContainer />

        </div>
    )
}

export default Movies