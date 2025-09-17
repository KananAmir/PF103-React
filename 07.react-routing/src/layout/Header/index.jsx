import {  NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header



// import { Link } from "react-router-dom"

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md">
//       <nav className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Navigation Links */}
//         <ul className="flex space-x-8">
//           <li>
//             <Link
//               to="/"
//               className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

// export default Header
