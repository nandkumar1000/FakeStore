
import { Route, Routes } from 'react-router-dom'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Wishlist from './Components/Wishlist'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Details from './Components/Details'
import Create from './Components/Create'
import Edit from './Components/Edit'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/Addcart" element={<Create />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
