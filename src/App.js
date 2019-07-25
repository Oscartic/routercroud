import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Products from './components/Products'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import Product from './components/Product'
import Header from './components/Header'

function App() {

  const [ products, saveProducts ] = useState([])

  useEffect(() => {
    const apiQuery = async () => {
      // query json-server api
      const result = await axios.get('http://localhost:4000/restaurant');
      // set state
      saveProducts(result.data) 
    }

    apiQuery() 

  },[])

  

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/products" 
            render={ () => (
              <Products
                products = {products}
              />
            )}
          />
          <Route exact path="/new-product" component={AddProduct} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
        </main>
      <p className="mt-4 p2 text-center">
        Todos los Derechos reservados
      </p>
    </Router>
  );
}

export default App;
