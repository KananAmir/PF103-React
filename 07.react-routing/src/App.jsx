import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Categories from './pages/Categories'
import CategoryDetail from './pages/CategoryDetail'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/:id' element={<CategoryDetail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}


export default App
