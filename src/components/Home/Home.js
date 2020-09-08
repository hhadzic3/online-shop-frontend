import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Divider from '@material-ui/core/Divider';
import Tab from './Tab';
import Item from '../Item/Item'
import './Home.scss'
import List from './List'
import * as ApiService from '../../ApiService/ApiService'

export default function Home() {

    const [productsFeature,
        setProductsFeature] = useState([]);
    
    const collections = [
        {id:1,name:'Shoes nike',price:'start from 200'},
        {id:2,name:'Addidas',price:'start from 200'},
        {id:3,name:'HP laptops',price:'start from 200'}
    ]

    useEffect(() => {
        ApiService
            .get("/api/products", "?label=feature")
            .then(res => {
                setProductsFeature(res);
            })
    }, []); // will only run once (like componentDidMount in classes)

    return (
        <React.Fragment>
            <CssBaseline/>

            <main>
                {/* Hero unit */}
                <div className='heroContent'>
                    <div className='leftList'>
                        <List ></List>
                    </div>
                    <div className='rightText'>
                        <Container maxWidth="sm" >
                            <Typography
                                className='white title'
                                variant="h4"
                                align="left"
                                gutterBottom>
                                Nike shoes
                            </Typography>
                            <Typography
                                className='white price'
                                variant="h5"
                                align="left"
                                gutterBottom>
                                From $ 90
                            </Typography>
                            <Typography className='white txt' variant="h6" >
                                Something short and leading about the collection below—its contents, the
                                creator, etc. Make it short and sweet, but not too short so folks simply skip
                                over it entirely.
                            </Typography>
                            <div className='heroButtons'>
                                <Grid container spacing={2} >
                                    <Grid item>
                                        <Button className='MUIbutton' variant="contained">
                                            Buy now 
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </div>
                <Container className='cardGrid' maxWidth="md">
                    {/* End hero unit */}
                    <div className='subtitle'>
                        <h2>Feature Collection</h2>
                        <Divider style={{height:4}}/>
                    </div>

                    {collections && collections.map((prod, index) => (
                        <Item key={index} product={prod}></Item>
                    ))}

                    <div className='subtitle'>
                        <h2>Feature Products</h2>
                        <Divider style={{height:4}}/>
                    </div>

                    {productsFeature && productsFeature.map((prod, index) => (
                        <Item key={index} product={prod}></Item>
                    ))}

                    <Tab></Tab>
                </Container>
            </main>
        </React.Fragment>
    );
}