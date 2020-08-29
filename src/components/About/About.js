import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import img from '../images/nike.jpg';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(4, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  root: {
    height: '100vh',
  },
  image: {
     backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[20] : theme.palette.grey[900],
    backgroundSize: '110vh',
    backgroundPosition: 'center',
  }
 
}));

function About() {
  const classes = useStyles();

  return (
      <Grid container component="main" className={classes.root}> 
      
      <Grid item xs={12} sm={10} md={6}  elevation={6} square>  
          <h2>About us</h2>
          <Paper className={classes.paper}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paper>
          <Paper className={classes.paper}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paper>    
      </Grid>
      
      <Grid item className={classes.image} xs={false} sm={2} md={6} />  
    </Grid>

  );
}
 /*   <>
    <Paper className={classes.paper}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}> About us </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper className={classes.paper}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paper>
        
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><img src={img}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>IMAGE</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>IMAGE</Paper>
        </Grid>
        
      </Grid>
    </div>
    </Paper>
    </> 
*/
export default About;
