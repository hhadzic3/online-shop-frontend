import React ,{ useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import img from '../images/nike.jpg'
import axios from 'axios'

import { withStyles } from "@material-ui/core/styles";
import  Tab  from './Tab';
import Item from '../Item/Item'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundImage: `url(${img})`
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  actions:{
    margin:'auto'
  },
  white: {
    color: "#fff",
    textShadow: '2px 2px 4px #000000'
  }
}));


const cards1 = [1, 2, 3];

export default function Home() {
  const classes = useStyles();
  
  const [productsFeature, setProductsFeature] = useState([]);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:8080/api/products?label=feature')
    .then(response => {
      console.log(response.data)
      setProductsFeature(response.data)
    })
    .catch(err => {
      console.log(err);
    })

// empty dependency array means this effect will only run once (like componentDidMount in classes)
},[]);

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography className={classes.white} component={"span"} variant="h2" align="center"  gutterBottom>
              Easy shoping
            </Typography>
            <Typography className={classes.white} variant="h5" align="center" /*color="textSecondary"*/ >
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Buy now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Simelar products
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

          <h2>Feature Collection</h2>
          <Grid container spacing={4}>
            
            {cards1.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={img}
                    title="Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Shoes
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions}>
                    <Button size="small"  color="primary">
                      Shop now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <h2>Feature Products</h2>
          { productsFeature && productsFeature.map( (prod , index ) =>(
            <Item key={index} product={prod}></Item>
          ))}
          
          <Tab></Tab>

        </Container>
      </main>      
    </React.Fragment>
  );
}