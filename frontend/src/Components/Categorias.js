import React, { useState, useEffect } from 'react';
import BookList from './BookList'
import Form from './Form'
import Nav from './Nav';

export default function Categorias() {
  const [book, setBook] = useState({
    categoria: '',
    subcategoria: ''
  })

  const [categorias, setBooks] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getBooks = () => {
      fetch('http://localhost:3001/api/categorias')
        .then(res => res.json())
        .then(res => setBooks(res))
    }
    getBooks()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <div>
      <Nav/>
      <br/><br/>
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