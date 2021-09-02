import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CheckIcon from '@material-ui/icons/Check';

function ListPlan(props) {
    const [planCheck, setPlanCheck] = useState(false);

    useEffect(() => {
        setPlanCheck(props.planCheck);
    }, [props.planCheck])

    return (
        <List className='list-center'>
            <ListItem>
                <ListItemIcon><CheckIcon /></ListItemIcon>
                <ListItemText
                    primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
            </ListItem>
            <ListItem>
                <ListItemIcon><CheckIcon /></ListItemIcon>
                <ListItemText
                    primary={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                //secondary='Secondary text'
                />
            </ListItem>
            <ListItem disabled={!planCheck}>
                <ListItemIcon><CheckIcon /></ListItemIcon>
                <ListItemText
                    primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                //secondary='Secondary text'
                />
            </ListItem>
            <ListItem disabled={!planCheck}>
                <ListItemIcon><CheckIcon /></ListItemIcon>
                <ListItemText
                    primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                //secondary='Secondary text'
                />
            </ListItem>
        </List>
    );
}
export default ListPlan;