import React , {useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import * as ApiService from '../../ApiService/ApiService'


export default function FilterList({props}) {
  
  const [categories,setCategories] = React.useState([]);

  const [checked, setChecked] = React.useState([1]);
  
  const {desc} = props;

    useEffect(() => {
        ApiService
            .get("/api/categories", "")
            .then(res => {
                setCategories(res);
            })
    }, []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(newChecked);
  };


  return (
    <List dense className='rootFilter'>
      {categories.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value.name}`;
        return (
          ( value.description === props ? ( 

          <ListItem key={value.name} button>
            <ListItemText id={labelId} primary={`${value.name}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          ) : null
          )
        );
      })}
    </List>
  );
}