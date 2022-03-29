import react from 'react';

export default function Home() {
     return (
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
                                        <a className="nav-link active" aria-current="page" href="Home">Home</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link" href="Categorias">Categorias</a>
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
               <div class="index-form">
                    <h1>CashFlow</h1>

                    <a href="Categorias" class="botton-login">Categorias</a>
                    <br />
                    <br />
                    <a href="Flujo" class="botton-register">Flujo de efectivo</a>
               </div>
          </div>
     )
}