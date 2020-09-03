import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import img from '../images/nike.jpg'

import Divider from '@material-ui/core/Divider';
import Tab from './Tab';
import Item from '../Item/Item'
import './Home.scss'

import * as ApiService from '../../ApiService/ApiService'
import CollectionCard from './CollectionCard';

export default function Home() {

    const [productsFeature,
        setProductsFeature] = useState([]);

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
                    <Container maxWidth="sm">
                        <Typography
                            className='white'
                            component={"span"}
                            variant="h2"
                            align="center"
                            gutterBottom>
                            Easy shoping
                        </Typography>
                        <Typography className='white' variant="h5" align="center">
                            Something short and leading about the collection below—its contents, the
                            creator, etc. Make it short and sweet, but not too short so folks simply skip
                            over it entirely.
                        </Typography>
                        <div className='heroButtons'>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Buy now
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Similar products
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className='cardGrid' maxWidth="md">
                    {/* End hero unit */}
                    <div className='subtitle'>
                        <h2>Feature Collection</h2>
                        <Divider/>
                    </div>

                    <CollectionCard/>

                    <div className='subtitle'>
                        <h2>Feature Products</h2>
                        <Divider/>
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