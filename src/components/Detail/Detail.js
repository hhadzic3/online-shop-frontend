import React, {useEffect, useState} from 'react';
import './Detail.scss'
import ImageGallery from 'react-image-gallery';
import * as ApiService from 'ApiService/ApiService'
import Bar from 'components/BottomBar/BottomBar';

export default function Detail(props) {

    const [product,
        setProduct] = useState({});
    const [productImages,
        setProductImages] = useState([]);

    const productId = props.match.params.id;

    useEffect(() => {
        ApiService
            .get("/api/products", `/${productId}`)
            .then(res => {
                setProduct(res);
            })
        ApiService
            .get("/api/product_images/all", `/${productId}`)
            .then(res => {
                setProductImages(res);
            })
    }, []);

    const images = [];
    productImages.forEach( data => {
        images.push({
            original: `${process.env.REACT_APP_IMAGE}id/${data.id}`,
            thumbnail: `${process.env.REACT_APP_IMAGE}id/${data.id}`
        })
    })

    const bar = {
        title: 'SINGLE PRODUCT',
        path: 'SHOP/ Single product'
    }
    return ( 
    <> 
    <Bar title={bar.title} path={bar.path}/> 
    < div className = "card" > 
      <div className="card__body">
        <div className="half">
            <div className="image">
                <ImageGallery
                    showNav={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    items={images}/>
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
            <p className="sub">Details</p>
            <div className="description">
                <p>{product.description}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam
                    pariatur voluptate perferendis, asperiores aspernatur! Porro similique
                    consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis
                    esse numquam magni.</p>
            </div>
        </div>
      </div> 
    </div>
    </>
    )

}
