import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'components/Signup/Signup.scss'
import Bar from 'components/BottomBar/BottomBar';

export default function SignUp() {
    const bar = {
        title: 'REGISTER',
        path: ' '
    }
    return (
        <>
            <Bar title={bar.title} path={bar.path} />
            <Container className='main' component="main" maxWidth="xs">
            <CssBaseline/>
            <div className='paper'>
                <Typography className='title' component="h1" variant="h5">
                    REGISTER
                </Typography>
                <form className='form' noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <p>First Name</p>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                autoFocus/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Last Name</p>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                name="lastName"
                                autoComplete="lname"/>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Email</p>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                name="email"
                                autoComplete="email"/>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Password</p>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Billing address</p>
                            <TextField
                                required
                                variant="outlined"
                                id="address1"
                                name="address1"
                                fullWidth
                                autoComplete="shipping address-line1"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Shipping address</p>
                            <TextField
                                variant="outlined"
                                id="address2"
                                name="address2"
                                fullWidth
                                autoComplete="shipping address-line2"/>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <p>Phone number</p>
                            <TextField
                            variant="outlined"
                                required
                                id="zip"
                                name="zip"
                                fullWidth
                                autoComplete="shipping postal-code"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Country</p>
                            <TextField
                            variant="outlined"
                                required
                                id="country"
                                name="country"
                                fullWidth
                                autoComplete="shipping country"/>
                        </Grid>

                    </Grid>
                    <div className="end">
                        <Button className="submit register" type="submit" fullWidth variant="contained" color="primary">
                            REGISTER
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login" className='link' variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </div>

            </Container>
        </>
    );
}