import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Button} from '@material-ui/core';
import {Link, withRouter} from "react-router-dom";
import HeaderBar from "components/HeaderBar/HeaderBar"
import { useHistory } from "react-router-dom";
import 'components/Navbar/Navbar.scss'
import MenuCategories from 'components/Navbar/MenuCategories';
/*
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
*/
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
    sectionDesktop: {
        marginRight: '2%',
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

function Navbar() {

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

    const history = useHistory();

    function logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        history.push("/");
    }

    
    const loginRegLink = (
        <div>
            <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/register">Register</MenuItem>
        </div>
    )
    const userLink = (
        <div>
            <MenuItem onClick={handleMenuClose} component={Link} to="/profile">My account</MenuItem>
            <MenuItem onClick={e => {handleMenuClose(); logOut(e);}} /*onClick={logOut}*/>Logout</MenuItem>
        </div>
    )

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
            {localStorage.usertoken ? userLink : loginRegLink}
            
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
                <p>My Account</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
        <HeaderBar/>
        <div className='grow'>
            <AppBar position="static" className='appBar'>
                <Toolbar>
                <MenuCategories/>
                <Link to='/'>
                    <Typography className={classes.title} variant="h6" noWrap>
                        SHOPIFY
                    </Typography>
                </Link>
        <div className='grow'/>
                
            <div className={classes.sectionDesktop}>
                <Button className='navButton' component={Link} to="/">
                    Home
                </Button>
                <Button className='navButton' component={Link} to="/shop">
                    Shop
                </Button>
                <Button className='navButton acc'
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit">
                        My Account
                </Button>
            </div>
            <div className={classes.sectionMobile}>

                <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="default">
                    <MoreIcon />
                </IconButton>
            </div>
            </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
        </>
    );
}

export default withRouter(Navbar);