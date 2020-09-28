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

import { Alert, AlertTitle }  from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import { useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode'

import { postOrder, putProduct } from 'ApiService/ApiService';

export default function Detail(props) {

    const [product,
        setProduct] = useState({});
    const [productImages,
        setProductImages] = useState([]);
    const [disabledButton,
        setDisabledButton] = React.useState(false);
    const productId = props.match.params.id;

    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);

    const history = useHistory();
    const handleClickOpen = () => {
        if (localStorage.usertoken){
            setOpen(true);
        }
        else history.push("/login");
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    const handleYas = () => {
        setOpen(false);
        //history.push("/shop");
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        const newOrder = {
            product_id: productId,
            price: product.price,
            order: {
                customer_id: decode.id,
                ammount: product.price,
                shipping_address: decode.shipping_address,
                order_address: decode.billing_address,
                order_email: decode.email
            }
        }
        postOrder(newOrder)
        .then(res => {    
        })
        putProduct(productId)
        .then( () => {
            setOpenAlert(true);
        })
        setDisabledButton(true);
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
    }, [productId]);

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
     <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} open={openAlert} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity="success">
            <AlertTitle>Success</AlertTitle>
            Congratulations, you bought <strong>{product.name}</strong>
        </Alert>
      </Snackbar>
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
                <button type="button" onClick={handleClickOpen} disabled={disabledButton}>Buy now</button>
            </div>
            <p className="sub">Details</p>
            <div className="description">
                <p>{product.description}</p>
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
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to buy this product?
            Payment: Cash on Delivery!
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
