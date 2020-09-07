import React, {useEffect, useState} from "react";
import img from '../images/nike.jpg'
import './Item.scss'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import {Link} from "react-router-dom";

import * as ApiService from '../../ApiService/ApiService'

const ConnectedItem = (props) => {

    const {product} = props;

    const [images,
        setImages] = React.useState([]);
    useEffect(() => {
        ApiService
            .get("/api/product_images", '/' + product.id)
            .then(res => {
                setImages(res);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    if (!product || product.length === 0) 
        return <h2>No products, sorry</h2>;
    
    //"https://i.imgur.com/xdbHo4E.png"
    const imageUrl= 'http://localhost:8080/api/product_images/'+ product.id;
    return (

        <div key={product.id} className="product-card">
            <div className="badge">{product.label
                    ? product.label
                    : 'Feature'}</div>
            <Link to='/detail'>
                <div className="product-tumb">
                    <img
                        className='ima'
                        src={imageUrl}
                        //'http://localhost:8080/api/product_images/1'
                        alt={images.image}/>
                    <div className="middle">
                        <LocalMallOutlinedIcon fontSize='large'/>
                    </div>
                </div>
            </Link>
            <div className="product-details">
                {/*<span className="product-catagory">Women,bag</span>*/}
                <p>{product.name}</p>
                <div className="product-bottom-details">
                    <div className="product-price">
                        <small></small>{product.price}
                        $</div>
                </div>
            </div>
        </div>

    );
}

//export default withRouter(connect()(ConnectedItem));
export default ConnectedItem;