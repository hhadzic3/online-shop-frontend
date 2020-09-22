import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Item from 'components/Item/Item'

import * as ApiService from 'ApiService/ApiService'
import Table from 'components/Profile/Table'
import SubTab from 'components/Profile/SubTab'
import ProfileCard from 'components/Profile/ProfileCard';

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
    
    function createData(Name, Price, Label) {
        return { Name, Price, Label };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, "Top rated"),
        createData('Ice cream sandwich', 237, "Top rated"),
        createData('Eclair', 262, "Top rated"),
        createData('Cupcake', 305, "Top rated"),
        createData('Gingerbread', 356, "Top rated")
      ];
      

    return (
        <div className='tab'>
            <AppBar className='tabBar' position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab className='tabTitle' label="Profile" {...a11yProps(0)}/>
                    <Tab className='tabTitle' label="Seller" {...a11yProps(1)}/>
                    <Tab className='tabTitle' label="Purchased" {...a11yProps(2)}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ProfileCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SubTab/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Table rows={rows} ></Table>
            </TabPanel>
        </div>
    );
}

export default SimpleTabs;