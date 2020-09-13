import React , {useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import * as ApiService from '../../ApiService/ApiService'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
        const op = `${value.name}`;
        return (
          ( value.description === props ? ( 
            
            <Accordion  key={value.name}>
              <AccordionSummary className='primary'
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography >{value.name}</Typography>
              </AccordionSummary>

                {categories.map((value) => (
                  <List  key={value.id} className='' >
                      { value.description.includes(op) ? ( 
                            <ListItem className='' key={value.name} button>
                              <ListItemText className='' primary={`${value.name}`}/> 
                            </ListItem>
                        ) : null
                      }
                  </List>
                ))}
            </Accordion>
          ) : null
          )
        );
      })}
    </List>
  );
}