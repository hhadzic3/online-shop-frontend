import React , {useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as ApiService from '../../ApiService/ApiService'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function FilterList({handleChangeCategory}) {
  
  const [categories,setCategories] = React.useState([]);
  
    useEffect(() => {
        ApiService
            .get("/api/categories", "")
            .then(res => {
                setCategories(res);
            })
    }, []);

  return (
    <List dense className='rootFilter'>
      {categories.map((OneCategory) => {
        const op = `${OneCategory.name}`;
        return (
          ( OneCategory.description === 'primary' ? ( 
            
            <Accordion  key={OneCategory.name}>
              <AccordionSummary className='primary'
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography >{OneCategory.name}</Typography>
              </AccordionSummary>

                {categories.map((SubCategory) => (
                  <List key={SubCategory.id} onClick={() => {
                            let Category = {
                              primary: OneCategory.name,
                              subCategory: SubCategory.name
                            }
                            handleChangeCategory(Category);
                            }}>
                      { SubCategory.description.includes(op) ? ( 
                            <ListItem className='' key={SubCategory.name}  button  >
                              <ListItemText className=''  primary={`${SubCategory.name}`}/> 
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