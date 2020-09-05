import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import img from '../images/nike.jpg'
import './Item.scss'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const ConnectedItem = (props) => {

    const {product} = props;
    if (!product || product.length === 0) 
        return <h2>No products, sorry</h2>;
    
    return (
      
        <>
        <div key={product.id} className="product-card">
		<div className="badge">Hot</div>
		<div className="product-tumb">
			<img className='ima' src="https://i.imgur.com/xdbHo4E.png" alt=""/>
        <div class="middle">
            <LocalMallOutlinedIcon fontSize='large' />
        </div>
		</div>
		<div className="product-details">
			{/*<span className="product-catagory">Women,bag</span>*/}
			<p>{product.name}</p>
			<div className="product-bottom-details">
				<div className="product-price"><small>  </small>{product.price} $</div>
			</div>
		</div>
	    </div>
        </>
    );
}
/* <Card key={product.id} classNameName="cardContainer">

            <CardActionArea >
                <CardMedia classNameName='cardMedia' image={img} aria-label="Buy now"/>
                <CardContent classNameName='cardContent'>
                    <p>
                        {product.name}
                    </p>
                    <p classNameName='price'>Price: {product.price} $</p>

                </CardContent>
            </CardActionArea>
    </Card>*/ 
//export default withRouter(connect()(ConnectedItem));
export default ConnectedItem;
