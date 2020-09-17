import React , {useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as ApiService from 'ApiService/ApiService'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function FilterList({handleChangeCategory}) {
  
  const [categories,setCategories] = React.useState([]);
  const [primary,setPrimary] = React.useState('none');
  const [subCategory,setSubCategory] = React.useState('none');
  

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
          ( value.description === 'primary' ? ( 
            
            <Accordion  key={value.name}>
              <AccordionSummary className='primary'
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={() => setPrimary(value.name)}
              >
                <Typography >{value.name}</Typography>
              </AccordionSummary>

                {categories.map((category) => (
                  <List key={category.id} onClick={() => {
                            let category = {
                              primary: value.name,
                              subCategory: category.name
                            }
                            handleChangeCategory(category);
                            }}>
                      { category.description.includes(op) ? ( 
                            <ListItem key={category.name}  button  >
                              <ListItemText primary={`${category.name}`}/> 
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
