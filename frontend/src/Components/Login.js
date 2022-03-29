import React, { useEffect } from "react";
import axios from "axios";
import { useState } from 'react';
import './assetss/css/Login.css'

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
               window.location = 'http://localhost:3000/Home'
          });
     };

     return (
          <div>
               <div className="sidenav">
                    <div className="login-main-text">
                         <h2>Cashflow</h2>
                         <h2>Login Page</h2>
                    </div>
               </div>
               <div className="main">
                    <div className="col-md-6 col-sm-12">
                         <div className="login-form">
                              <form>
                                   <div className="form-group">
                                        <label>User Name</label>
                                        <input type="text" id='user' className="form-control" placeholder="Nombre del usuario" onChange={e => setUser(e.target.value)}/>
                                   </div>
                                   <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" id='password' className="form-control input_pass" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
                                   </div>
                                   <button onClick={login} type="submit" className="btn btn-black">Login</button>
                              </form>
                         </div>
                    </div>
               </div>
          </div >
     )
}