import React from 'react';
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
import 'components/Login/Login.scss'
import Bar from 'components/BottomBar/BottomBar';

export default function SignIn() {
    const bar = {
        title: 'LOGIN',
        path: ' '
    }
    return ( 
    <> 
    <Bar props={bar} />
    <Container className='main' component="main" maxWidth="xs">
        <CssBaseline/>
        <div className='paper'>
          <div className='title'>
            <Typography  component="h1" variant="h5">
                LOGIN
            </Typography>
            </div>
            <form className='form' noValidate>
                <p>Enter Email</p>
                <TextField
                    className='field'
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus/>
                    <p>Password</p>
                <TextField
                    className='field'
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
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
                <Grid className='end' container>
                    <Grid item xs>
                        <Link className='link' to="/" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link className='link' to='/register' variant="body2">
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