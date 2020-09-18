import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function FilterPrice({handleChangePriceLimit}) {

    const filterPrice = [
        '50',
        '200',
        '500',
        '2000',
        '10000',
        '100000'
    ];
    const under = 'Under: '

    return (

        <List dense className='rootFilter'>
            {filterPrice.map((value) => (
                <List dense key={value} onClick={() => handleChangePriceLimit(value)}>
                    <ListItem className='' button>
                        <ListItemText className='' primary={`${under} ${value} $`}/>
                    </ListItem>
                </List>
            ))}
        </List>
    );
}