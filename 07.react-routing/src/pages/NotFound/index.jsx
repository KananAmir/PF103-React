import { Link } from "react-router-dom"
import "./index.css"
function NotFound() {
  return (
   <div class="site">
	<div class="sketch">
		<div class="bee-sketch red"></div>
		<div class="bee-sketch blue"></div>
	</div>

<h1>404:
	<small>Page Not Found</small></h1>
</div>
  )
}

export default NotFound

// export default NotFound
// import { Link } from "react-router-dom"

// function NotFound() {
//   return (
//     <div className="flex flex-col items-center justify-center text-center bg-gray-50 px-4">
//       <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
//       <h2 className="mt-4 text-2xl font-semibold text-gray-800">
//         Oops! Page not found
//       </h2>
//       <p className="mt-2 text-gray-600">
//         The page you are looking for doesn’t exist or has been moved.
//       </p>

//       <Link
//         to="/"
//         className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
//       >
//         Go Back Home
//       </Link>
//     </div>
//   )
// }

// export default NotFound