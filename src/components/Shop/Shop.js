import React ,{ useEffect, useState } from 'react';
import Item from '../Item/Item';
import axios from 'axios'

function Shop() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:8080/api/products')
    .then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  },[]);

  return (
    <div className="App">
      { products && products.map( (prod) =>(
        <Item key={prod.id} product={prod}></Item>
      ))}
    </div>
  );
}

export default Shop;
