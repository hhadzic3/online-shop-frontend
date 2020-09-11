import React from 'react'
import './List.scss'

const List = (props) => {
    const {product} = props;
    return (
        <div className="detailPage">
            <div className="container">
                <div className="images">

                    <img alt='ProductImage'
                        src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg"/>
                </div>  
                
                
                <div className="product">
                    <h1>{product.name}</h1>
                        <p className="desc">{product.description}The Nike Epic React Flyknit foam cushioning is responsive yet
                        light-weight, durable yet soft. This creates a sensation that not only enhances
                        the feeling of moving forward, but makes running feel fun, too.</p>
                        <h2>${product.price}</h2>
                    <div className="buttons">
                        <button className="add">Buy now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default List;