import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import './Login.scss'

export default function SignIn() {

    return ( 
    <> 
    <Container className='main' component="main" maxWidth="xs">
        <CssBaseline/>
        <div className='paper'>
            
            <Typography component="h1" variant="h5">
                LOGIN
            </Typography>
            <form className='form' noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"/>
                <FormControlLabel
                    className='remember'
                    control={< Checkbox value = "remember" color = "primary" />}
                    label="Remember me"/>
                <Button type="submit" fullWidth variant="contained" className='submit'>
                    Log In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link to="/" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to='/signup' variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    </Container> 
    </>
           
    );
}