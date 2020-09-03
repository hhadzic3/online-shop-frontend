import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import img from '../images/nike.jpg'


export default function CollectionCard() {

    const cards1 = [1, 2, 3];
    return (
        <React.Fragment>
            <Grid className='cardGrid' container spacing={4}>

                {cards1.map((card, index) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className='card'>
                            <CardMedia className='cardMedia' image={img} title="Title"/>
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Shoes
                                </Typography>
                            </CardContent>
                            <CardActions className='actions'    >
                                <Button size="small" color="primary">
                                    Shop now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </React.Fragment>
    );
}