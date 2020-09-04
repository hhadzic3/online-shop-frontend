import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import img from '../images/nike.jpg'
import './Item.scss'

const ConnectedItem = (props) => {

    const {product} = props;
    if (!product || product.length === 0) 
        return <h2>No products, sorry</h2>;
    
    return (
        <Card key={product.id} className="cardContainer">

            <CardActionArea >
                <CardMedia className='cardMedia' image={img} aria-label="Buy now"/>
                <CardContent className='cardContent'>
                    <p>
                        {product.name}
                    </p>
                    <p className='price'>Price: {product.price} $</p>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}

//export default withRouter(connect()(ConnectedItem));
export default ConnectedItem;
