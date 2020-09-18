import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'components/Signup/Signup.scss'
import Bar from 'components/BottomBar/BottomBar';

export default function SignUp() {
    const bar = {
        title: 'REGISTER',
        path: ' '
    }
    return (
        <>
        <Bar title={bar.title} path={bar.path} />
        
        </>
    );
}