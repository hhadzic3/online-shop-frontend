import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import 'components/Login/Login.scss'
import Bar from 'components/BottomBar/BottomBar';

export default function SignIn() {
    const bar = {
        title: 'LOGIN',
        path: ' '
    }
    return ( 
    <> 
    <Bar title={bar.title} path={bar.path} />
    
    </>
           
    );
}