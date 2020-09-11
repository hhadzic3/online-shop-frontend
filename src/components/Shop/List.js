import React from 'react'
import './List.scss'

const List = (props) => {
    
    const {product} = props;

    const imageUrl= 'http://localhost:8080/api/product_images/'+ product.id;

    return (
        <div className="listItem" key={product.id}>
            <div className="container">
                <div className="images">

                    <img alt='ProductImage'
                        src={imageUrl}/>
                </div>  
                
                
                <div className="product">
                    <h1>{product.name}</h1>
                        <p className="desc">{product.description}The Nike Epic React Flyknit foam cushioning is responsive yet
                        light-weight, durable yet soft. This creates a sensation that not only enhances
                        the feeling of moving forward, but makes running feel fun, too.</p>
                        <h2>$ {product.price}</h2>
                    <div className="buttons">
                        <button className="add">Buy now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default List;