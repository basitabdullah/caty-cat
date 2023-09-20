import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import {Toaster} from "react-hot-toast"
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Cart from './components/Cart'
import Signup from './components/Signup'
const App = () => {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Toaster
      toastOptions={{
        className: '',
        style: {
          border: '1px solid #713200',
          padding: '10px',
          color: '#fff',
          backgroundColor : 'black',
        },
      }}/>
  </Router>
}

export default App