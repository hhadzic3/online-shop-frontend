import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import { register } from 'ApiService/ApiService';
import jwt_decode from 'jwt-decode'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import 'components/Profile/Profile.scss'
import * as ApiService from 'ApiService/ApiService'

class Sell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      weight: '',
      description: '',
      category: [],
      categories: [],
      subcategories: [],
      open: false,
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    ApiService
      .get("/api/categories", "")
      .then(res => {
          const category = res;
          this.setState({ category });
      })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

    const newProduct = {
      seller_id: decoded.id ,
      name: this.state.name,
      price: this.state.price ,
      weight: this.state.weight ,
      description: this.state.description,
      label: "new_arrival", 
      stock: 1,
      categories: this.state.categories,
      subcategories: this.state.subcategories
    }
    

    if (!newProduct.name || !newProduct.price || !newProduct.weight || !newProduct.description  ){
        this.setState({ open: true });
        return;
    }

    ApiService.postProduct(newProduct)
      .then(res => {
        window.location.reload(false);
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

  return (
    <>
      <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center' }} autoHideDuration={6000} open={this.state.open} onClose={() => this.handleClose()}>
        <Alert onClose={() => this.handleClose()} severity="error">
            Error data!
        </Alert>
    </Snackbar>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className='paper'>
       
        <Typography component="h1" variant="h5">
          Become seller
        </Typography>
        <form className='form' onSubmit={this.onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Name"
                name='name'
                value={this.state.name}
                onChange={this.onChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Price"
                name='price'
                value={this.state.price}
                onChange={this.onChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$ </InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Weight"
                name='weight'
                value={this.state.weight}
                onChange={this.onChange}
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                name='description'
                value={this.state.description}
                onChange={this.onChange}
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12}>
            <div>
              <FormControl className='formControl'>
                <InputLabel id="demo-mutiple-checkbox-label">Select categories</InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  name='categories'
                  value={this.state.categories}
                  onChange={this.onChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(', ')} 
                >
                  {this.state.category.map((category) => (
                    (category.description === 'primary' ? (
                    <MenuItem key={category.id} value={category.id}>
                      <Checkbox checked={this.state.categories.indexOf(category.id) > -1} />
                      <ListItemText primary={category.name} />
                    </MenuItem>
                    ) : null
                    ) 
                  ))}
                </Select>
              </FormControl>
              <FormControl className='formControl'>
                <InputLabel id="demo-mutiple-checkbox-label">Select subcategories</InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  name='subcategories'
                  value={this.state.subcategories}
                  onChange={this.onChange}
                  input={<Input />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {this.state.category.map((category) => (
                    (category.description !== 'primary' ? (
                    <MenuItem key={category.id} value={category.id}>
                      <Checkbox checked={this.state.subcategories.indexOf(category.id) > -1} />
                      <ListItemText primary={category.name} />
                    </MenuItem>
                    ) : null
                    ) 
                  ))}
                </Select>
              </FormControl>
            </div>
            </Grid>

            <Grid item xs={12}>
              <input type="file" name="myImage" multiple />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className='submit'
          >
            Become seller
          </Button>
          
        </form>
      </div>
     
    </Container>
    </>
  );
  }
}


export default Sell;