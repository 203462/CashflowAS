import React from 'react';

const BookList = ({book, setBook, categorias, setListUpdated}) => {
    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:3001/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{categoria, subcategoria} = book
    const handleUpdate = id => {
        //validación de los datos
        if ( categoria === '' || subcategoria === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:3001/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setBook({
            clasificacion: '',
            categoria: '',
            subcategoria: ''
        })
        setListUpdated(true)
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                    <th>Subcategoria</th>
                </tr>
            </thead>
            <tbody>
                {categorias.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.categoria}</td>
                        <td>{book.subcategoria}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(book.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default BookList;