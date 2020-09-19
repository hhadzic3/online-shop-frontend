import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Item from 'components/Item/Item'

import * as ApiService from 'ApiService/ApiService'
import Table from 'components/Profile/Table'

function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
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
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`};
}

function SimpleTabs() {
    const [value,
        setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [productsTop,
        setProductsTop] = useState([]);
    const [productsNew,
        setProductsNew] = useState([]);
    const [productsLast,
        setProductsLast] = useState([]);

    useEffect(() => {

       
    }, []);

    return (
        <div className='tab'>
            <AppBar className='tabBar' position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab className='tabTitle' label="Active" {...a11yProps(0)}/>
                    <Tab className='tabTitle' label="Sold" {...a11yProps(1)}/>
                </Tabs>
            </AppBar>
            
            <TabPanel value={value} index={0}>
                <Table></Table>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Table></Table>
            </TabPanel>
        </div>
    );
}

export default SimpleTabs;