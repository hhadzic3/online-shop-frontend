import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import 'components/About/About.scss'
import Bar from 'components/BottomBar/BottomBar.js'

function About() {
    const bar = {
        title: 'ABOUT',
        path: ''
    }
    return (
        <>
        <Bar title={bar.title} path={bar.path}></Bar>
        <Grid container component="main" >
            <div className='textAbout'>
                <h2>About us</h2>
                <Typography className='paper'>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                <Typography className='paper'>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            
            </div>
        </Grid>
        </>
    );
}

export default About;
