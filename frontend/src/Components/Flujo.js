import react from "react";

export default function Flujo(){
     
     return(
          
          <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                         <a className="navbar-brand" href="/">Cashflow</a>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                   <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link" href="Categorias">Categorias</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link" href="Flujo">Flujo de efectivo</a>
                                   </li>
                                   <li className="nav-item">
                                   <a className="nav-link" href='#'>Disabled</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </div>
     )

}