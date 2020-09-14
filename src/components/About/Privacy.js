import React from 'react';
import Grid from '@material-ui/core/Grid';
import './About.scss'

import {Typography} from '@material-ui/core';

import Bar from '../BottomBar/BottomBar'
function Privacy() {
    const bar = {
        title: 'ABOUT',
        path: ''
    }
    return ( 
    <> 
    <Bar props={bar}></Bar> < Grid container component = "main" > <div className='textAbout'>
        <h2>Privacy and Policy</h2>
        <Typography className='paper'>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
        <Typography className='paper'>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>

    </div> 
    < /Grid>
    </>
);
}

export default Privacy;