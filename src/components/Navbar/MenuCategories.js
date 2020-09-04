import React, {useEffect} from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import './Navbar.scss'
import * as ApiService from '../../ApiService/ApiService'

export default function MenuCategories() {

    const [state,
        setState] = React.useState({left: false});
    const [categories,
        setCategories] = React.useState([]);

    useEffect(() => {
        ApiService
            .get("/api/categories", "")
            .then(res => {
                setCategories(res);
            })
    }, []);

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({
            ...state,
            [anchor]: open
        });
    };

    const list = (anchor) => (
        <div
            className={clsx('list')}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                <ListItem button component={Link} to="/shop" key='0'>
                    <ListItemText primary='All Categories'/>
                </ListItem>
                <Divider/> {categories.map((text, index) => (
                    <ListItem button component={Link} to="/shop" key={text.name}>
                        <ListItemText primary={text.name}/>
                    </ListItem>
                ))}
            </List>

        </div>
    );


    return (
        <React.Fragment>
            <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleDrawer('left', true)}
                        className='menuButton'>
                        <MenuIcon/>
                    </IconButton>
                    <Drawer
                        anchor='left'
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}>
                        {list('left')}
                    </Drawer>
        </React.Fragment>
    );
}