import React,{useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Link} from 'react-router-dom';
import * as ApiService from '../../ApiService/ApiService'
import './Home.scss'

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {

const [categories,
    setCategories] = React.useState([]);

useEffect(() => {
    ApiService
        .get("/api/categories", "")
        .then(res => {
            setCategories(res);
        })
}, []);




  return (
    <div className='categoriesList'>
     <List>
                <ListItem button className='menuList' component={Link} to="/shop" key='categories'>
                    <ListItemText className='menuItem menuTitle' variant='h3' primary='Categories'/>
                </ListItem>
                <Divider/> 
                {categories.map((cat, index) => (
                    ( cat.description === 'primary' ? ( 
                    <>
                    <ListItem button className='menuList' component={Link} to="/shop" key={cat.name}>
                        <ListItemText className='menuItem' primary={cat.name}/>
                    </ListItem>
                        <Divider/> 
                        </>
                    ) : null
                    )
                ))}
                <ListItem button className='menuList' component={Link} to="/shop" key='allCate'>
                    <ListItemText className='menuItem' primary='All Categories'/>
                </ListItem>
            </List>
    </div>
  );
}