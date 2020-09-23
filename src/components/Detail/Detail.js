import React, {useEffect, useState} from 'react';
import './Detail.scss'
import ImageGallery from 'react-image-gallery';
import * as ApiService from 'ApiService/ApiService'
import Bar from 'components/BottomBar/BottomBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Detail(props) {

    const [product,
        setProduct] = useState({});
    const [productImages,
        setProductImages] = useState([]);

    const productId = props.match.params.id;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleYas = () => {
        setOpen(false);
        
    };

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
                <button type="button" onClick={handleClickOpen}>Buy now</button>
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
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you shore?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you shore you whant to buy this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleYas} color="primary" autoFocus>
            Yas
          </Button>
        </DialogActions>
      </Dialog>
    </>
    )
}
