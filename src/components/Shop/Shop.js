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

    const [age,
        setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
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
            .get("/api/products", "")
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


    return (
        <div className='shopPage'>
            <FormControl className='formControl'>
                <InputLabel id="demo-simple-select-label">Default Sorting</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}>
                    <MenuItem value={10}>Best rating</MenuItem>
                    <MenuItem value={25}>Sort by Popularity</MenuItem>
                    <MenuItem value={25}>Sort by Newcomes</MenuItem>
                    <MenuItem value={15}>Lowest price first</MenuItem>
                    <MenuItem value={20}>Highest price first</MenuItem>
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
                <div className="shop">
                    {products && products.map((prod) => (
                        <Item key={prod.id} className='item' product={prod}></Item>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shop;
