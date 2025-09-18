import { Link } from "react-router-dom"
const AdminHeader = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/admin"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/admin/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/admin/products/new"}>Add Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminHeader
