import React ,{ useEffect, useState } from 'react';
import Item from '../Item/Item';
import axios from 'axios'
import * as ApiService from '../ApiService/ApiService'

function Shop() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ApiService.getAll("/api/products","").then(res => {
      setProducts(res);
    })
  },[]); // empty dependency array means this effect will only run once (like componentDidMount in classes)

  return (
    <div className="App">
      { products && products.map( (prod) =>(
        <Item key={prod.id} product={prod}></Item>
      ))}
    </div>
  );
}

export default Shop;
