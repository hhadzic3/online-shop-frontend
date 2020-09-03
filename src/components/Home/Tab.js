import React ,{ useEffect, useState }from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Item from '../Item/Item'

import * as ApiService from '../../ApiService/ApiService'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop:'30px'
  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [productsTop, setProductsTop] = useState([]);
  const [productsNew, setProductsNew] = useState([]);
  const [productsLast, setProductsLast] = useState([]);

  useEffect(() => {
    
    ApiService.get("/api/products","?label=new_arrival").then(res => {
      setProductsNew(res);
    })
    .then( 
      
      ApiService.get("/api/products","?label=top_rated").then(res => {
        setProductsTop(res);
      })
      )
    .then( 
      
      ApiService.get("/api/products","?label=last_chance").then(res => {
        setProductsLast(res);
      })
      )
      .catch(err => {
        console.log(err);
      })

// empty dependency array means this effect will only run once (like componentDidMount in classes)
},[]);


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="New Arrivals" {...a11yProps(0)} />
          <Tab label="Top Rated" {...a11yProps(1)} />
          <Tab label="Last Chance" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        { productsNew && productsNew.map((product) => (
          <Item key={product.id} product={product}></Item>
          )) }
      </TabPanel>
      <TabPanel value={value} index={1}>
      { productsTop && productsTop.map((product) => (
        <Item key={product.id} product={product}></Item>
        ))   }
      </TabPanel>
      <TabPanel value={value} index={2}>
      { productsLast && productsLast.map((product) => (
        <Item key={product.id} product={product}></Item>
        )) }
      </TabPanel>
        {/* 
    */}
    </div>
  );
}

export default SimpleTabs;