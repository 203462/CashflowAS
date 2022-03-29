import React, { useState, useEffect } from 'react';
import BookList from './BookList'
import Form from './Form'

export default function Categorias() {
  const [book, setBook] = useState({
    clasificacion: '',
    categoria: '',
    subcategoria: ''
  })

  const [categorias, setBooks] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getBooks = () => {
      fetch('http://localhost:9000/api')
        .then(res => res.json())
        .then(res => setBooks(res))
    }
    getBooks()
    setListUpdated(false)
  }, [listUpdated])

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
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: 'center' }}>Lista de categorias</h2>
            <BookList book={book} setBook={setBook} categorias={categorias} setListUpdated={setListUpdated} />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: 'center' }}>Book Form</h2>
            <Form book={book} setBook={setBook} />
          </div>
        </div>
      </div>
    </div>
  );
}