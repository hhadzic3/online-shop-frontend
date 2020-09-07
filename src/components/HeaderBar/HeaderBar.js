import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import './HeaderBar.scss'

export default function DenseAppBar() {

    return (
        <AppBar style={{
            margin: 0
        }} position="static">
            <div className='headerBar'>
                <div className='social'>
                    <Link className='a' to='/'><FacebookIcon fontSize='small'/></Link>
                    <Link className='a' to='/'><InstagramIcon fontSize='small'/></Link>
                    <Link className='a' to='/'><TwitterIcon fontSize='small'/></Link>
                </div>
                <div className='links'>
                    <Link className='link' to='/login'>
                        <span>Login</span>
                    </Link>
                    <span className='link'>or</span>
                    <Link className='link' to='/signup'>
                        <span >Create an Account</span>
                    </Link>
                </div>
            </div>
        </AppBar>
    );
}