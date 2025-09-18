import './App.css'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/Client/Home'
import AboutPage from './pages/Client/About'
import ProductsPage from './pages/Client/Products'
import ProductDetailPage from './pages/Client/ProductDetail'
import Dashboard from "./pages/Admin/Dashboard"
import AdminProducts from "./pages/Admin/Products"
import AddProduct from "./pages/Admin/AddProduct"
import ProductView from "./pages/Admin/ProductView"
import ClientLayout from './layout'
import AdminLayout from './layout/Admin'

function App() {

  return (
    <>

      {/* client layout */}
      <Routes>
        <Route path="/" element={<ClientLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path='about' element={<AboutPage/>}/>
          <Route path='products'>
            <Route index element={<ProductsPage/>}/>
            <Route path=':id' element={<ProductDetailPage/>}/>
          </Route>
        </Route>
      </Routes>

      {/* admin layout */}
      <Routes>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={< Dashboard/>}/>
          {/* <Route path='products' element={<AdminProducts />}/> */}
          {/* <Route path='products/new' element={<AddProduct />}/> */}
          <Route path='products'>
            <Route index element={<AdminProducts/>}/>
            <Route path='new' element={<AddProduct/>}/>
            <Route path='view' element={<ProductView/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
