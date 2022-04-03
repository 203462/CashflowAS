import React, {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form_flujo = ({book, setBook,state}) => {

    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let{fecha, tipo, descripcion, categoria, subcategoria} = book

    const handleSubmit = () => {
      
        //validación de los datos
        if (fecha === '' || tipo === '' || descripcion === '' || categoria === '' || subcategoria === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:3001/api/add', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setBook({
            fecha: '',
            tipo: '',
            descripcion: '',
            categoria: '',
            subcategoria: ''
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="clasification" className="form-label">Fecha</label>
                <input value={fecha} name="fecha" onChange={handleChange} type="text" id="fecha" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="categorie" className="form-label">Tipo</label>
                <select name="tipo" onChange={handleChange} id="tipo" className="form-control">
                <option key="tipo" value= "tipo">Entrada</option>
                <option key="tipo" value= "tipo">Salida</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <input value={descripcion} name="descripcion" onChange={handleChange} type="text" id="descripcion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="categorie" className="form-label">Categoria</label>
                <input value={categoria} name="categoria" onChange={handleChange} type="text" id="categoria" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="subcategorie" className="form-label">SubCategoria</label>
                <input value={subcategoria} name="subcategoria" onChange={handleChange} type="text" id="subcategoria" className="form-control"/>
            </div>
       
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default Form_flujo;