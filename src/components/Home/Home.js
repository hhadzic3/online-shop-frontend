import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Tab from 'components/Home/Tab';
import Item from 'components/Item/Item'
import 'components/Home/Home.scss'
import List from 'components/Home/List'
import * as ApiService from 'ApiService/ApiService'
import { Link } from "react-router-dom";

export default function Home() {

    const [productsFeature,
        setProductsFeature] = useState([]);
    const [collections,
        setCollections] = useState([]);
    

    useEffect(() => {
        ApiService
            .get("/api/products", "?label=feature")
            .then(res => {
                setProductsFeature(res);
            })
            .catch(err => {
                console.log(err);
            })
        ApiService
            .get("/api/products", "?label=classic")
            .then(res => {
                setCollections(res);
            })
            .catch(err => {
                console.log(err);
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
                            The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.
                            </Typography>
                            <div className='heroButtons'>
                                <Grid container spacing={2} >
                                    <Grid item>
                                        <Button className='MUIbutton' component={Link} to='/shop' variant="contained">
                                            Shop now 
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
