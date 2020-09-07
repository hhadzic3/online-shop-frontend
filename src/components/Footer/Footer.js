import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {Link} from "react-router-dom";
import footers from '../../data/FooterData';
import './Footer.scss'
import { AppBar } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Copyright() {
    return (
        <Typography variant="body2" align="center">
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
            <AppBar style={{backgroundColor: '#242424' }} position="static">
            <Container maxWidth="md" component="footer" className='footer'>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" gutterBottom>
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
                                    <li>
                                    {footer.title === 'Get in touch' ? (
                                        <div className='social'>
                                            <Link className='a' to='/'><FacebookIcon fontSize='small'/></Link>
                                            <Link className='a' to='/'><InstagramIcon fontSize='small'/></Link>
                                            <Link className='a' to='/'><TwitterIcon fontSize='small'/></Link>
                                        </div>                        
                                    ): null
                                    }
                                    </li>
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
            </AppBar>
        </React.Fragment>
    );
}