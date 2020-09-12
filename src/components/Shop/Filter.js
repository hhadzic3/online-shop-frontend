import React , {useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import * as ApiService from '../../ApiService/ApiService'


export default function FilterList({props}) {
  
  const [categories,setCategories] = React.useState([]);

  
  const {desc} = props;

    useEffect(() => {
        ApiService
            .get("/api/categories", "")
            .then(res => {
                setCategories(res);
            })
    }, []);

  

  return (
    <List dense className='rootFilter'>
      {categories.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value.name}`;
        return (
          ( value.description === props ? ( 

          <ListItem key={value.name} button>
            <ListItemText id={labelId} primary={`${value.name}`} />
            <ListItemSecondaryAction>
              
            </ListItemSecondaryAction>
          </ListItem>
          ) : null
          )
        );
      })}
    </List>
  );
}