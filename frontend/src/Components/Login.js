import React, { useEffect } from "react";
import axios from "axios";
import { useState } from 'react';
import './assetss/css/App.css'

export default function Login() {
     useEffect(() => {
          document.title = 'Login'
     }, []);

     const [user, setUser] = useState();
     const [password, setPassword] = useState();

     const login = () => {
          axios.post("http://localhost:3001/api/login", {
               user: user,
               password: password,
          }).then((response) => {
               window.location = 'http://localhost:3000/Categorias'
          });
     };


     return (
          <div>
               <nav className="navbar navbar-expand-lg navbar-black bg-black">
                    <div className="container-fluid">
                         <a className="navbar-brand" href="/">Cashflow</a>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarNav">
                              <ul class="navbar-nav">
                                   <li className="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                                   </li>
                                   <li className="nav-item">
                                        <a class="nav-link" href="Categorias">Categorias</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link" href="Flujo">Flujo de efectivo</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>







               <div className="containerL login">
                    <h1>Login</h1>
                    <label>Usuario</label>
                    <input type='text' placeholder='Nombre del usuario' id='user' onChange={e => setUser(e.target.value)}></input>
                    <label>Contraseña</label>
                    <input type='password' placeholder='Contraseña' id='password' onChange={e => setPassword(e.target.value)}></input>
                    <button onClick={login}> Iniciar</button>
               </div>
          </div>
     )
}