import React, {Component} from 'react'
import './Detail.scss'

export default class Detail extends Component {
    render() {
        return (
            <div className="detailPage">
                <div className="container">
                    <div className="images">
                        <img alt='ProductImage'
                            src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg"/>
                    </div>  
                    <div className="slideshow-buttons">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                        <div className="four"></div>
                    </div>
                    
                    <div className="product">
                        <p>Women's Running Shoe</p>
                        <h1>Nike Epic React Flyknit</h1>
                        <h2>$150</h2>
                        <p className="desc">The Nike Epic React Flyknit foam cushioning is responsive yet
                            light-weight, durable yet soft. This creates a sensation that not only enhances
                            the feeling of moving forward, but makes running feel fun, too.</p>
                        <div className="buttons">
                            <button className="add">Buy now</button>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
