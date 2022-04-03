import React from 'react';

const Form = ({book, setBook}) => {

    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let{categoria, subcategoria} = book

    const handleSubmit = () => {
      
        //validación de los datos
        if (categoria === '' || subcategoria === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:3001/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setBook({
            categoria: '',
            subcategoria: ''
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
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
 
export default Form;