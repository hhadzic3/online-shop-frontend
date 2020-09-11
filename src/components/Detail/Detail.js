import React, {Component} from 'react'
import './Detail.scss'

export default class Detail extends Component {
    render() {
        
    const imageUrl= 'http://localhost:8080/api/product_images/';
        return (
           
    <div class="card">
      
      <div class="card__body">
        <div class="half">
          
          <div class="image">
            <img src="https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg" alt=""/>
          </div>
        </div>
        <div class="half">
        <div class="featured_text">
            <h1>Nurton</h1>

            <p class="price">$210.00</p>
          </div>
            <div class="action">
                <button type="button">Buy now</button>
            </div>
            <p class="sub">Description</p>
          <div class="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
          </div>
          
          
        </div>
      </div>
      
    </div>
        )
    }
}
