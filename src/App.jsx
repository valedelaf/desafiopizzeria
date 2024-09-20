import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import { Route, Routes, Navigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import CartProvider from './context/CartContext'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import Logout from './pages/Logout'

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
    <CartProvider>
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
    <Route path="/register" element={user ? <Navigate to="/" /> : <RegisterPage />} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/pizza/:id" element={<Pizza />}/>
    <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login"/>}/>
    <Route path="/logout" element={<Logout />}/>
    <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </CartProvider>
      <Footer></Footer>
    </>
  )
}

export default App
