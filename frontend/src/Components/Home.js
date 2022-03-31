
import './assetss/css/Login.css'

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
                                   <a className="nav-link" href='#'>Disabled</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
               <div>
               <div className="position-relative overflow-hidden p-3 p-md-5 m-md-5 text-center bg-light">
                         <div className="col-md-5 p-lg-5 mx-auto my-5">
                              <h1 className="display-4 fw-normal">Cashflow</h1>
                              <p className="lead fw-normal">Arquitectura de Software</p>
                              <a className="btn btn-outline-secondary" href="Categorias">Crear categorias</a>
                              <br/><br/>
                              <a className="btn btn-outline-secondary" href="Flujo">Flujo de efectivo</a>
                         </div>
                         <div className="product-device shadow-sm d-none d-md-block"></div>
                         <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    </div>
               </div>
          </div>
     )
}