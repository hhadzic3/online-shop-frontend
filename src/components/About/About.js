import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import img from '../images/nike.jpg';
import {Typography} from '@material-ui/core';
import './About.scss'
// TODO: and FIXME: Styles should be in a separate .scss file which is imported
// from javascript file.

function About() {

    return (
        <Grid container component="main" className='root'>

            <Grid item xs={12} sm={10} md={6} elevation={6}>
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
            </Grid>

            <Grid item className='image' xs={false} sm={2} md={6}/>
        </Grid>

    );
}

export default About;
