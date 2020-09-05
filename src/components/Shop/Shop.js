import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import * as ApiService from '../../ApiService/ApiService'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Shop.scss';




function Shop() {

    const [products,
        setProducts] = useState([]);
    
    const [age, setAge] = React.useState('');
    
    const handleChange = (event) => {
        setAge(event.target.value);
    };


    useEffect(() => {
        ApiService
            .get("/api/products", "")
            .then(res => {
                setProducts(res);
            })
    }, []); // empty dependency array means this effect will only run once (like componentDidMount in classes)

    return (
        <div className='shopPage'>
            <FormControl className='formControl'>
                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    >
                        <MenuItem value={10}>Best rating</MenuItem>
                        <MenuItem value={25}>Sort by Popularity</MenuItem>
                        <MenuItem value={25}>Sort by Newcomes</MenuItem>
                        <MenuItem value={15}>Lowest price first</MenuItem>
                        <MenuItem value={20}>Highest price first</MenuItem>
                    </Select>
            </FormControl>    
            <div className="shop">
                {products && products.map((prod) => (
                    <Item key={prod.id} product={prod}></Item>
                ))}
            </div>
        </div>
    );
}

export default Shop;
