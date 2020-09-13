import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Bar.scss'

export default function Bar({props}) {
  return (
        <>
          <div className='grow'>
            <AppBar position="static" className='appBarr'>
                <Toolbar>
                
                <Typography className='title' variant="h6" noWrap>
                    {props.title}
                </Typography>
            
            <div className='grow'/>

            <div className='path'>
                <Typography className='title' variant="h6" noWrap>
                    {props.path}
                </Typography>
            </div>
                </Toolbar>
            </AppBar>
            </div>
        </>
  );
}