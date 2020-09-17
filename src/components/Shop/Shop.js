import React, {useEffect, useState} from 'react';
import Item from 'components/Item/Item';
import * as ApiService from 'ApiService/ApiService'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import 'components/Shop/Shop.scss';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Filter from 'components/Shop/Filter'
import FilterPrice from 'components/Shop/FilterPrice'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import ListProducts from 'components/Shop/List'
import Bar from 'components/BottomBar/BottomBar' 

function Shop() {

    const [products,setProducts] = useState([]);
    const [sort,setSort] = React.useState('label_desc');
    const [categ,setCateg] = React.useState({
        prim:'none',
        sub:'none'});
    
    const [limit,
        setLimit] = React.useState(9);
    const [disabledButton,
        setDisabledButton] = React.useState(false);
    const [view, 
            setView] = React.useState('grid');
    const [open,
            setOpen] = React.useState(true);
    const [priceLimit,
        setPriceLimit] = React.useState('none');
        
    const handleChangeView = (event, nextView) => {
        setView(nextView);
    };

    function handleChangeCategory(newValue) {
        setCateg(newValue);
    }
    function handleChangePriceLimit(newV){
        setPriceLimit(newV);
    }

    const handleChange = (event) => {
        setSort(event.target.value)
    };

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
            .get("/api/products", `?limit=${limit}&sort=${sort.split('_')[0]}&order=${sort.split('_')[1]}&category=${categ.prim}&sub_category=${categ.sub}&price=${priceLimit}`)
            .then(res => {
                setProducts(res);
            })

        function handleResize() {
            if ( window.innerWidth <= 850 && view !== 'grid')
                setView('grid');    
            if ( window.innerWidth > 700 && open !== true)
                setOpen(true);    
        }
            
        window.addEventListener('resize', handleResize)
    }, [limit,sort,view,open,categ.sub,priceLimit]); // empty dependency array means this effect will only run once (like componentDidMount in classes)

    function FilterTitle({props}) {
        if (props === 'primary')
            return (<ListItemText className='titleFilter' primary="Product Categories"/>)
        else if (props === 'price')
            return (<ListItemText className='titleFilter' primary="Filter by price"/>)
        else return (<ListItemText className='titleFilter' primary="Filter by size"/>)
    }
       
    function Products() {
        return ( 
            <>
        <div className="shop">
            <div className='row'>
                
                <FormControl variant="outlined" className='formControl'>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        onChange={handleChange}>
                        <MenuItem value={'label_desc'}>Sort by Popularity</MenuItem>
                        <MenuItem value={'price_asc'}>Lowest price first</MenuItem>
                        <MenuItem value={'price_desc'}>Highest price first</MenuItem>
                    </Select>
                </FormControl>

                <ToggleButtonGroup className='toggle' value={view} exclusive onChange={handleChangeView}>
                    <ToggleButton className='btn' value="grid" aria-label="grid">
                        <ViewModuleIcon />  Grid
                    </ToggleButton>
                    <ToggleButton className='btn' value="list" aria-label="list">
                        <ViewListIcon /> List
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
                {view === 'grid' ? (
                    products && products.map((prod) => (
                        <Item key={prod.id} className='item' product={prod}></Item>
                    ))
                ) : ( 
                    products && products.map((prod) => (
                        <ListProducts key={prod.id} product={prod} ></ListProducts>
                    ))
                )
                }
            <div className='moreDiv'>
                <Button onClick={handleButtonClick} className='more' disabled={disabledButton} variant="contained" size="large" color="primary" >
                    EXPLORE MORE
                </Button>
            </div>
        </div>
        </>
        )
    }

    const bar = {
        title: 'SHOP',
        path: 'SHOP/ All categories'
    }

    return (
        <div className='shopPage'>
            <Bar props={bar}></Bar>
            <div className="flex-container">
                <div className="filter">
                    <ListItem className='filterMobile' button onClick={handleClick}>
                        <ListItemText className='titleFilter' primary="Filter"/> {open
                            ? <ExpandLess/>
                            : <ExpandMore/>}
                        </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        
                            <List component="div" key={1} className='border' disablePadding>
                            <FilterTitle props={'primary'} />
                                <ListItem className='ul'>
                                    <Filter handleChangeCategory={handleChangeCategory} ></Filter>
                                </ListItem>
                            </List>
                            <List component="div" key={2} className='border' disablePadding>
                            <FilterTitle props={'price'} />
                                <ListItem className='ul'>
                                    <FilterPrice handleChangePriceLimit={handleChangePriceLimit}> </FilterPrice>
                                </ListItem>
                            </List>

                    </Collapse>
                </div>
                <Products/>
            </div>
        </div>
    );
}

export default Shop;
