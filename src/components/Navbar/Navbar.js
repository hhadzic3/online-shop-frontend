import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Button} from '@material-ui/core';
import {Link} from "react-router-dom";

import './Navbar.scss'
import MenuCategories from './MenuCategories';

// TODO: Styles should be in a separate .scss file which is imported from javascript file.
const useStyles = makeStyles((theme) => ({
    title: {
        display: 'none',
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            display: 'block'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme
            .transitions
            .create('width'),
        width: '100%',
        [
            theme
                .breakpoints
                .up('md')
        ]: {
            width: '20ch'
        }
    },
    sectionDesktop: {
        display: 'none',
        [
            theme
                .breakpoints
                .up('md')
        ]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [
            theme
                .breakpoints
                .up('md')
        ]: {
            display: 'none'
        }
    }
}));

export default function PrimarySearchAppBar() {

    const classes = useStyles();

    const [anchorEl,
        setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl,
        setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
            id={menuId}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
            open={isMenuOpen}
            onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/login">Log in</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/signup">Sign up</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <Button component={Link} to="/">
                Home
            </Button>
            <Button component={Link} to="/shop">
                Shop
            </Button>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className='grow'>
            <AppBar position="static" className='appBar'>
                <Toolbar>
                    
                    <MenuCategories/>

                    <Typography className={classes.title} variant="h6" noWrap>
                        Online shop
                    </Typography>

                    <div className={classes.search}>
                        <div className='searchIcon'>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                            inputProps={{
                            'aria-label': 'search'
                        }}/>
                    </div>
                    <div className='grow'/>
                    <div className={classes.sectionDesktop}>
                        <Button className='navButton' component={Link} to="/">
                            Home
                        </Button>
                        <Button className='navButton' component={Link} to="/shop">
                            Shop
                        </Button>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit">
                            <AccountCircle/>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>

                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit">
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}