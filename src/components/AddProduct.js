import React, { useState } from 'react';
import Error from './Error';
import axios from 'axios'

function AddProduct() {

    const [name, saveName] = useState('')
    const [price, savePrice] = useState('')
    const [category, saveCategory] = useState('')
    const [error, saveError] = useState(false)

    const readRadio = e => {
        saveCategory(e.target.value)
    }

    const addProduct = async e => {
        e.preventDefault()

        if(name === '' || price === '' || category === '') {
            saveError(true) 
            return null 
        }

        saveError(false)

        try {
            const result = await axios.post('http://localhost:4000/restaurant', {
                nombrePlatillo: name,
                precioPlatillo: price,
                categoria: category
            }) 
            
            console.log(result);
        }catch(error) {

        }

    }

    return(
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Nuevo Producto</h1>

            {(error) ? <Error message="Todos los campos son obligatorios" /> : null }

            <form
                className="mt-5"
                onSubmit={addProduct}
            >
                <div className="form-group">
                    <label>Nombre Platillo</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder="Nombre Platillo"
                        onChange={e => saveName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Precio Platillo</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                        placeholder="Precio Platillo"
                        onChange={e => savePrice(e.target.value)}
                    />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="postre"
                        onChange={readRadio}
                    />
                    <label className="form-check-label">
                        Postre
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="bebida"
                        onChange={readRadio}
                    />
                    <label className="form-check-label">
                        Bebida
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="cortes"
                        onChange={readRadio}
                    />
                    <label className="form-check-label">
                        Cortes
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name="categoria"
                        value="ensalada"
                        onChange={readRadio}
                    />
                    <label className="form-check-label">
                        Ensalada
                    </label>
                </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
            </form>
        </div>
    )
}   

export default AddProduct;