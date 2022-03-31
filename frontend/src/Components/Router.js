import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categorias from './Categorias'
import Home from './Home'
import Login from './Login'
import Flujo from './Flujo'
import Main from './Main'
import Register from './Register'

export default function Router() {
     return (
          <Routes>
               <Route path='/' element={<Main/>}></Route>
               <Route path='/home' element={<Home/>}></Route>
               <Route path='/login' element={<Login/>}></Route>
               <Route path='/register' element={<Register/>}></Route>
               <Route path='/categorias' element={<Categorias />}></Route>
               <Route path='/flujo' element={<Flujo />}></Route>
          </Routes>
     )

}