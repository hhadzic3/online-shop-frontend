import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom';

import './HeaderBar.scss'

export default function DenseAppBar() {

    return (
        <AppBar style={{
            margin: 0
        }} position="static">
            <div className='headerBar'>
                
                <div  className='links'>
                    <Link className='link' to='/login'>
                        <span>Login</span>
                    </Link>
                    <span className='link or'>or</span>
                    <Link className='link' to='/signup'>
                        <span >Create an Account</span>
                    </Link>
                </div>
            </div>
        </AppBar>
    );
}