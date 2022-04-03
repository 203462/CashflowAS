import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categorias from './Categorias'
import Home from './Home'
import Login from './Login'
import Flujo from './Flujo'
import Main from './Main'
import Register from './Register'
import Indicadores from './Indicadores'
import ReporteFlujo from './ReporteFlujo'
import ReporteBanco from './ReporteBanco'
import ReporteCuentasCobrar from './ReporteCuentasCobrar'
import ReporteCuentasPagar from './ReporteCuentasPagar'
import ReporteFinal from './ReporteFinal'

export default function Router() {
     return (
          <Routes>
               <Route path='/' element={<Main/>}></Route>
               <Route path='/home' element={<Home/>}></Route>
               <Route path='/login' element={<Login/>}></Route>
               <Route path='/register' element={<Register/>}></Route>
               <Route path='/categorias' element={<Categorias />}></Route>
               <Route path='/flujo' element={<Flujo />}></Route>
               <Route path='/indicadores' element={<Indicadores />}></Route>
               <Route path='/ReporteFlujo' element={<ReporteFlujo />}></Route>
               <Route path='/ReporteBanco' element={<ReporteBanco />}></Route>
               <Route path='/ReporteCuentasCobrar' element={<ReporteCuentasCobrar />}></Route>
               <Route path='/ReporteCuentasPagar' element={<ReporteCuentasPagar />}></Route>
               <Route path='/ReporteFinal' element={<ReporteFinal />}></Route>
          </Routes>
     )

}