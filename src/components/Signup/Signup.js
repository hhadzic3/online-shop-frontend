import React, { Component } from 'react'
import { register } from 'ApiService/ApiService'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'components/Signup/Signup.scss'
import Bar from 'components/BottomBar/BottomBar';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

class Register extends Component {

    constructor() {
        super()
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          billing_address: '',
          shipping_address: '',
          country: '',
          phone: '',
          open: false,
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

      onSubmit(e) {
        e.preventDefault()
    
        const newUser = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          billing_address: this.state.billing_address,
          shipping_address: this.state.shipping_address,
          phone: this.state.phone,
          country: this.state.country
        }

        if (!newUser.first_name || !newUser.last_name || !newUser.email || !newUser.password || !newUser.billing_address || !newUser.shipping_address || !newUser.phone || !newUser.country){
            this.setState({ open: true });
            return;
        }
    
        register(newUser)
            .then(res => {
            this.props.history.push(`/login`)
            })
            .catch(err => {
                console.log(err)
            })
      }

      handleClose(e, reason) {
        if (reason === 'clickaway') {
          return;
        }
        
        this.setState({ open: false });
      };
    

    render() {
    
        const bar = {
            title: 'REGISTER',
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
                <Typography className='title' component="h1" variant="h5">
                    REGISTER
                </Typography>
                <form className='form' noValidate onSubmit={this.onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <p>First Name</p>
                            <TextField
                                autoComplete="fname"
                                name="first_name"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                value={this.state.first_name}
                                onChange={this.onChange}
                                autoFocus/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Last Name</p>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="last_name"
                                name="last_name"
                                value={this.state.last_name}
                                onChange={this.onChange}
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
                                value={this.state.email}
                                onChange={this.onChange}
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
                                value={this.state.password}
                                onChange={this.onChange}
                                autoComplete="current-password"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Billing address</p>
                            <TextField
                                required
                                variant="outlined"
                                id="billing_address"
                                name="billing_address"
                                fullWidth
                                value={this.state.billing_address}
                                onChange={this.onChange}
                                autoComplete="shipping address-line1"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <p>Shipping address</p>
                            <TextField
                                variant="outlined"
                                id="shipping_address"
                                name="shipping_address"
                                fullWidth
                                value={this.state.shipping_address}
                                onChange={this.onChange}
                                autoComplete="shipping address-line2"/>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <p>Phone number</p>
                            <TextField
                                variant="outlined"
                                id="phone"
                                name="phone"
                                fullWidth
                                value={this.state.phone}
                                onChange={this.onChange}
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
                                value={this.state.country}
                                onChange={this.onChange}
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
}
export default Register;