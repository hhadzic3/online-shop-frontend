import React, {useEffect, useState} from 'react';
import './Detail.scss'
import ImageGallery from 'react-image-gallery';

import * as ApiService from '../../ApiService/ApiService'

export default function Detail(props) {

  const [product,
    setProduct] = useState({});
  
    let productId = props.match.params.id;

    useEffect(() => {
        ApiService
            .get("/api/products", `/${productId}`)
            .then(res => {
                setProduct(res);
            })
    }, []); 
 
const images = [
  {
    original: `http://localhost:8080/api/product_images/${productId}`,
    thumbnail: `http://localhost:8080/api/product_images/${productId}`
  },
  {
    original: `http://localhost:8080/api/product_images/${productId}`,
    thumbnail: `http://localhost:8080/api/product_images/${productId}`,
  },
  {
    original: `http://localhost:8080/api/product_images/${productId}`,
    thumbnail: `http://localhost:8080/api/product_images/${productId}`,
  }
];


    const imageUrl= `http://localhost:8080/api/product_images/${productId}`;
    //<img src={imageUrl} alt=""/>
    
    return (       
    <div className="card">
      <div className="card__body">
        <div className="half">
          <div className="image">
            <ImageGallery showNav={false} showFullscreenButton={false} showPlayButton={false} items={images} />;
          </div>
        </div>
        <div className="half">
        <div className="featured_text">
            <h1>{product.name}</h1>

            <p className="price">$ {product.price}</p>
          </div>
            <div className="action">
                <button type="button">Buy now</button>
            </div>
            <p className="sub">Description</p>
          <div className="description">
            <p>{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
          </div>
        </div>
      </div>
      
    </div>
        )
    
}
