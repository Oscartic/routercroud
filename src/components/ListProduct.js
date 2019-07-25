import React from 'react';
import { Link } from 'react-router-dom'

function ListProduct({ product }) {

    const deleteProduct = id => {
        console.log("eliminando", id);
    }

    return(
        <li  data-categoria={product.categoria} className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {product.nombrePlatillo} {''}
                <span className="font-weight-bold">
                    {product.precioPlatillo}
                </span>
            </p>
            <div>
                <Link 
                    to={`/products/edit/${product.id}`} 
                    className="btn btn-success mr-2"
                >
                    Editar
                </Link>

                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={()=> deleteProduct(product.id)}
                >
                    Eliminar &times;
                </button>
            </div>
        </li>
    )
}

export default ListProduct;