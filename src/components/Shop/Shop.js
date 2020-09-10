import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import * as ApiService from '../../ApiService/ApiService'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './Shop.scss';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
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
    const [limit,
        setLimit] = React.useState(9);
    const [disabledButton,
        setDisabledButton] = React.useState(false);
    const [view, setView] = React.useState('list');

    const handleChangeView = (event, nextView) => {
        setView(nextView);
    };


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
    const handleButtonClick = () => {
        if (limit <= products.length)
            setLimit(limit*2);
        else setDisabledButton(true);
    };

    useEffect(() => {
        ApiService
            .get("/api/products", `?limit=${limit}&sortby=${sort}`)
            .then(res => {
                setProducts(res);
            })
    }, [limit,sort]); // empty dependency array means this effect will only run once (like componentDidMount in classes)

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
            <div className='row'>
                <FormControl variant="outlined" className='formControl'>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        onChange={handleChange}>
                        {/*<MenuItem value={'newness'}>Sort by Newness</MenuItem>*/}
                        <MenuItem value={'popularity'}>Sort by Popularity</MenuItem>
                        <MenuItem value={'price_asc'}>Default sorting (Lowest price first)</MenuItem>
                        <MenuItem value={'price_desc'}>Highest price first</MenuItem>
                    </Select>
                </FormControl>

                <ToggleButtonGroup className='toggle' value={view} exclusive onChange={handleChangeView}>
                    <ToggleButton className='btn' value="module" aria-label="module">
                        <ViewModuleIcon />  Grid
                    </ToggleButton>
                    <ToggleButton className='btn' value="list" aria-label="list">
                        <ViewListIcon /> List
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            {products && products.map((prod) => (
                <Item key={prod.id} className='item' product={prod}></Item>
            ))}
            <Button onClick={handleButtonClick} className='more' disabled={disabledButton} variant="contained" size="large" color="primary" >
                EXPLORE MORE
            </Button>
        </div>
        )
    }

    return (
        <div className='shopPage'>
            
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
