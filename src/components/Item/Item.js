import React from "react";
import img from '../images/nike.jpg'
import './Item.scss'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import {Link} from "react-router-dom";


const ConnectedItem = (props) => {

    const {product} = props;

    if (!product || product.length === 0) 
        return <h2>No products, sorry</h2>;
    
    const imageUrl= 'http://localhost:8080/api/product_images/'+ product.id;
    return (

        <div key={product.id} className="product-card">
            {product.label !== 'classic' && product.label !== 'feature' ? (
                <div className="badge">
                    {product.label}
                </div>
                ) : null
            }
            <Link to='/detail'>
                <div className="product-tumb">
                    <img
                        className='ima'
                        src={imageUrl}
                        alt='Product image'/>
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