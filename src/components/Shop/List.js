import React from 'react'
import 'components/Shop/List.scss'

const List = ({product}) => {

    return (
        <div className="listItem" key={product.id}>
            <div className="container">
                <div className="images">
                    <img alt='ProductImage' src={`${process.env.REACT_APP_IMAGE}${product.id}`}/>
                </div>  
                <div className="product">
                    <h1>{product.name}</h1>
                        <p className="desc">{product.description}</p>
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