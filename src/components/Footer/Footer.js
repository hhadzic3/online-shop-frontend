import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";
import footers from '../../data/FooterData';
import './Footer.scss'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" className='companyLink' to="https://harunhadzic.ml/">
                Online shop
            </Link>{' '} {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Pricing() {

    return (
        <React.Fragment>
            <Container maxWidth="md" component="footer" className='footer'>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer
                                    .description
                                    .map((item) => (
                                        <li component={Link} key={item.desc} color="textSecondary">
                                            <Link to={item.link} color="textSecondary">
                                                {item.desc}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        </React.Fragment>
    );
}