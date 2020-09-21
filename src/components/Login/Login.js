import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'components/Login/Login.scss'
import Bar from 'components/BottomBar/BottomBar';
import { login } from 'ApiService/ApiService';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { Route , withRouter} from 'react-router-dom';

class Login extends Component {
    
    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          open: false,
          errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleClose(e, reason) {
      if (reason === 'clickaway') {
        return;
      }
      
      this.setState({ open: false });
    };
  

    onSubmit(e) {
      e.preventDefault()
  
      const user = {
        email: this.state.email,
        password: this.state.password
      }
      if (!user.email || !user.password){
        this.setState({ open: true });
        return;
      }
  
      login(user).then(res => {
        if (!res.includes('not')){
          this.props.history.push(`/profile`)
        }
        else this.setState({ open: true });
      })

    }
    
    render() {
        
      const bar = {
          title: 'LOGIN',
          path: ' '
      }

     return ( 
      <> 
      <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} open={this.state.open} onClose={() => this.handleClose()}>
        <Alert onClose={() => this.handleClose()} severity="error">
            Error data!
        </Alert>
      </Snackbar>
        <Bar title={bar.title} path={bar.path} />
        <Container className='main' component="main" maxWidth="xs">
        <CssBaseline/>
        <div className='paper'>
          <div className='title'>
            <Typography  component="h1" variant="h5">
                LOGIN
            </Typography>
            </div>
            <form className='form' noValidate onSubmit={this.onSubmit}>
                <p>Enter Email</p>
                <TextField
                    className='field'
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.onChange}
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
                    value={this.state.password}
                    onChange={this.onChange}
                    autoComplete="current-password"/>
                <FormControlLabel
                    className='remember'
                    control={< Checkbox value = "remember" color = "primary" />}
                    label="Remember me"/>
                <Button type="submit" fullWidth variant="contained" className='submit'>
                    Log In
                </Button>
                <Grid className='end' container>
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
}

export default withRouter(Login);