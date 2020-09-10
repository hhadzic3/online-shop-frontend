import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import * as ApiService from '../../ApiService/ApiService'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Shop.scss';

import Filter from './Filter'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function Shop() {

    const [products,
        setProducts] = useState([]);

    const [sort,
        setSort] = React.useState('price_asc');

    const handleChange = (event) => {
        setSort(event.target.value)
    };

    const categ = [
        {name:'primary'},
        {name:'color'},
        {name:'size'}
    ]

    const [open,
        setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        ApiService
            .get("/api/products", "?sortby=" + sort)
            .then(res => {
                setProducts(res);
            })
    }, []); // empty dependency array means this effect will only run once (like componentDidMount in classes)

    function FilterTitle({props}) {
        if (props === 'primary')
            return (<ListItemText className='titleFilter' primary="Product Categories"/>)
        else if (props === 'color')
            return (<ListItemText className='titleFilter' primary="Filter by color"/>)
        else return (<ListItemText className='titleFilter' primary="Filter by size"/>)
    }

    function Products() {
        return ( 
        <div className="shop">
            {products && products.map((prod) => (
                <Item key={prod.id} className='item' product={prod}></Item>
            ))}
        </div>
        )
    }


    return (
        <div className='shopPage'>
            <FormControl className='formControl'>
                <InputLabel id="demo-simple-select-label">Default Sorting</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    onChange={handleChange}>
                    <MenuItem value={'rating'}>Sort by Best rating</MenuItem>
                    <MenuItem value={'popularity'}>Sort by Popularity</MenuItem>
                    <MenuItem value={'newness'}>Sort by Newness</MenuItem>
                    <MenuItem value={'price_asc'}>Lowest price first</MenuItem>
                    <MenuItem value={'price_desc'}>Highest price first</MenuItem>
                </Select>
            </FormControl>
            <div className="flex-container">
                <div className="filter">
                    <ListItem className='filterMobile' button onClick={handleClick}>
                        <ListItemText className='titleFilter' primary="Filter"/> {open
                            ? <ExpandLess/>
                            : <ExpandMore/>}
                        </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        { categ.map( (value) => (
                            <List component="div" key={value.name} className='border' disablePadding>
                            <FilterTitle props={value.name} />
                                <ListItem >
                                    <Filter props={value.name}></Filter>
                                </ListItem>
                            </List>
                        ))}
                    </Collapse>
                </div>
                
                <Products/>
                
            </div>
        </div>
    );
}

export default Shop;
